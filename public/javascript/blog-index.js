/**
 * Created by ThinkPad User on 2017/1/5.
 */

$(function () {
    $(".pox").hover(function () {
        $(this).addClass("em")
    },function () {
        $(this).removeClass("em")
    });
    $(".box").hover(function () {
        jQuery.fx.interval=16;
        var thisbox=$(this);
        thisbox.removeClass("actives");
        thisbox.delay(200).addClass("activel");
        thisbox.children(".detaile").delay(600).animate({bottom:"30"},400).css("opacity","0.6");
        thisbox.siblings("div").addClass("actives");
        thisbox.children(".box-tip").animate({opacity:"0"},300)
    },function () {
        jQuery.fx.interval=16;
        // if($(".pox").hasClass("em")){
        //     $(this).addClass("actives");
        //     $(this).children(".detaile").animate({opacity:"0"},400).addClass("bbb");
        // }else {
        $(this).children(".box-tip").animate({opacity:"0.9"},300);
        $(".box").removeClass("actives").removeClass("activel");
        $(this).children(".detaile").animate({opacity:"0"},100).animate({bottom:"-300"},400);
        // }
    });
});