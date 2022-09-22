$(document).ready(function(){

    //MONAMI 
    $(".middle1 div p:not(:eq(4))").mouseover(function(){
        $(this).stop().animate({"border-radius":"40%"},200);
    }).mouseout(function(){
        $(this).stop().animate({"border-radius":"35px"},200);
    });


    // NEWSROOM 사진
   var img_fade = setInterval(function(){
        var showImg = $("#img_wrap img:eq(0)");
        var nextImg = $("#img_wrap img:eq(1)");
        nextImg.addClass("selected");
        nextImg.css("opacity","0").animate({opacity:1},1000,function(){
            showImg.appendTo("#img_wrap").removeClass("selected");
        });

   },3000);



});