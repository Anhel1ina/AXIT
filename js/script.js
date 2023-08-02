let prevScrollpos = window.scrollY;
window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if(window.innerWidth > 720){
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("scroll-menu").style.top = "0";
        } else {
            document.getElementById("scroll-menu").style.top = "-76px";
        }
        prevScrollpos = currentScrollPos;
    }
    else{
        document.getElementById("scroll-menu").style.top = "0";
    }
}
