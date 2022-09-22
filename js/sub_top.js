$(document).ready(function(){

    $(".menu").append("<li class='line start'></li>"); //ul 안에서 맨 마지막에 li 태그 추가해라
    $(".sub").hide();
    $(".line, .start").hide();
    $(".menu > .sub_wrap > a").on("mouseenter",function(){
        $(".line, .start").stop().fadeIn();
        $(this).next("ul").stop().fadeIn();
    });
    $(".menu > .sub_wrap").on("mouseleave",function(){
        $(".line, .start").stop().fadeOut();
        $(this).children("a").next("ul").stop().fadeOut();
    });
});