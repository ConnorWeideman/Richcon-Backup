let navStyleToggle = false;
function toggleNavStyle() {
    const topNav = document.querySelector("header#top");
    const sideNav = document.querySelector("header#side");
    const mainContent = document.querySelector("main");
    const main1Overlay = document.querySelector("main #main1 #gradient-overlay");
    const mainToggle = document.querySelector("main input");
    const footer = document.querySelector("footer");

    if (navStyleToggle) {
        topNav.style.display = "none";
        sideNav.style.display = "block";
        mainContent.style.padding = `0 0 0 ${sideNav.clientWidth}px`;
        main1Overlay.style.margin = "0";
        mainToggle.style.margin = `0 0 10px ${sideNav.clientWidth + 10}px`;
        footer.style.padding = `50px 0 50px ${sideNav.clientWidth}px`;
    }
    else {
        topNav.style.display = "block";
        sideNav.style.display = "none";
        mainContent.style.padding = `${topNav.clientHeight}px 0 0 0`;
        main1Overlay.style.margin = `${topNav.clientHeight}px 0 0 0`;
        mainToggle.style.margin = `0 0 10px ${sideNav.clientWidth + 10}px`;
        footer.style.padding = "50px 0";
    }
    navStyleToggle = !navStyleToggle;
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
        mainToggle.style.margin = `0 0 10px ${sideNav.clientWidth + 10}px`;
    }
    else {
        mainContent.style.padding = `${topNav.clientHeight}px 0 0 ${smallSideNav.clientWidth}px`;
        mainToggle.style.margin = `0 0 10px ${smallSideNav.clientWidth + 10}px`;
    }
}
document.addEventListener("DOMContentLoaded", alignNavStyle);

const mainToggle = document.querySelector("main input");
function toggleMain() {
    const mainContent = document.querySelectorAll("main section");
    for (let i = 0; i < mainContent.length; i++) {
        if (mainToggle.value == i) {
            mainContent[i].style.display = "block";
        }
        else mainContent[i].style.display = "none";
    }
}
mainToggle.addEventListener("change", toggleMain);

function main1() {
    setTimeout(function() {
        const mainOverlay = document.querySelector("main #main1 #gradient-overlay");
        const mainImg = document.querySelector("main #main1 img");
        mainOverlay.style.height = "100%";
        mainImg.style.width = "50%";
    }, 1000);
}
document.addEventListener("DOMContentLoaded", main1);