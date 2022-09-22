$(document).ready(function(){

    $(".list li.notice:not("+ $(".tab li a.sel").attr('href') +")").hide();
    $(".tab li a").click(function(){
        $(".tab li a").removeClass("sel");
        $(this).addClass("sel");
        $(".list li.notice").hide();
        $($(this).attr("href")).show();
        return false;
    });

});


