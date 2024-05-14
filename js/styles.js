class Styles {
    darkTheme(color) {
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
        max-width:100%;
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
        font-weight:bold;
    }
    ul li.list-group-item a{
        text-decoration:none;
        text-transform: capitalize;
    }
    ul li.list-group-item.h2{
        padding-left:20px;
        font-weight:normal;
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
    }

    lightTheme(color) {
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
        max-width:100%;
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
        font-weight:bold;
    }
    ul li.list-group-item a{
        text-decoration:none;
        text-transform: capitalize;
    }
    ul li.list-group-item.h2{
        padding-left:20px;
        font-weight:normal;
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
    }
}