window.addEventListener("load", sidenVises);

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

    document.querySelector(".icon_menuOff").addEventListener("click", hideMenu);
}

function hideMenu() {
    console.log("hideMenu");
    document.querySelector("#menu").classList.add("hide");
    document.querySelector(".icon_menu").classList.remove("invis");
    document.querySelector(".icon_menuOff").classList.add("hide");
    document.querySelector("#header_bottom").classList.remove("hide");

    document.querySelector(".icon_menu").addEventListener("click", showMenu);
}
