$(document).ready(function(){

    //family_site
    $("#family_site > ul").slideUp(0);
    var family = 1;
    $("#family_site > button").click(function(){
        if(family == 1){
            $("#family_site > ul").slideDown("fast");
            $(".icon").text("∨");
            family=0;
        }else{
            $("#family_site > ul").slideUp("fast");
            $(".icon").text("∧");
            family=1;
        }
    });
    $("#family_site > ul > li > a").click(function(){
        $("#family_site > ul").slideUp(0);
        family=1;
        $(".icon").text("∧");
    });

});