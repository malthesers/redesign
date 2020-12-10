window.onscroll = function () {
    console.log("scroll");
    if (window.scrollY > 25 && window.outerWidth > 650) {
        document.querySelector("#header").classList.add("active");
    } else {
        document.querySelector("#header").classList.remove("active");
    }
}
