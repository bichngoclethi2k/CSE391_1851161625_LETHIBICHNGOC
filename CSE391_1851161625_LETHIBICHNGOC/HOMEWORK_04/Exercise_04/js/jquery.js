$(document).ready(function () {
    $(".circles").click(function () { 
        $(".circles").toggleClass("active"); 
    });

    $(".squares").click(function () { 
        $(".squares").toggleClass("squaresHalf"); 
    });

    $(".rectangles").click(function () { 
        $(".rectangles").toggleClass("rectanglesMove"); 
    });
});