const homePageContainer = document.getElementById("content");

//helper function to create element
function createNode(element) {
    return document.createElement(element);
}

//helper function to tie parent to child element
function append(parent, el) {
    return parent.appendChild(el);
}

arrayOfitemsHomePage = [
    {
    name: "Test-Element",
    id: "post-7",
    class: "thumb-post-7",
    page: "/cupcakes",
    divImage: "thumb-post-img-7",
    thumbContenth3: "Cupcakes",
    thumbContentp: "HAPPY",
    image:"static/images/whitecupcakes.jpg",
    },
    {
        name: "Test-Element",
        id: "post-8",
        class: "thumb-post-8",
        page: "/cupcakes",
        divImage: "thumb-post-img-8",
        thumbContenth3: "Cupcakes",
        thumbContentp: "SAD",
        image:"static/images/multicolorcupcakes.jpg",
        }
]

function toggleNav() {
    var element = document.getElementById("mySidenav");
    if (element.style.width == "250px") {
        element.style.width = "0px";
    } else {
        element.style.width = "250px";
    }
};

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
    // Your CSS as text
    var styles = `
    .${item.class} {
        background-color: #657d5d;
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
    `

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerHTML = styles
    document.head.appendChild(styleSheet)
});
    

