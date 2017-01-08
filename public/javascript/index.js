$(function () {
    $('#menu').click(function () {
        $('header').animate({left:'220px'});
        $('.leftBar1').animate({width:'220px'});
        $('#menu').addClass('menuCross');

    })
})