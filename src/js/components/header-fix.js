if(document.getElementById('header')){
    window.addEventListener("scroll", bringmenu);
}

function bringmenu() {

    let headerH = document.getElementById('header').clientHeight;
    let menu = document.getElementById('menu');
    let headerFix = document.getElementById("header-fix");

    if (document.body.scrollTop > headerH || document.documentElement.scrollTop > headerH) {
        headerFix.style.top = "0";
        menu.style.cssText= `
        position: fixed;
        top: ${headerFix.clientHeight}px;
    `
    } else {
        headerFix.style.top = "-100%";
        menu.style.cssText= `
        position: releative;
        top: auto;
    `
    }
}