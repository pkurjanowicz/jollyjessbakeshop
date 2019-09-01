


// brownieItem = (queryValue) => {
//     const queryValue = urlParams.get('item');
//     return location.href = `/?item=${queryValue}`;
// }

function toggleNav() {
    var element = document.getElementById("mySidenav");
    if (element.style.width == "0px") {
        element.style.width = "250px";
    } else {
        element.style.width = "0px";
    }
}