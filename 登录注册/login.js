window.onload=function () {
    //获取页面中的input元素
    let user=document.getElementsByClassName("username")[0];
    console.log(user);
    let pass=document.getElementsByClassName("password")[0];
    console.log(pass);
    let btn=document.getElementsByClassName("btn")[0];
    console.log(btn);
    let close=document.getElementsByClassName("close")[0];
    console.log(close)
    btn.onclick=function () {
        // alert("你正在点击");
        if(user.value=="zyx" && pass.value=="123456"){
            alert("登录成功");
            window.open("http://localhost:63342/%E4%BB%A3%E7%A0%812/js/history.html?_ijt=2s95eha7beq819fka1uhdtb6ms")
        }else{
            alert("登录失败，请重试")
            window.open("http://localhost:63342/%E4%BB%A3%E7%A0%812/js/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/%E7%99%BB%E5%BD%95%E5%A4%B1%E8%B4%A5.html?_ijt=2646dc54qcuefaj65blnp369uv")
        }
    }
    close.onclick=function () {
        window.close();
    }
}