$(document).ready(function(){
   
    $(window).scroll(function(){

       if($(this).scrollTop() <= 1200 && $(this).scrollTop() > 0) {
        $(".btn .circle1").addClass("sel");
        $(".btn .circle:not(:first)").removeClass("sel");
       }

       if($(this).scrollTop() <= 2400 && $(this).scrollTop() > 1200) {
        $(".btn .circle:not(:eq(1))").removeClass("sel");
        $(".btn .circle2").addClass("sel");
       }

       if($(this).scrollTop() <= 3600 && $(this).scrollTop() > 2400) {
        $(".btn .circle:not(:eq(2))").removeClass("sel");
        $(".btn .circle3").addClass("sel");
       }

       if($(this).scrollTop() <= 4800 && $(this).scrollTop() > 3600) {
        $(".btn .circle:not(:eq(3))").removeClass("sel");
        $(".btn .circle4").addClass("sel");
       }

       if($(this).scrollTop() <= 5200 && $(this).scrollTop() > 4800) {
        $(".btn .circle:not(:eq(4))").removeClass("sel");
        $(".btn .circle5").addClass("sel");
       }

       if($(this).scrollTop() <= 6400 && $(this).scrollTop() > 5200) {
        $(".btn .circle:not(:eq(5))").removeClass("sel");
        $(".btn .circle6").addClass("sel");
       }
    });
});