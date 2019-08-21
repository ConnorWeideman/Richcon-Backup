const isMain = document.querySelector("main #main1");

let navStyleToggle = false;
function toggleNavStyle() {
    const topNav = document.querySelector("header#top");
    const sideNav = document.querySelector("header#side");
    const mainContent = document.querySelector("main");
    const mainToggle = document.querySelector("main input");
    const footer = document.querySelector("footer");
    if (navStyleToggle) {
        topNav.style.display = "none";
        sideNav.style.display = "block";
        mainContent.style.padding = `0 0 0 ${sideNav.clientWidth}px`;
        mainToggle.style.margin = `${topNav.clientHeight + 10}px 0 0 ${sideNav.clientWidth + 10}px`;
        footer.style.padding = `0 0 0 ${sideNav.clientWidth}px`;
    }
    else {
        topNav.style.display = "block";
        sideNav.style.display = "none";
        mainContent.style.padding = `${topNav.clientHeight}px 0 0 0`;
        mainToggle.style.margin = `${topNav.clientHeight + 10}px 0 0 ${sideNav.clientWidth + 10}px`;
        footer.style.padding = "0";
    }
    if (isMain) toggleNavMains()
    navStyleToggle = !navStyleToggle;
}

function toggleNavMains() {
    const vh = document.documentElement.clientHeight;
    const topNav = document.querySelector("header#top");
    const main1 = document.querySelector("main #main1");
    const main1Overlay = document.querySelector("main #main1 #gradient-overlay");
    const main2 = document.querySelector("main #main2");
    const main3 = document.querySelector("main #main3");
    const main4 = document.querySelector("main #main4");
    if (navStyleToggle) {
        main1.style.height = "100vh";
        main1.style.lineHeight = "100vh";
        main1.style.transition = "3s";
        main1Overlay.style.margin = "0";
        main2.style.height = "100vh";
        main3.style.height = "100vh";
        main4.style.height = "100vh";
        main4.style.lineHeight = "100vh";
    }
    else {
        main1.style.transition = "0s";
        main1.style.height = `${vh - topNav.clientHeight}px`;
        main1.style.lineHeight = `${vh - topNav.clientHeight}px`;
        main1Overlay.style.margin = `${topNav.clientHeight}px 0 0 0`;
        main2.style.height = `${vh - topNav.clientHeight}px`;
        main3.style.height = `${vh - topNav.clientHeight}px`;
        main4.style.height = `${vh - topNav.clientHeight}px`;
        main4.style.lineHeight = `${vh - topNav.clientHeight}px`;
    }
}

document.querySelector("#nav-position-toggler").addEventListener("click", toggleNavStyle);

let sideNavToggle = true;
function toggleSideNav() {
    const sideMenu = document.querySelector("header#side ul");
    const sideNavSpan1 = document.querySelector("#side .small-side-menu .nav-expander span:nth-child(1)");
    const sideNavSpan2 = document.querySelector("#side .small-side-menu .nav-expander span:nth-child(2)");
    if (sideNavToggle) {
        sideMenu.style.width = "15vw";
        sideMenu.style.padding = "2vh 40px";
        sideNavSpan1.style.transform = "translateY(1.5vw) rotate(45deg)"
        sideNavSpan2.style.transform = "translateY(-1.5vw) rotate(-45deg)"
    }
    else {
        sideMenu.style.width = "0";
        sideMenu.style.padding = "2vh 0";
        sideNavSpan1.style.transform = ""
        sideNavSpan2.style.transform = ""
    }
    sideNavToggle = !sideNavToggle;
}
if (document.querySelector("#side .small-side-menu")){
    document.querySelector("#side .nav-expander").addEventListener("click", toggleSideNav);
}

function centerTopNav() {
    const items = document.querySelectorAll("#top .menu-item");
    for (let i = 0; i < items.length; i++) {
        if (i < items.length/2) {
            items[i].style.float = "left";
        }
        else {
            items[i].style.float = "right";
        }
    }
}

if (document.querySelector("#top .top-center-menu")) {
    document.addEventListener("DOMContentLoaded", centerTopNav);
}

function alignNavStyle() {
    const mainContent = document.querySelector("main");
    const topNav = document.querySelector("header#top");
    const sideNav = document.querySelector("header#side .side-menu");
    const smallSideNav = document.querySelector("header#side .small-side-menu");
    const mainToggle = document.querySelector("main input");
    if (sideNav) {
        mainContent.style.padding = `${topNav.clientHeight}px 0 0 ${sideNav.clientWidth}px`;
        mainToggle.style.margin = `10px 0 0 ${sideNav.clientWidth + 10}px`;
    }
    else {
        mainContent.style.padding = `${topNav.clientHeight}px 0 0 ${smallSideNav.clientWidth}px`;
        mainToggle.style.margin = `10px 0 0 ${smallSideNav.clientWidth + 10}px`;
    }
}
document.addEventListener("DOMContentLoaded", alignNavStyle);

const mainToggle = document.querySelector("main input");
function toggleMain() {
    const mainContent = document.querySelectorAll("main > section");
    for (let i = 0; i < mainContent.length; i++) {
        if (mainToggle.value == i) {
            mainContent[i].style.display = "block";
        }
        else mainContent[i].style.display = "none";
    }
    if (isMain) {
        main1();
        main2();
        main3();
        main4(); 
    }

}
mainToggle.addEventListener("change", toggleMain);

function main1() {
    const mainOverlay = document.querySelector("main #main1 #gradient-overlay");
    const mainImg = document.querySelector("main #main1 img");
    if (mainToggle.value == 0) {
        setTimeout(function() {
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
    if (mainToggle.value == 1) {
        setTimeout(function() {
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
    if (mainToggle.value == 2) {
        setTimeout(()=>{backgroundImage.style.transform = "scale(1.1)"}, 250);
        main3Interval = setInterval(function() {
            if (headerToggle) {
                headerWrap.style.top = "-100%";
            }
            else {
                headerWrap.style.top = "0";
            }
            headerToggle = !headerToggle;
        }, 3750);
    }
    else {
        backgroundImage.style.transform = "scale(1)";
        clearInterval(main3Interval);
    }
}

function main4() {
    const overlay = document.querySelector("main #main4 #gradient-overlay");
    if (mainToggle.value == 3) {
        setTimeout(function() {
        overlay.style.opacity = "0";
        },500);
    }
    else {
        overlay.style.opacity = "1";
    }
}

let footerToggle = 1;
function toggleFooter() {
    const footerContent = document.querySelectorAll("footer section");
    for (let i = 0; i < footerContent.length; i++) {
        if (footerToggle == i) {
            footerContent[i].style.display = "block";
        }
        else footerContent[i].style.display = "none";
    }
    if (footerToggle == footerContent.length - 1) {
        footerToggle = 0;
    }
    else footerToggle++;
}
document.querySelector("footer").addEventListener("click", toggleFooter);

function about2Event() {
    const toggle = document.querySelectorAll("main #about2 #header a");
    const about = document.querySelectorAll("main #about2 > section");
    const photos = document.querySelectorAll("main #about2 #photos img");
    for (let x = 0; x < toggle.length; x++) {
        toggle[x].id = x;
        toggle[x].addEventListener("click", toggleMain = (x) => {
            x = Number(x.currentTarget.id);
            for (let i = 0; i < about.length; i++) {
                if (x == i) {
                    about[i].style.display = "block";
                    photos[i].style.display = "block";
                }
                else {
                    about[i].style.display = "none";
                    photos[i].style.display = "none";
                }
            }
        });
    }
    //////////////FIX THIS
    let e = { currentTarget: {}};
    e.currentTarget.id = 0;
    toggleMain(e);
}
if (document.querySelectorAll("main #about1")) {
    document.addEventListener("DOMContentLoaded", about2Event);
}