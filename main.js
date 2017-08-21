require.config({
    baseUrl:"./js",
    paths:{
        jquery:"lib/jquery-2.1.4",
        bootstrap:"../assets/bootstrap/js/bootstrap.min",
        text:"lib/text",
        template:"lib/template-web",
        tpls:"../tpls",
        swiper:"../assets/Swiper-3.4.2/dist/js/swiper.jquery.min.js"
    },
    shim:{
        bootstrap:{
            deps:["jquery"]
        },
        swiper:{
            deps:["jquery"]
        }
    }
})

require(["jquery","acg/loadacg","bootstrap"],function($,acgLoad){
    // $(".list").on("click","li",function(){     失败不触发事件的代码,因为要控制的是a标签
    $(".list").on("click","a",function(){
        if($(this).hasClass("one")){
            $(this).addClass("active").parent().siblings().find("a").removeClass("active");
            acgLoad();
        }else if($(this).hasClass("two")){
            $(this).addClass("active").parent().siblings().find("a").removeClass("active");
            $(".show").html("第二幕")
        }else if($(this).hasClass("three")){
            $(this).addClass("active").parent().siblings().find("a").removeClass("active");
            $(".show").html("第三幕")
        }else if($(this).hasClass("four")){
            $(this).addClass("active").parent().siblings().find("a").removeClass("active");
            $(".show").html("第四幕")
        }
    })
    
})