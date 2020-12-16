window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector(".icon_menu").addEventListener("click", showMenu);
    document.querySelector(".icon_cart").addEventListener("click", showCart);
    document.querySelector(".icon_search").addEventListener("click", showSearch);
}

function showMenu() {
    console.log("showMenu");
    document.querySelector("#menu").classList.remove("hide");
    document.querySelector(".icon_menu").classList.add("invis");
    document.querySelector(".icon_menuOff").classList.remove("hide");
    document.querySelector("#header_bottom").classList.add("hide");

    document.querySelector(".icon_menuOff").addEventListener("click", hideMenu);

    document.querySelector("#cart").classList.add("hide");
    document.querySelector(".icon_cart").classList.remove("invis");
    document.querySelector(".icon_cartOff").classList.add("hide");
    document.querySelector("#search").classList.add("hide");
    document.querySelector(".icon_search").classList.remove("invis");
    document.querySelector(".icon_searchOff").classList.add("hide");
}

function hideMenu() {
    console.log("hideMenu");
    document.querySelector("#menu").classList.add("hide");
    document.querySelector(".icon_menu").classList.remove("invis");
    document.querySelector(".icon_menuOff").classList.add("hide");
    document.querySelector("#header_bottom").classList.remove("hide");

    document.querySelector(".icon_menu").addEventListener("click", showMenu);
}

function showCart() {
    console.log("showCart");
    document.querySelector("#cart").classList.remove("hide");
    document.querySelector(".icon_cart").classList.add("invis");
    document.querySelector(".icon_cartOff").classList.remove("hide");
    document.querySelector("#header_bottom").classList.add("hide");

    document.querySelector(".icon_cartOff").addEventListener("click", hideCart);

    document.querySelector("#menu").classList.add("hide");
    document.querySelector(".icon_menu").classList.remove("invis");
    document.querySelector(".icon_menuOff").classList.add("hide");
    document.querySelector("#search").classList.add("hide");
    document.querySelector(".icon_search").classList.remove("invis");
    document.querySelector(".icon_searchOff").classList.add("hide");
}

function hideCart() {
    console.log("hideCart");
    document.querySelector("#cart").classList.add("hide");
    document.querySelector(".icon_cart").classList.remove("invis");
    document.querySelector(".icon_cartOff").classList.add("hide");
    document.querySelector("#header_bottom").classList.remove("hide");

    document.querySelector(".icon_cart").addEventListener("click", showCart);
}

function showSearch() {
    console.log("showSearch");
    document.querySelector("#search").classList.remove("hide");
    document.querySelector(".icon_search").classList.add("invis");
    document.querySelector(".icon_searchOff").classList.remove("hide");
    document.querySelector("#header_bottom").classList.remove("hide");

    document.querySelector(".icon_searchOff").addEventListener("click", hideSearch);

    document.querySelector("#menu").classList.add("hide");
    document.querySelector(".icon_menu").classList.remove("invis");
    document.querySelector(".icon_menuOff").classList.add("hide");
    document.querySelector("#cart").classList.add("hide");
    document.querySelector(".icon_cart").classList.remove("invis");
    document.querySelector(".icon_cartOff").classList.add("hide");
}

function hideSearch() {
    document.querySelector("#search").classList.add("hide");
    document.querySelector(".icon_search").classList.remove("invis");
    document.querySelector(".icon_searchOff").classList.add("hide");

    document.querySelector(".icon_search").addEventListener("click", showSearch);
}
