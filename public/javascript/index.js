$(function () {
    $('#menu').click(function () {
        if($('#menu').hasClass('menuCross')){
            $('#menu').removeClass('menuCross');
            $('header').animate({left: '0'});
            $('.leftBar1').animate({width: '0'});
        }
        else{
            $('header').animate({left: '220px'});
            $('.leftBar1').animate({width: '220px'});
            $('#menu').addClass('menuCross');
        }
    })
})