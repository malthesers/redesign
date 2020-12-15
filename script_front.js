window.addEventListener("load", sidenVises);

var whiteHeader = document.querySelectorAll("header a, header i, header p");

window.onscroll = function () {
    console.log("scroll");
    if (window.scrollY > 25) {
        document.querySelector("nav").classList.add("active");
        whiteHeader.forEach(function (makeHeaderWhite) {
            makeHeaderWhite.classList.add("white");
        })
    } else {
        document.querySelector("nav").classList.remove("active");
        whiteHeader.forEach(function (makeHeaderBlack) {
            makeHeaderBlack.classList.remove("white");
        })
    }
}

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#header").classList.remove("active");
    document.querySelector(".icon_menuOff").classList.add("hide");
    document.querySelector(".icon_menu").addEventListener("click", showMenu);
}

function showMenu() {
    console.log("showMenu");
    document.querySelector("#menu").classList.remove("hide");
    document.querySelector(".icon_menu").classList.add("invis");
    document.querySelector(".icon_menuOff").classList.remove("hide");
    document.querySelector("#header_bottom").classList.add("hide");
    document.querySelector("nav").classList.add("active");

    document.querySelector(".icon_menuOff").addEventListener("click", hideMenu);
}

function hideMenu() {
    console.log("hideMenu");
    document.querySelector("#menu").classList.add("hide");
    document.querySelector(".icon_menu").classList.remove("invis");
    document.querySelector(".icon_menuOff").classList.add("hide");
    document.querySelector("#header_bottom").classList.remove("hide");

    if (window.scrollY < 25) {
        document.querySelector("nav").classList.remove("active");
    }

    document.querySelector(".icon_menu").addEventListener("click", showMenu);
}
