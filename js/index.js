const docTitle = document.querySelector("#doc-title");
const btnGenerate = document.querySelector(".btn-generate");
const uploadFom = document.querySelector("#uploadForm");

// Sometimes, a tag id="" includes number and it becomes invalid selector
removeNumberInLinks = (source) => {
    return source.replace(/id="(.*?)"/gm, (match) => {
        return match.replace(/[0-9]/g, '');
    });
}

// Sometimes, user point github doc with ".md" extension. Just replace it with ".html"
replaceMdToHTML = (source) => {
    return source.replace(/href="(.*?)"/gm, (match) => {
        return match.replace(/\.md/g, '.html');
    });
}

// Make custom markdown langs, e.g :::warning
const replaceCustomMarkdown = (source) => {

    // rule1 - :::warning|success|error
    return source.replace(/:::(warning|error|success)(.*?):::/gms, (whole_match, match1, match2) => {
        return `<div class="alert-${match1}">${match2}</div>`;
    });

}

const prepareContent = (source) => {
    if (!source) return;
    let content = removeNumberInLinks(source);
    content = replaceMdToHTML(content);

    // Custom Markdown Forumlas
    content = replaceCustomMarkdown(content);
    return content;
}

// SHow Step Two, Hide One
const showStepTwo = () => {
    document.querySelector(".step-one").style.display = 'none';
    document.querySelector(".step-two").style.display = 'block';
}

// Loading Spinner
const loading = (condition) => {
    const spinner = document.querySelector(".spinner");
    spinner.innerHTML = condition ? '<div class="loader"></div>' : '';
}

// Loading Spinner
const showMsg = (condition, msg) => {
    const MsgBox = document.querySelector(".message");
    MsgBox.innerHTML = `<div class="alert ${condition ? 'alert-success' : 'alert-danger'}">${msg}</div>`;
    setTimeout(() => {
        MsgBox.innerHTML = '';
    }, 3000)
}


let files = [];
let sortFiles = [];

// ShowDown Library
let md = new showdown.Converter({ tables: true });

jQuery(function ($) {


    function buildJSON($li) {
        var this_id = $li.attr("data-id");
        var parent_id = $li.attr("data-parent");
        var level = $li.attr("data-level");
        if (level == 1) { parent_id = 0; }
        var title = $li.find(".branch-title").html();
        var subObj = { "id": this_id, "parent_id": parent_id, "level": level, "title": title };
        $li.children('ul').children().each(function () {
            if (!subObj.children) {
                subObj.children = [];
            }
            subObj.children.push(buildJSON($(this)));
        });
        return subObj;
    }

    function fetchChild() {
        let data = [];
        // #sortable is your <ul> tag, change it
        $('#previewFiles > li').each(function () {
            data.push(buildJSON($(this)));
        });
        return data;
    }
    
    // Preview files
    function previewFileNames(event) {
        const fileList = event.target.files;
        const fileNamesPreview = document.getElementById('previewFiles');
        fileNamesPreview.innerHTML = ''; // Clear previous previews

        const data = [];
        let index = 0;
        for (const file of fileList) {
            data.push({
                id: index,
                level: 1,
                parent_id: 0,
                title: file.name
            });
            index++;
        }

        // enable sort
        const sortable = new TreeSortable({
            treeSelector: '#previewFiles',
            maxLevel: 3
        });

        const $content = data.map(sortable.createBranch);
        $('#previewFiles').html($content);

        sortable.run();

        const sortableList = document.querySelector('.sortable-list');
        sortableList.classList.remove('d-none');


        sortable.onSortCompleted(async function (event, ui) {
            sortFiles = await fetchChild();
            console.log(JSON.stringify(sortFiles,null,4))
        });
    }

    $('#files').on('change', previewFileNames);
})

// Get file names via input
const uploadFiles = async () => {

    const mdInput = document.querySelector("input[type='file']");
    let fileData = new FormData();
    Object.values(mdInput.files).forEach((file, i) => {
        fileData.append('file' + i, file);
    })

    loading(true);
    const fileUp = await fetch("upload.php", {
        method: "post",
        body: fileData
    })
    const responseFiles = await fileUp.json();
    if (responseFiles.status !== 200) {
        showMsg(false, 'Failed to upload files');
        loading(false);
        return;
    }


    // Here we don't use responseFiles, we will use sort files only
    sortFiles.forEach(async (file) => {

        let filename = file.title;
        if (!filename) return;

        if (filename === 'README.md') {
            filename = 'index.md';
        }

        const readmd = await fetch("/md/" + filename);
        const res = await readmd.text();
        const data = {
            name: filename.split(".")[0],
            source: prepareContent(md.makeHtml(res))  // convert and store as HTML format
        };
        files.push(data)
    })
    
    loading(false);
    showMsg(true, 'Successfully upload files');
    showStepTwo();
}

// Upload files Event
uploadFom.addEventListener("submit", e => {
    e.preventDefault();
    uploadFiles();
})

// Generate Documentation goes here
// most data just grab from config.js
const generateFiles = () => {
    if (!docTitle.value) {
        alert("Please add document title")
        return;
    }

    // Theme color
    const color = document.querySelector('input[name="theme_color"]').value;
    const theme = document.querySelector('select[name="theme"]').value;

    // JSZip library
    let zip = new JSZip();

    // destructure from config.js
    const { footer, styleFunc, scriptText } = config;

    // keep sidebar outside the loop
    const sidebar = config.leftSidebar(docTitle.value, sortFiles);

    // loop each file and add into zip folder
    for (i = 0; i < files.length; i++) {
        const { name, source } = files[i];

        // single HTML page
        const htmlpage = `
            ${config.header(`${docTitle.value} - ${name === 'index' ? 'Main' : name}`, theme)}
            ${sidebar}
            ${config.mainContent(source)}
            ${config.pagination(name, files)}
            ${config.rightSidebar(source)}
            ${footer}
            `;

        zip.file(`${name}.html`, htmlpage);
    }

    const styleText = styleFunc(color, theme);

    // create JS folder
    const jsFolder = zip.folder("js");

    // create CSS folder
    const cssFolder = zip.folder("css");

    // Add javascript codes to main.js
    jsFolder.file('main.js', scriptText)

    // Add css codes to style.css
    cssFolder.file('style.css', styleText);


    // Download zip folder with time stamp
    zip.generateAsync({ type: "blob" })
        .then(function (content) {
            const foldername = Date.now();
            saveAs(content, `doc-${foldername}.zip`);
        });

}


//  Listen on when "generate" button click
btnGenerate.addEventListener('click', generateFiles)