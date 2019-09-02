const homePageContainer = document.getElementById("content");

//helper function to create element
function createNode(element) {
    return document.createElement(element);
}

//helper function to tie parent to child element
function append(parent, el) {
    return parent.appendChild(el);
}
//nav bar
function toggleNav() {
    var element = document.getElementById("mySidenav");
    if (element.style.width == "250px") {
        element.style.width = "0px";
    } else {
        element.style.width = "250px";
    }
};

//homepage item array
arrayOfitemsHomePage = [
    {
    name: "Chocolate Cupcakes",
    id: "post-1",
    class: "thumb-post-1",
    page: "/cupcakes",
    divImage: "thumb-post-img-1",
    thumbContenth3: "Cupcakes",
    thumbContentp: "Click Here",
    image:"static/images/largechococupcakes.jpg",
    },
    {
    name: "Vanilla Cupcakes2",
    id: "post-2",
    class: "thumb-post-2",
    page: "/cupcakes",
    divImage: "thumb-post-img-2",
    thumbContenth3: "Cupcakes",
    thumbContentp: "Click Here",
    image:"static/images/largewhitecupcakes2.jpg",
    },
    {
    name: "Vanilla Cupcakes",
    id: "post-3",
    class: "thumb-post-3",
    page: "/cupcakes",
    divImage: "thumb-post-img-3",
    thumbContenth3: "Cupcakes",
    thumbContentp: "Click Here",
    image:"static/images/largewhitecupcakes.jpg",
    },
    {
    name: "MultiColor Cupcakes",
    id: "post-4",
    class: "thumb-post-4",
    page: "/cupcakes",
    divImage: "thumb-post-img-4",
    thumbContenth3: "Cupcakes",
    thumbContentp: "Click Here",
    image:"static/images/multicolorcupcakes.jpg",
    },
    {
    name: "Cookies",
    id: "post-5",
    class: "thumb-post-5",
    page: "/cookies",
    divImage: "thumb-post-img-5",
    thumbContenth3: "Cookies",
    thumbContentp: "Click Here",
    image:"static/images/cookies.jpg",
    },
    {
    name: "Brownies",
    id: "post-6",
    class: "thumb-post-6",
    page: "/brownies",
    divImage: "thumb-post-img-6",
    thumbContenth3: "Brownies",
    thumbContentp: "Click Here",
    image:"static/images/brownies.jpg",
    }
]

arrayOfitemsHomePage.forEach(function(item){
    let a = createNode('a'),
        article = createNode('article');
        divThumbPost = createNode('div');
        divImg = createNode('div');
        divContent = createNode('div'),
        h3 = createNode('h3'),
        p = createNode('p'),
        img = createNode('img'),
    article.setAttribute('id',item.id);
    article.setAttribute('class',item.class);
    a.href = item.page;
    img.src = item.image;
    divThumbPost.setAttribute('class',"thumb-post");
    divImg.setAttribute('class',item.divImage);
    divContent.setAttribute('class',"thumb-content");
    h3.innerHTML = item.thumbContenth3;
    p.innerHTML = item.thumbContentp;
    append(divContent,h3);
    append(divContent,p);
    append(divImg,divContent);
    append(divThumbPost,divImg);
    append(a,divThumbPost);
    append(article,a);
    append(homePageContainer,article);

    //CSS below for homepage
    var styles = `
    .${item.class} {
        width: 30%;
        height: 180px;
        margin: 10px;
    }
    .${item.divImage}{
        background-image: url(${item.image});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 100%;
        width: 100;
        position: relative;
    }
    
    .${item.divImage}:hover {
        background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${item.image});
    }
    @media (max-width : 750px) {
        .${item.class} {
            width: 45%;
            height: 180px;
            margin: 10px;
        }
    @media (max-width : 520px) {
        .${item.class} {
            width: 100%;
            height: 180px;
            margin: 10px;
        }
    `

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerHTML = styles
    document.head.appendChild(styleSheet)
});


