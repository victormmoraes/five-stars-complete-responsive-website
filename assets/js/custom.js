$(document).ready(function () {

    $('.modulo-2 .slick-mobile').slick({
        fade: true,
        dots: true
    });

    //MENU
    $("button.navbar-toggler").click(function () {
        $("html").toggleClass("overflow-hidden");
        $(".menu").toggleClass("ativo");
    });

    $(".navbar .navbar-collapse .navbar-nav .nav-item .nav-link").click(function () {
        $("html").removeClass("overflow-hidden");
        $(".navbar .navbar-collapse").removeClass("show");
    });

    $(".modulo-3 .tabs .nav-link#nav-feed-tab").click(function () {
        $(".modulo-3 .tablet").addClass("feed");
        $(".modulo-3 .tablet").removeClass("calendario habilidades");
        $(".modulo-3 .tablet .feed").removeClass("d-none");
        $(".modulo-3 .tablet .feed").addClass("ativo d-flex");
        $(".modulo-3 .tablet .calendario").addClass("d-none");
        $(".modulo-3 .tablet .habilidades").addClass("d-none");
    });

    $(".modulo-3 .tabs .nav-link#nav-calendario-tab").click(function () {
        $(".modulo-3 .tablet").addClass("calendario");
        $(".modulo-3 .tablet").removeClass("feed habilidades");
        $(".modulo-3 .tablet .calendario").removeClass("d-none");
        $(".modulo-3 .tablet .calendario").addClass("ativo d-flex");
        $(".modulo-3 .tablet .feed").addClass("d-none");
        $(".modulo-3 .tablet .habilidades").addClass("d-none");
    });

    $(".modulo-3 .tabs .nav-link#nav-habilidades-tab").click(function () {
        $(".modulo-3 .tablet").addClass("habilidades");
        $(".modulo-3 .tablet").removeClass("feed calendario");
        $(".modulo-3 .tablet .habilidades").removeClass("d-none");
        $(".modulo-3 .tablet .habilidades").addClass("ativo d-flex");
        $(".modulo-3 .tablet .feed").addClass("d-none");
        $(".modulo-3 .tablet .calendario").addClass("d-none");
    });
});