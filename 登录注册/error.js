window.onload=function () {
    let span=document.getElementsByTagName("span")[0];
    //获取span标签
    console.log(span);
    //获取span标签中的内容
    let close=document.getElementsByClassName("close")[0];
    console.log(close)
    let num=span.innerHTML;
    console.log(num);
    //创建时间间隔函数
    var t=setInterval(fn,1000);
    function fn() {
        num--;
        if (num==0){
            //清除时间间隔函数
            clearInterval(t);
            //打开首页
            window.open("http://localhost:63342/%E4%BB%A3%E7%A0%812/js/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/827login.html");

        }
        //改变span中的数字
        span.innerHTML=num;
    }
    close.onclick=function () {
        window.close();
    }
}
