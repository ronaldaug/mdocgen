// This is a configuration file of the output HTML layout.

const config = {
    styleFunc: function (color, theme) {
        // const darkThemes = ['darkly','cyborg'];

        // if(darkThemes.includes(theme)) {
        //     return (new Styles()).darkTheme(color);
        // }

        return (new Styles()).lightTheme(color);
    },

    header: (title, theme = 'cosmo') => {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${title}</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/${theme}/bootstrap.min.css">
            <link rel="stylesheet" href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css">
            <link rel="stylesheet" href="css/style.css">
            </head>
           <body>
           <div class="right-toggle-btn"><span class="fa fa-bars"></span></div>
           <div class="logo-center-wrap">
                    <div class="row">
                        <div class="col-2"><div class="toggle-btn"><span class="fa fa-bars"></span></div></div>
                        <div class="col-8"><span class="logo me-3">${title.charAt(0)}</span><a href="#" class="navbar-brand">${title.split("-")[0]}</a></div>
                        <div class="col-2"></div>
                    </div>
           </div>
           <div class="container">
           <div class="row">
           <div class="col-lg-3">`;
    },

    generateMenu: (menuData, parentId = 0, depth = 0) => {
        const menuItems = menuData.filter(item => item.parent_id === parentId);
        let menuHtml = '';

        if (menuItems.length > 0) {
            menuHtml += depth === 0 ? '<ul class="left-menu list-group pl-4">' : '<ul class="submenu list-group pl-4">'; // Add class for submenus

            for (const item of menuItems) {
                const hasSubmenu = menuData.some(subItem => subItem.parent_id === item.id);
                const link = item.title.replace(/\.md$/, ''); // Remove .md extension (optional)

                menuHtml += `
              <li class="list-group-item">
                ${hasSubmenu ? `<a class="submenu-item" href="${link}.html">${link.replace('-', ' ')} <i class="fa fa-angle-right"></i></a>` : `<a class="menu-item" href="${link}.html">${link.replace('-', ' ')}</a>`}
                ${config.generateMenu(menuData, item.id, depth + 1)}
              </li>
            `;
            }

            menuHtml += `</ul>`;
        }

        return menuHtml;
    },

    leftSidebar: (title, files) => {
        return `<div class="left-sidebar">
            <div class="back-btn"><span class="ms-4 fa fa-arrow-left"></span></div>
            <div class="logo-wrap"><span class="logo me-3">${title.charAt(0)}</span><a href="#" class="navbar-brand">${title}</a></div>
             ${config.generateMenu(files)}
            </div>
            </div>
        <div class="col-lg-6">`;
    },

    mainContent: (source) => {
        return `<div class="main-content p-4 mb-2">
    ${source}
    </div>`;
    },

    pagination: (name, files) => {
        let pager = '<div class="row mb-5">';
        files.forEach((e, i) => {
            if (name == e.name) {

                // if there are both next and prev
                if (files[i - 1] !== undefined && files[i + 1] !== undefined) {
                    pager += `<div class="col-6">
                    <a href="${files[i - 1].name}.html">
                        <div class="page-box-left">
                            <span class="fa fa-arrow-left"></span> ${files[i - 1].name === 'index' ? 'Main' : files[i - 1].name}
                        </div>
                    </a>
                    </div>
                    <div class="col-6">
                    <a href="${files[i + 1].name}.html">
                       <div class="page-box-right">
                            ${files[i + 1].name} <span class="fa fa-arrow-right"></span>
                        </div>
                    </a>
                    </div>`;
                    return;
                }

                // if next page is undefined
                if (files[i - 1] !== undefined && files[i + 1] == undefined) {
                    pager += `<div class="col-12">
                    <a href="${files[i - 1].name}.html">
                        <div class="page-box-left">
                            <span class="fa fa-arrow-left"></span> ${files[i - 1].name === 'index' ? 'Main' : files[i - 1].name}
                        </div>
                    </a>
                    </div>`;
                    return;
                }

                // if prev page is undefined
                if (files[i + 1] !== undefined && files[i - 1] == undefined) {
                    pager += `<div class="col-12">
                    <a href="${files[i + 1].name}.html">
                        <div class="page-box-right">
                            ${files[i + 1].name} <span class="fa fa-arrow-right"></span>
                        </div>
                    </a>
                    </div>`;
                }
            }
        })
        pager += '</div>'
        return pager;
    },

    rightSidebar: (source) => {
        let Dom = document.createElement("ul");
        Dom.innerHTML = source;
        const heads = Dom.querySelectorAll("h1,h2");
        let rightLists = '';
        if (heads.length > 0) {
            let count = 0;
            heads.forEach((e, i) => {
                if (e.tagName == 'H1') {
                    count++;
                }
                rightLists += `<li class="list-group-item ${e.tagName == 'H2' ? 'h2' : ''}"><a href="#${e.id}"> ${e.tagName == 'H1' ? count : ''} - ${e.innerText}</a></li>`;
            });
        }

        return `</div><!-- col-lg-7 -->
        <div class="col-lg-3">
           <div class="right-sidebar p-4 mt-4">
               <a class="right-back-btn float-end"><span class="fa fa-times"></span></a>
                <p class="up-case">Contents</p>
                <ul class="right-menu list-group">
                    ${rightLists}
                </ul>
           </div>
        </div> <!-- col-lg-2 -->
        </div></div>`
    },

    scriptText: `const rightSidebar = document.querySelector(".right-sidebar");
const leftSidebar = document.querySelector(".left-sidebar");
const rightMenu = document.querySelectorAll(".right-sidebar ul li a");
const leftMenu = document.querySelectorAll(".left-sidebar ul li a");

// active class to left sidebar
leftMenu.forEach(menu => {
    if (menu.href == window.location.href) {
        menu.parentNode.classList.add("active");

        const submenu = menu?.parentNode.closest('.submenu');
        const secondSubmenu = menu?.parentNode.closest('.submenu')?.parentNode.closest('.submenu');

        const makeActive = (ele) => {
            ele.classList.add("show");
            ele?.parentNode.querySelector(".fa-angle-right").classList.add("rotate");
        }

        if (submenu) {
            makeActive(submenu);
        }

        if (secondSubmenu) {
            makeActive(secondSubmenu);
        }
    } else {
        menu.parentNode.classList.remove("active");
    }
})

// active class to right sidebar
rightSidebar.addEventListener("click", e => {
    rightMenu.forEach(menu => {
        menu.classList.remove("active");
    })
    if (e.target.tagName == 'A' && e.target.hasAttribute("href")) {
        e.target.classList.add("active");
    }
})

// smooth scroll to
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let currentID = this.getAttribute('href');
        let targetName = currentID ? currentID.substring(1) : currentID;
        let targetId = document.querySelector("a[name='" + targetName + "']");
        if (targetId) {
            targetId.scrollIntoView({
                behavior: 'smooth'
            });
            return;
        }

        targetId = document.querySelector(currentID);
        if (targetId) {
            targetId.scrollIntoView({
                behavior: 'smooth'
            });

            if (window.innerWidth < 576) {
                setTimeout(() => {
                    rightSidebar.setAttribute("style", "transform:translateX(200%)")
                }, 800)
            }
        }

    });
});

// left sidebar
const backBtn = document.querySelector(".back-btn");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", e => {
    leftSidebar.setAttribute("style", "transform:translateX(0)");
})

backBtn.addEventListener("click", e => {
    leftSidebar.removeAttribute("style");
})

// Dropdown toggle for submenus
const parentMenuItems = document.querySelectorAll('.submenu-item');
parentMenuItems.forEach(menuItem => {
    menuItem.addEventListener('click', (event) => {
        event.preventDefault();

        const submenu = menuItem.nextElementSibling;
        const icon = menuItem.querySelector('.fa-angle-right');
        submenu.classList.toggle('show');
        icon.classList.toggle('rotate'); // Toggle icon rotation
    });
});


// right sidebar
const rightBackBtn = document.querySelector(".right-back-btn");
const rightToggleBtn = document.querySelector(".right-toggle-btn");

rightToggleBtn.addEventListener("click", e => {
    rightSidebar.setAttribute("style", "transform:translateX(0)");
})

rightBackBtn.addEventListener("click", e => {
    rightSidebar.removeAttribute("style");
})

`,
    footer: `
    <script src="js/main.js"></script>
    </body></html>`
}