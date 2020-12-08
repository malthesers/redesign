window.onscroll = function () {
    console.log("scroll")
    if (window.scrollY > 25) {
        document.querySelector(".header").classList.add("active");
    } else {
        document.querySelector(".header").classList.remove("active");
    }
}
