jQuery.fx.interval=2;
$(function () {
    var love=0;
    $(".detaile>span").click(function () {
        love++;
        $(this).children("strong").html(love+" "+"Likes"+"&nbsp;");
    });
    $(".pox").mouseleave(function () {
        $(this).children(".box").animate({width:"20%"},500);
    });
    $(".box").mouseenter(function () {
        var thisbox=$(this);
        var tw=thisbox.css('width');
        t=setTimeout(function () {
            thisbox.animate({width:"70%"},600);
            thisbox.siblings(".box").animate({width:"7.5%"},600);
            k=setTimeout(function () {
                var detaile=thisbox.children(".detaile");
                thisbox.children(".box-tip").animate({opacity:"0"},300);
                thisbox.children(".detaile").delay(600).animate({bottom:"30"},500).css("opacity","0.8");
                detaile.children("h1,p,span").delay(900).animate({opacity:"1"},300);
                detaile.children("span").animate({right:"30px"},200);
                detaile.children("h1,p").animate({left:"50px"},200)
            },400)
        },300);
    }).mouseleave(function () {
        clearTimeout(t);
        clearTimeout(k);
        var thisbox=$(this);
        var detaile=thisbox.children(".detaile");
        detaile.children("span").animate({right:"10px"},300);
        detaile.children("h1,p").animate({left:"30px"},300);
        $(this).children(".box-tip").delay(700).animate({opacity:"0.9"},300);
        detaile.animate({opacity:"0"},100).css("bottom","-300px");
    })
})