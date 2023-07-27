let prevScrollpos = window.scrollY;
window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("scroll-menu").style.top = "0";
    } else {
        document.getElementById("scroll-menu").style.top = "-76px";
    }
    prevScrollpos = currentScrollPos;
}
