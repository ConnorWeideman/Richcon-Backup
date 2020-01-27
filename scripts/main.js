const isMain = document.querySelector("main #main1");

let navStyleToggle = false;
let navDesignToggle = 0;
const navDesigns = [];
navDesigns.push(document.querySelector("header .top-menu"));
navDesigns.push(document.querySelector("header .small-side-menu"));
navDesigns.push(document.querySelector("header .top-center-menu"));
navDesigns.push(document.querySelector("header .side-menu"));
function toggleNavStyle() {
    const topNav = document.querySelector("header#top");
    const sideNav = document.querySelector("header#side");
    const mainContent = document.querySelector("main");
    const mainToggle = document.querySelector("main input");
    const footer = document.querySelector("footer");
    for (let design of navDesigns) {
        design.style.display = "none";
    }
    navDesigns[navDesignToggle].style.display = "block";
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
    if (isMain) {
        toggleNavMains();
    }
    navStyleToggle = !navStyleToggle;
    navDesignToggle++;
    if (navDesignToggle == 4) {
        navDesignToggle = 0;
    }
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
    const sideMenu = document.querySelector("#side .small-side-menu ul");
    const sideNavSpan1 = document.querySelector("#side .small-side-menu .nav-expander span:nth-child(1)");
    const sideNavSpan2 = document.querySelector("#side .small-side-menu .nav-expander span:nth-child(2)");
    if (sideNavToggle) {
        sideMenu.style.width = "15vw";
        sideMenu.style.padding = "2vh 40px";
        sideNavSpan1.style.transform = "translateY(1.5vw) rotate(45deg)";
        sideNavSpan2.style.transform = "translateY(-1.5vw) rotate(-45deg)";
    }
    else {
        sideMenu.style.width = "0";
        sideMenu.style.padding = "2vh 0";
        sideNavSpan1.style.transform = "";
        sideNavSpan2.style.transform = "";
    }
    sideNavToggle = !sideNavToggle;
}
if (document.querySelector("#side .small-side-menu")) {
    document.querySelector("#side .nav-expander").addEventListener("click", toggleSideNav);
}

function centerTopNav() {
    const items = document.querySelectorAll("#top .top-center-menu .menu-item");
    for (let i = 0; i < items.length; i++) {
        if (i < items.length / 2) {
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

let footerToggle = 1;
function toggleFooter() {
    document.querySelector("footer #red").style.display = "none";
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

function blog2(event) {
    let filter;
    if (event != "all") {
        filter = event.target.id;
    }
    else {
        filter = event;
    }
    const blogs = document.querySelectorAll("main #blog2 #blogs .blog");
    if (filter == "all") {
        for (var blog of blogs) {
            blog.classList.add("show");
        }
    }
    else {
        for (var blog of blogs) {
            if (blog.classList.contains(filter)) {
                blog.classList.add("show");
            }
            else {
                blog.classList.remove("show");
            }
        }
    }
}
if (document.querySelector("main #blog2")) {
    const toggles = document.querySelectorAll("main #blog2 #filters .filter");
    for (var toggle of toggles) {
        toggle.addEventListener("click", blog2);
    }
    blog2("all");
}

function blog4() {
    const toggle = document.querySelector("main #blog4 #toggle #options");
    const blogs = document.querySelectorAll("main #blog4 #blogs .blog");
    if (toggle.value == "all") {
        for (var blog of blogs) {
            blog.classList.remove("hide");
        }
    }
    else {
        for (var blog of blogs) {
            if (blog.classList.contains(toggle.value)) {
                blog.classList.remove("hide");
            }
            else {
                blog.classList.add("hide");
            }
        }
    }
}
if (document.querySelector("main #blog4")) {
    document.querySelector("main #blog4 #toggle #options").addEventListener("change", blog4);
}