function stops() {
    return false;
}
document.oncontextmenu = stops;
var timer;
$(".img>li").hide();
$(".img>li").eq(0).show();
/*$(".img>li").eq(0).css({"dispaly":"block"});
 $(".img>li").eq(0).siblings().css({"dispaly":"none"});*/
// $(".tab>li").eq(0).addClass("on");
function change(n) {
    timer = window.setInterval(function () {
        /*$(".tab>li").eq(n).addClass('on').siblings().removeClass('on');
         $(".img>li").eq(n).show().siblings().hide();*/
        $(".img>li").hide();
        $(".img>li").eq(n).show();
        $(".tab>li").removeClass("on");
        $(".tab>li").eq(n).addClass("on");
        if (n >= 2) {
            n = -2
        }
        n++;
    }, 3000);
}
function rightClick(n) {
    $(".tab>li").eq(n).addClass('on').siblings().removeClass('on');
    $(".img>li").eq(n).show().siblings().hide();
    if (n >= 2) {
        n = -2
    }
    n++;
}
function leftClick(n) {
    $(".tab>li").eq(n).addClass('on').siblings().removeClass('on');
    $(".img>li").eq(n).show().siblings().hide();
    if (n <= 0) {
        n = 5
    }
    n--;
}
$(function () {
    $(".tab>li").each(function (index) {
        $(".tab>li").eq(index).hover(function () {
            clearInterval(timer);
            $(".tab>li").eq(index).addClass("on");
            $(".tab>li").eq(index).siblings().removeClass("on");
            $(".img>li").hide();
            $(".img>li").eq(index).show();
        }, function () {
            change(index);
        })
    })
    clearInterval(timer);
    change(0);
    $(".img>li").each(function (index, item) {
        $(item).mouseover(function () {
            clearInterval(timer);
        })
        $(item).mouseout(function () {
            change(index);
        })
    })
    $(".btnL").click(function () {
        $(".img>li").each(function (index, item) {
            var $display = $(item)[0].style.display;
            console.log($display)
            if ($display == "block") {
                index = index - 1;
                leftClick(index);
                console.log(index);
            }
        })
    })
    $(".btnR").click(function () {
        $(".img>li").each(function (index, item) {
            var $display = $(item)[0].style.display;
            console.log(item)
            console.log($display)
            if ($display == "block") {
                index = index + 1;
                rightClick(index);
                console.log(index)
                return false;
            }
        })
    })

})
