var menuShowed = false;
var primaryColor = "#0090C1";
var menuHeight = $('.navigation').css("height");
console.log(menuHeight)
$(document).ready(function(){
    $('.slider').css({
        top: '-'+menuHeight
    })
    $("#navToggle").click(function(){
        if (!menuShowed){
            menuShowed = true;
            $('.slider').animate({
                top: 0
            }, 500, function(){
                $(this).css({
                    'top' : '0'
                })
            })
            $(this).css({
                'color' : '#FFF'
            })
        } else if (menuShowed){
            menuShowed = false;
            $('.slider').animate({
                top: '-'+menuHeight
            }, 500, function(){
                $(this).css({
                    'top' : '-'+menuHeight
                })
            })
            $(this).css({
                'color' : primaryColor
            })
        }
    })
})
