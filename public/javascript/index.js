$(function () {
    /*LeftBar start*/
    /*remove*/
    function removeLeftBar() {
        $('#menu').removeClass('menuCross menuRotate');
        $('header').animate({left: '0'});
        $('.leftBar1').animate({width: '0'});
        $('.leftBarFilter').animate({opacity:'0'},500).queue(function () {
            $(this).css({'width':"0"}).dequeue();
        });
        $('.leftBar2Ctn').animate({left: '-220px'},400);
        $('.leftBar2BG').animate({left: '-220px'},400);
    }
    $('#menu').click(function () {
        if($('#menu').hasClass('menuCross')){
            removeLeftBar();
        }
        else{
            $('#menu').removeClass('menuUp');
            $('header').animate({left: '220px'});
            $('.leftBar1').animate({width: '220px'});
            $('#menu').addClass('menuCross');
            $('.leftBarFilter').css({'width':"1920px"}).animate({opacity:'0.6'},500);
        }
    });
    $('.leftBarFilter').click(function () {
        removeLeftBar();
    });
    $('#menu').hover(function () {
        if($('#menu').hasClass('menuCross')){
            $('#menu').addClass('menuRotate');
        }
        else {
            $('#menu').addClass('menuUp');
        };

    },function () {
        $('#menu').removeClass('menuRotate menuUp');
    });
    /*LeftBar Secondary*/
    $('#selectWork,#selectBlog').click(function () {
        $(this).children('.leftBar2Ctn').animate({left: '0'},400);
        $(this).children('.leftBar2BG').animate({left: '0'},400);
        $(this).children('.leftBar1').css({'background-color': '#F9F9F9'});
    });
    /*$('#selectBlog').click(function () {
        $('#selectBlog .leftBar2Ctn').animate({left: '0'},400);
        $('#selectBlog .leftBar2BG').animate({left: '0'},400);
        $('#selectBlog .leftBar1').css({'background-color': '#F9F9F9'});
    });*/

    $('.selectBack').click(function () {
        event.stopPropagation();
        $('.leftBar2Ctn').animate({left: '-220px'},400);
        $('.leftBar2BG').animate({left: '-220px'},400);
        $('.leftBar1').css({'background-color': 'white'});
    });
});