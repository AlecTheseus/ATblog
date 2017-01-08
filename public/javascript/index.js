$(function () {
    $('#menu').click(function () {
        if($('#menu').hasClass('menuCross')){
            $('#menu').removeClass('menuCross');
            $('header').animate({left: '0'});
            $('.leftBar1').animate({width: '0'});
            $('.leftBarFilter').animate({opacity:'0'},500).queue(function () {
                $(this).css({'width':"0"}).dequeue();
            });
        }
        else{
            $('header').animate({left: '220px'});
            $('.leftBar1').animate({width: '220px'});
            $('#menu').addClass('menuCross');
            $('.leftBarFilter').css({'width':"1920px"}).animate({opacity:'0.5'},500);
        }
    })
})