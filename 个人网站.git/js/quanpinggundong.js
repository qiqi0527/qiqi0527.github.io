$(function(){
    var wrap_page = document.getElementById('wrap');
    wrap_page.addEventListener("mousewheel",fn);
    wrap_page.addEventListener('DOMMouseScroll',fn);
    var num = 0;//指定屏的序号
    function fn(evt){
        //兼容性的程序  不管是什么浏览器，向下滚动变量point值为true，向上滚动值为false
        var event = evt || window.event;
        var point = true;
        if(event.wheelDelta){
            point = event.wheelDelta > 0 ? false:true; //IE和谷歌浏览器
        }else{
            point = event.detail > 0 ? true:false;//Firefox 浏览器
        }
        if(event.preventDefault){
            event.preventDefault;
        }else{
            event.returnValue = false;
        }
        //判断如果向下,执行....
        point ? num++ : num-- ;
        //限制条件
        if(num < 0){
            num = 0; 
        }else if(num >= 3){
            num = 3;
        }
       play(num);
    }
    //play() 跳转到指定屏
    function play(num){
        $('.wrap').css({'top':-(num * 100) + "%"});
    }
})