$(window).on("scroll", function () {
    console.log("scroll")
    if ($(window).scrollTop() > 25) {
        $(".header").addClass("active");
    } else {
        $(".header").removeClass("active");
    }
})
