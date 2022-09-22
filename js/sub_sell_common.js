$(document).ready(function(){
    //제품 사진---------------------------------------------------
    $("#middle_left p img:eq(1)").css("opacity","0");
    $("#middle_left p img").mouseover(function(){
        $("#middle_left p img:eq(1)").stop().animate({"opacity":"1"},1000);
    }).mouseout(function(){
        $("#middle_left p img:eq(1)").stop().animate({"opacity":"0"},1000);
    });

    //공유----------------------------------------------------------
    $("#share").hide();

    $(".share").click(function(){
        $("#share").fadeIn();
        return false;
    });
    $(".close_btn").click(function(){
        $("#share").fadeOut();
        return false;
    });

    //+ - -----------------------------------------------------------
    $("#plus").click(function(){   
        var num_t = $(".num_txt").text();
        var num = num_t;
        num++;

        if(num > 10){
            alert("10개까지만 구매 가능합니다.");
            num=10;
        }
        $(".num_txt").text(num);
        $(".total_txt").text(24*num +",000");
        $(".total_num").text(num);
    });

    $("#minus").click(function(){  
        var num_t = $(".num_txt").text();
        var num = num_t;
        num--;

        if(num<=0){
            alert("1개 이상부터 구매 가능합니다.");
            num=1;
        }
        $(".num_txt").text(num);
        $(".total_txt").text(24*num +",000");
        $(".total_num").text(num);
    });
   

    //리뷰입니다.-----------------------------------------------------
    $(".caption1").css("opacity","0");
    $(".review_detail").mouseover(function(){
        $(".caption1",this).stop().animate({opacity:"1"},600);
    }).mouseout(function(){
        $(".caption1",this).stop().animate({opacity:"0"},600);
    });

    //1:1문의, 상품리뷰 작성 누르면 로그인 페이지로------------------------------------
    $(".login_need").click(function(){
        alert("로그인이 필요합니다.");
    })
});