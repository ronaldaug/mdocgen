// This is a configuration file of the output HTML layout.

const config = {
    styleFunc : function(color){
    return `body {
        font-family: Roboto, sans-serif;
        letter-spacing:0.01rem;
        color:#444;
    }

    h1,h2,h3,h4,h5,h6{
        font-family:'Rokkitt',sans-serif;
        color:#000;
    }

    h1,h2{
        margin:3rem 0 3rem;
        line-height:3.5rem;
        position:relative;
        padding-left:20px;
    }

    h1:before,h2:before{
        left:0;
        content:"";
        position:absolute;
        background:${color};
    }

    h1:before{
       top:0;
       width:6px;
       height:100%;
    }

    h2:before{
       top:15%;
       width:2px;
       height:60%;
    }
    .container{
        max-width:100%;
        width:100%;
    }
    td,th{
        border: 1px solid #ddd;
        padding: 10px;
    }
    blockquote p {
        border-left: 2px solid #ddd;
        padding: 10px;
        background: #99999921;
    }
    pre{
        padding: 10px;
        background: #e6f7f9;
    }
    a{
        color:#222;
    }
    a:hover{
        text-decoration:none;
    }
    .fa {
        font-size: 20px;
    }
    .fa:hover{
        cursor:pointer;
    }
    .main-content p img{
        width:100%;
    }
    .logo-wrap span.logo,.logo-center-wrap span.logo{
        font-weight: bold;
        font-size: 22px;
        border-radius:2px;
        color: #fff;
        padding: 10px 16px;
        background: ${color};
    }
    .logo-center-wrap{
        width:100%;
        height:80px;
        text-align:center;
        line-height:80px;
        display:none;
    }
   .page-title,.navbar-brand,.up-case{
     text-transform: uppercase;
   }

   .right-sidebar ul li a.active {
        color: ${color};
    }
    .right-sidebar ul li a.active:before {
        background: ${color};
        height: 100%;
        width: 2px;
        left: -26px;
        top: 0;
        position: absolute;
        content: '';
    }
    .logo-wrap {
        border-bottom: 1px solid #ddd;
        width:100%;
        height: 80px;
        line-height: 80px;
        text-align:center;
    }
    .back-btn{
        display:none;
    }
    ul li.list-group-item{
        background-color:transparent;
        padding:6px;
        border:1px solid transparent;
    }
    ul li.list-group-item a{
        text-decoration:none;
        text-transform: capitalize;
    }
    ul li.list-group-item a.h2{
        padding-left:20px;
    }
    ul.right-menu li a{
        font-size:12px;
    }
    ul.right-menu li a:hover{
        color:${color};
    }


    ul.left-menu li.list-group-item:hover{
        background:#e9f0f7;
    }
    ul.left-menu li.list-group-item.active{
        background:#fff;
        border-left:1px solid #ddd;
        border-bottom:1px solid #ddd;
        border-right:1px solid #fff;
    }
    ul.left-menu li.list-group-item.active a{
        color:${color};
    }

    ul.left-menu li.list-group-item{
        padding-left:20px;
        border-top:1px solid #ddd;
    }
    ul.left-menu li.list-group-item:first-child{
        border-top:1px solid transparent;
    }
    .back-btn {
        box-shadow: 0 1px 5px #ddd;
        background: #fff;
        height: 50px;
        width: 100%;
        line-height: 50px;
    }

    .left-sidebar{
        transition:all ease 0.4s;
        z-index: 3;
        position:fixed;
        background:#F5F7F9;
        top:0;
        left:0;
        border-right:1px solid #ddd;
        width:290px;
        height:100%;
        overflow-y: scroll;
    }
    .right-sidebar{
        overflow-y:scroll;
        overflow-x:hidden;
        position:fixed;
        top:0;
        transition:all ease 0.4s;
        right:0;
        width:300px;
        height:80vh;
        border-left:1px solid #ddd;
    }
    .right-toggle-btn{
        right:-100px;
        top:100px;
        position:fixed;
        z-index:2;
        padding:4px;
        box-shadow:0 1px 10px #ddd;
        background:#fff;
    }
    .page-box-left,.page-box-right{
        box-shadow: 0 1px 5px #ddd;
        width: 100%;
        padding:10px;
        border-radius:4px;
    }
    .page-box-right {
        text-align:right;
    }
    .page-box-right:hover,.page-box-left:hover{
        border:1px solid #7af1fc;
    }
    @media(min-width:992px){
        .right-back-btn{
            display:none;
        }
    }
    @media (max-width:992px){
        .logo-wrap{
            display:none;
        }
        .back-btn{
            display:block;
        }
        .left-sidebar{
            transform:translateX(-100%);
        }
        .right-sidebar{
            background:#fff;
            z-index:2;
            box-shadow:0 1px 10px #ddd;
            transform:translateX(200%);
            border-left:0;
        }
        .right-toggle-btn{
            right:10px;
        }
       .logo-center-wrap{
            display:block;
            box-shadow:0 1px 5px #ddd;
        }
        .logo-center-wrap div.row{
            width:100%;
            padding:0;
            margin:0;
        }
    }
    @media (max-width:578px){
        .logo{
            transform:scale(0.8);
        }
    }`
    },
    header:(title)=>{
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css">
            <link rel="stylesheet" href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css">
            <link rel="stylesheet" href="css/style.css">
            </head>
           <body>
           <div class="right-toggle-btn"><span class="fa fa-bars"></span></div>
           <div class="logo-center-wrap">
                    <div class="row">
                        <div class="col-2"><div class="toggle-btn"><span class="fa fa-bars"></span></div></div>
                        <div class="col-8"><span class="logo mr-3">${title.charAt(0)}</span><a href="#" class="navbar-brand">${title.split("-")[0]}</a></div>
                        <div class="col-2"></div>
                    </div>
           </div>
           <div class="container">
           <div class="row">
           <div class="col-lg-3">`;
    },
    leftSidebar: (title,data)=>{
        let lists = '';
        for(let i = 0; i < data.length; i++){
            const {name} = data[i];
            lists += `<li class="list-group-item"><a href="${name}.html">${name.replaceAll("-"," ")}</a></li>`
        }

        return `<div class="left-sidebar">
        <div class="back-btn"><span class="ml-4 fa fa-arrow-left"></span></div>
        <div class="logo-wrap"><span class="logo mr-3">${title.charAt(0)}</span><a href="#" class="navbar-brand">${title}</a></div>
        <ul class="left-menu list-group pl-4 pt-4">
                ${lists}
        </ul>
        </div>
        </div>
        <div class="col-lg-6">`
    },
    mainContent:(source)=>{
        return `<div class="main-content p-4 mb-2">
    ${source}
    </div>`;
    },
    pagination:(name,files)=>{
        let pager = '<div class="row mb-5">';
        files.forEach((e,i)=>{
            if(name == e.name){
                if(files[i-1] !== undefined && files[i+1] !== undefined){
                    pager += `<div class="col-6">
                    <a href="${files[i-1].name}.html">
                        <div class="page-box-left">
                            <span class="fa fa-arrow-left"></span> ${files[i-1].name}
                        </div>
                    </a>
                    </div>
                    <div class="col-6">
                    <a href="${files[i+1].name}.html">
                       <div class="page-box-right">
                            ${files[i+1].name} <span class="fa fa-arrow-right"></span>
                        </div>
                    </a>
                    </div>`;
                    return;
                }
                if(files[i-1] !== undefined && files[i+1] == undefined){
                    pager += `<div class="col-12">
                    <a href="${files[i-1].name}.html">
                        <div class="page-box-left">
                            <span class="fa fa-arrow-left"></span> ${files[i-1].name}
                        </div>
                    </a>
                    </div>`;
                    return;
                }
                if(files[i+1] !== undefined && files[i-1] == undefined){
                    pager += `<div class="col-12">
                    <a href="${files[i+1].name}.html">
                        <div class="page-box-right">
                            ${files[i+1].name} <span class="fa fa-arrow-right"></span>
                        </div>
                    </a>
                    </div>`;
                }
            }
        })
        pager += '</div>'
        return pager;
    },
    rightSidebar:(source)=>{
        let Dom = document.createElement("ul");
        Dom.innerHTML = source;
        const heads = Dom.querySelectorAll("h1,h2");
        let rightLists = '';
        if(heads.length > 0){
            let count = 0;
            heads.forEach((e,i)=>{
                if(e.tagName == 'H1'){
                    count++;
                }
                rightLists += `<li class="list-group-item"><a class="${e.tagName == 'H2'?'h2':''}" href="#${e.id}"> ${e.tagName == 'H1'?count:''} - ${e.innerText}</a></li>`;
            });
        }

       return `</div><!-- col-lg-7 -->
        <div class="col-lg-3">
           <div class="right-sidebar p-4 mt-4">
               <a class="right-back-btn pull-right"><span class="fa fa-times"></span></a>
                <p class="up-case">Contents</p>
                <ul class="right-menu list-group">
                    ${rightLists}
                </ul>
           </div>
        </div> <!-- col-lg-2 -->
        </div></div>`
    },
    scriptText:`const rightSidebar  = document.querySelector(".right-sidebar");
    const leftSidebar  = document.querySelector(".left-sidebar");
    const rightMenu  = document.querySelectorAll(".right-sidebar ul li a");
    const leftMenu  = document.querySelectorAll(".left-sidebar ul li a");

    // active class to left sidebar
    leftMenu.forEach(menu=>{
        if(menu.href == window.location.href){
                menu.parentNode.classList.add("active");
        }else{
                menu.parentNode.classList.remove("active");
        }
    })

    // active class to right sidebar
    rightSidebar.addEventListener("click",e=>{
            rightMenu.forEach(menu=>{
                menu.classList.remove("active");
            })
            if(e.target.tagName == 'A' && e.target.hasAttribute("href")){
                e.target.classList.add("active");
            }
    })

       // smooth scroll to
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                let currentID = this.getAttribute('href');
                let targetName = currentID ? currentID.substring(1) : currentID;
                let targetId  = document.querySelector("a[name='"+targetName+"']");
                if(targetId){
                    targetId.scrollIntoView({
                        behavior: 'smooth'
                    });
                    return;
                }

                currentID = !isNaN(currentID.charAt(0)) ? currentID.substring(1) : currentID;
                targetId  = document.querySelector(currentID);
                if(targetId){
                    targetId.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                
            });
        });

// left sidebar
const backBtn = document.querySelector(".back-btn");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click",e=>{
    leftSidebar.setAttribute("style","transform:translateX(0)");
})

backBtn.addEventListener("click",e=>{
    leftSidebar.removeAttribute("style");
})


// right sidebar
const rightBackBtn = document.querySelector(".right-back-btn");
const rightToggleBtn = document.querySelector(".right-toggle-btn");

rightToggleBtn.addEventListener("click",e=>{
    rightSidebar.setAttribute("style","transform:translateX(0)");
})

rightBackBtn.addEventListener("click",e=>{
    rightSidebar.removeAttribute("style");
})

`,
    footer:`
    <script src="js/main.js"></script>
    </body></html>`
}