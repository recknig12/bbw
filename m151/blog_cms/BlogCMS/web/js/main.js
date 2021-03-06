/* 
 * @author: 5ia13paguenthard
 * @author: 5ia13nosiegrist
 * 
 * Licensed under the GNU GPL v3
 * NO WARRANTY
 */

$(document).ready(function(){
    $("#menu-button").on("click", function(){
        $(".left").toggle();
        if($(".left").css("display") == "none"){
            $(".content").css({"overflow" : "auto", "height" : "auto"});
            $(".left").css("height", "auto");
        } else {
            $(".content").css({"overflow" : "hidden", "height" : ($(window).height() - $("header").height())+"px"});
            $(".left").css("height", "auto");
            }
        });

    $(window).on("resize", function(){
        if($(this).width() > 768){
            $(".left").css("display", "block");
        } else {
            $(".left").css("display", "none");
        }
    });
    
    $(".general-search").on("focus", function(){
        if($(this).val() == "Search Posts"){
            $(this).val("");
        }
    });
    
    $(".general-search").on("blur", function(){
        if($(this).val() == ""){
            $(this).val("Search Posts");
        }
    });
    
    $(".user-search").on("focus", function(){
        if($(this).val() == "Search Users"){
            $(this).val("");
        }
    });
    
    $(".user-search").on("blur", function(){
        if($(this).val() == ""){
            $(this).val("Search Users");
        }
    });
    
    $(".general-comment").on("focus", function(){
        if($(this).val() == "Enter comment"){
            $(this).val("");
        }
    });
    
    $(".general-comment").on("blur", function(){
        if($(this).val() == ""){
            $(this).val("Enter comment");
        }
    });
});
