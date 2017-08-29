require.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jquery-1.12.4",
        template: "lib/template-web",
        fullPage: "lib/jquery.fullPage.min",
        text: "lib/text",
        tpls: "../tpls",
        bootstrap: "../assets/bootstrap/js/bootstrap.min",
        swiper: "./assets/Swiper-3.4.2/dist/js/swiper.jquery.min"
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        },
        swiper: {
            deps: ["jquery"]
        }
    }
})

require(["jquery", "bootstrap"], function ($) {
    window.onload = function () {

        var viewDom = document.querySelector(".view");
        viewDom.classList.add("animation")
        var flag = 0;
        var timer = setInterval(function () {
            $(".view").animate({ top: -($("body").height()) }, function () {
                $(this).css({ top: 0 });
                $(".wel").remove();
            })
            flag++;
            flag && clearInterval(timer);
        }, 3000)

        var $Con = $(".container");
        var d = 0;
        var flag = true;
        $Con.find(".con-item").each(function () {
            $(document.createElement("li")).appendTo($(".sorter"));
        })
        window.onmousewheel = function (event) {
            var height = $(".container").height();
            if ($(event.srcElement).hasClass("theme") && flag) {
                flag = false;
                if (event.wheelDelta > 0) {
                    d == 0 ? d = 0 : d++;
                }
                else {
                    d == -2 ? d = -2 : d--;
                }
                $Con.stop().animate({ top: d * height }, function () {
                    flag = true;
                })
            }
        }



        //页面大小改变时让元素更改大小,适应屏幕的大小=>onresize或者媒体查询??
        window.onresize = function () {
            $Con.stop().animate({ top: -($Con.height()) }, 0)
        }

        //点击按钮跳转页面
        $(".cat").on("click",function(){
            location.href="./cat.html";
        })
    }
})