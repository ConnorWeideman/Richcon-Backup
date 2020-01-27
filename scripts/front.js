function main1() {
    const mainOverlay = document.querySelector("main #main1 #gradient-overlay");
    const mainImg = document.querySelector("main #main1 img");
    if (mainToggle.value == 0) {
        setTimeout(function () {
            mainOverlay.style.height = "100%";
            mainImg.style.width = "50%";
        }, 1000);
    }
    else {
        mainOverlay.style.height = "0%";
        mainImg.style.width = "0%";

    }
}
if (isMain) {
    document.addEventListener("DOMContentLoaded", main1);
}

function main2() {
    const mainOverlay = document.querySelector("main #main2 #gradient-overlay");
    if (mainToggle.value == 3) {
        setTimeout(function () {
            mainOverlay.style.opacity = "0.6";
        }, 500);
    }
    else {
        mainOverlay.style.opacity = "1";
    }
}

let main3Interval;
function main3() {
    const headerWrap = document.querySelector("main #main3 #header .wrap");
    const backgroundImage = document.querySelector("main #main3 > img");
    let headerToggle = true;
    if (mainToggle.value == 1) {
        setTimeout(() => { backgroundImage.style.transform = "scale(1.1)" }, 250);
        main3Interval = setInterval(function () {
            if (headerToggle) {
                headerWrap.style.top = "-100%";
            }
            else {
                headerWrap.style.top = "0";
            }
            headerToggle = !headerToggle;
        }, 3000);
    }
    else {
        backgroundImage.style.transform = "scale(1)";
        clearInterval(main3Interval);
    }
}

function main4() {
    const overlay = document.querySelector("main #main4 #gradient-overlay");
    if (mainToggle.value == 2) {
        setTimeout(function () {
            overlay.style.opacity = "0";
        }, 500);
    }
    else {
        overlay.style.opacity = "1";
    }
}

if (document.querySelector("main #main1")) {
    document.querySelector("main #loadscreentoggle").addEventListener("click", mainLoadscreen);
}

function mainLoadscreen() {
    const loadscreen = document.querySelector("main #loadscreen");
    loadscreen.style = "";
    loadscreen.style.display = "block";
    window.setTimeout(() => {
        loadscreen.style.opacity = "0";
        loadscreen.style.zIndex = "0";
        window.setTimeout(() => {
            loadscreen.style.display = "none";
        }, 2000);
    }, 2000);
}