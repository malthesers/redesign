window.addEventListener("load", sidenVises);

const headerElements = document.querySelectorAll("header a, header i, header p");

window.onscroll = function () {
    console.log("scroll");
    if (window.scrollY > 25) {
        document.querySelector("nav").classList.add("active");

        //Make header text and icons white
        headerElements.forEach(function (headerElement) {
            headerElement.classList.add("white");
        });
    } else {
        document.querySelector("nav").classList.remove("active");

        //Make header text and icons black
        headerElements.forEach(function (headerElement) {
            headerElement.classList.remove("white");
        });

        hideMenu();
    }
};

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#header").classList.remove("active");
    document.querySelector(".icon_menu").addEventListener("click", showMenu);
    document.querySelector(".icon_cart").addEventListener("click", showCart);
    document.querySelector(".icon_search").addEventListener("click", showSearch);
}

function showMenu() {
    console.log("showMenu");

    //Open burger and hide submenu
    document.querySelector("#menu").classList.remove("hide");
    document.querySelector(".icon_menu").classList.add("invis");
    document.querySelector(".icon_menuOff").classList.remove("hide");
    document.querySelector("#header_bottom").classList.add("hide");
    document.querySelector("nav").classList.add("active");

    document.querySelector(".icon_menuOff").addEventListener("click", hideMenu);

    document.querySelector("#cart").classList.add("hide");
    document.querySelector(".icon_cart").classList.remove("invis");
    document.querySelector(".icon_cartOff").classList.add("hide");
    document.querySelector("#search").classList.add("hide");
    document.querySelector(".icon_search").classList.remove("invis");
    document.querySelector(".icon_searchOff").classList.add("hide");

    //Make header text and icons white
    headerElements.forEach(function (headerElement) {
        headerElement.classList.add("white");
    });
}

function hideMenu() {
    console.log("hideMenu");

    //Hide burger and show submenu
    document.querySelector("#menu").classList.add("hide");
    document.querySelector(".icon_menu").classList.remove("invis");
    document.querySelector(".icon_menuOff").classList.add("hide");
    document.querySelector("#header_bottom").classList.remove("hide");

    document.querySelector(".icon_menu").addEventListener("click", showMenu);

    //Prevent header background inconsistency
    if (window.scrollY < 25) {
        document.querySelector("nav").classList.remove("active");

        //Make header text and icons black
        headerElements.forEach(function (headerElement) {
            headerElement.classList.remove("white");
        });
    }
}

function showCart() {
    console.log("showCart");
    document.querySelector("#cart").classList.remove("hide");
    document.querySelector(".icon_cart").classList.add("invis");
    document.querySelector(".icon_cartOff").classList.remove("hide");
    document.querySelector("#header_bottom").classList.add("hide");
    document.querySelector("nav").classList.add("active");

    document.querySelector(".icon_cartOff").addEventListener("click", hideCart);

    document.querySelector("#menu").classList.add("hide");
    document.querySelector(".icon_menu").classList.remove("invis");
    document.querySelector(".icon_menuOff").classList.add("hide");
    document.querySelector("#search").classList.add("hide");
    document.querySelector(".icon_search").classList.remove("invis");
    document.querySelector(".icon_searchOff").classList.add("hide");

    //Make header text and icons white
    headerElements.forEach(function (headerElement) {
        headerElement.classList.add("white");
    });
}

function hideCart() {
    console.log("hideCart");
    document.querySelector("#cart").classList.add("hide");
    document.querySelector(".icon_cart").classList.remove("invis");
    document.querySelector(".icon_cartOff").classList.add("hide");
    document.querySelector("#header_bottom").classList.remove("hide");

    document.querySelector(".icon_cart").addEventListener("click", showCart);

    //Prevent header background inconsistency
    if (window.scrollY < 25) {
        document.querySelector("nav").classList.remove("active");

        //Make header text and icons black
        headerElements.forEach(function (headerElement) {
            headerElement.classList.remove("white");
        });
    }
}

function showSearch() {
    console.log("showSearch");
    document.querySelector("#search").classList.remove("hide");
    document.querySelector(".icon_search").classList.add("invis");
    document.querySelector(".icon_searchOff").classList.remove("hide");
    document.querySelector("#header_bottom").classList.remove("hide");
    document.querySelector("nav").classList.add("active");

    document.querySelector(".icon_searchOff").addEventListener("click", hideSearch);

    document.querySelector("#menu").classList.add("hide");
    document.querySelector(".icon_menu").classList.remove("invis");
    document.querySelector(".icon_menuOff").classList.add("hide");
    document.querySelector("#cart").classList.add("hide");
    document.querySelector(".icon_cart").classList.remove("invis");
    document.querySelector(".icon_cartOff").classList.add("hide");

    //Make header text and icons white
    headerElements.forEach(function (headerElement) {
        headerElement.classList.add("white");
    });
}

function hideSearch() {
    document.querySelector("#search").classList.add("hide");
    document.querySelector(".icon_search").classList.remove("invis");
    document.querySelector(".icon_searchOff").classList.add("hide");

    document.querySelector(".icon_search").addEventListener("click", showSearch);

    //Prevent header background inconsistency
    if (window.scrollY < 25) {
        document.querySelector("nav").classList.remove("active");

        //Make header text and icons black
        headerElements.forEach(function (headerElement) {
            headerElement.classList.remove("white");
        });
    }
}
