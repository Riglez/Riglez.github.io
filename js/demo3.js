/**
 * Created by Lenovo on 2017/6/14.
 */
window.onload = function () {
    //需求1: 按照数组中的样式让每一个li，缓动到对应的json中的属性的目标值上;(要展开效果)
    //需求2: 鼠标进入显示两侧小三角，移开隐藏；
    //需求3: 点击右侧小三角，让前一张图片相受当前最高量的样式；左侧逻辑相反；

        //原理1：移动样式；右侧小三角:删除数组中第一套样式添加到数组的最末尾；
        //原理2：移动盒子；右侧小三角:移动ul中的最后一个li，添加到ul的最前面；

    //五个li的五套样式；
    var arrOfJson = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity:0.2,
            "z-index":2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity:0.8,
            "z-index":3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:1,
            "z-index":4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:0.8,
            "z-index":3
        },
        {   //5
            "width":400,
            "top":70,
            "left":750,
            "opacity":0.2,
            "z-index":2
        }
    ];


    //需求1: 按照数组中的样式让每一个li，缓动到对应的json中的属性的目标值上;(要展开效果)
    //获取所有相关元素，利用for循环设置，利用animate方法展开效果；
    var slide = $("slide");
    var liArr = slide.getElementsByTagName("li");
    var arrow = $("arrow");
    var prev = arrow.children[0];
    var next = arrow.children[1];
    //控制器（开闭原则）
    var flag = true;

    //1.无参之调用for循环；   2.bool要区分false还是true
    autoPlay();

    //需求2: 鼠标进入显示两侧小三角，移开隐藏；
    slide.onmouseenter = function () {
        animate(arrow,{"opacity":1});
    }
    slide.onmouseleave = function () {
        animate(arrow,{"opacity":0});
    }

    //需求3: 点击右侧小三角，让前一张图片相受当前最高量的样式；左侧逻辑相反；
    next.onclick = function () {
        //判断能不能点；
        if(flag){
            autoPlay(true);
            //立马禁用
            flag = false;
        }
    }
    //左侧按钮，和右侧逻辑相反
    prev.onclick = function () {
        autoPlay(false);
    }





    //封装，传递boolean，如果是true，点击右侧逻辑。false左侧逻辑；
    function autoPlay(bool){
        //先判断：带参还是无参；
        if(bool !== undefined){
            if(bool){
                //右侧小三角:删除数组中第一套样式添加到数组的最末尾
                arrOfJson.push(arrOfJson.shift());
            }else{
                //左侧侧小三角:删除数组中最后一套样式添加到数组的最前面
                arrOfJson.unshift(arrOfJson.pop());
            }
        }

        //再次按照arrOfJson中的样式animate方法执行一次，让所有的li走到目标位置；
        for(var i=0;i<liArr.length;i++){
            animate(liArr[i],arrOfJson[i], function () {
                //回调函数就可以保证所有属性全部到达执行为之之后在执行回调函数
                flag = true;
            });
        }
    }


}