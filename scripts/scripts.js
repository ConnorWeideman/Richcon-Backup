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
    if (isMain) {
        toggleNavMains();
    }
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
    const items = document.querySelectorAll("#top .menu-item");
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
    if (mainToggle.value == 1) {
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
    if (mainToggle.value == 2) {
        setTimeout(() => { backgroundImage.style.transform = "scale(1.1)" }, 250);
        main3Interval = setInterval(function () {
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
        setTimeout(function () {
            overlay.style.opacity = "0";
        }, 500);
    }
    else {
        overlay.style.opacity = "1";
    }
}

function mainLoadscreen() {
    const loadscreen = document.querySelector("main #loadscreen");
    loadscreen.style.display = "block";
    window.setTimeout(() => {
        loadscreen.style.opacity = "0";
        loadscreen.style.zIndex = "0";
    }, 2000);
}
if (document.querySelector("main #main1")) {
    document.querySelector("main #loadscreentoggle").addEventListener("click", mainLoadscreen);
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
    let e = { currentTarget: {} };
    e.currentTarget.id = 0;
    toggleMain(e);
}
if (document.querySelector("main #about1")) {
    about2Event();
}

function film1(event) {
    const type = event.srcElement.id;
    const films = document.querySelectorAll("main #film1 #main-box #films .film");
    if (type == "all") {
        for (var film of films) {
            film.classList.add("show");
        }
    }
    else {
        for (var film of films) {
            if (film.classList.contains(type)) {
                film.classList.add("show");
            }
            else {
                film.classList.remove("show");
            }
        }
    }
}
if (document.querySelector("main #film1")) {
    const filters = document.querySelectorAll("main #film1 #main-box #filters .filter");
    for (var filter of filters) {
        filter.addEventListener("click", film1);
    }
    /////fix this too
    const start = { srcElement: { id: "all" } };
    film1(start);
}

function film2(event) {
    const type = event.srcElement.id;
    const films = document.querySelectorAll("main #film2 #films .film");
    if (type == "all") {
        for (var film of films) {
            film.classList.add("show");
        }
    }
    else {
        for (var film of films) {
            if (film.classList.contains(type)) {
                film.classList.add("show");
            }
            else {
                film.classList.remove("show");
            }
        }
    }
}
if (document.querySelector("main #film2")) {
    const filters = document.querySelectorAll("main #film2 #header #filters .filter");
    for (var filter of filters) {
        filter.addEventListener("click", film2);
    }
    /////fix this too
    const start = { srcElement: { id: "all" } };
    film2(start);
}

function clean(node) {
    for (var n = 0; n < node.childNodes.length; n++) {
        var child = node.childNodes[n];
        if
            (
            child.nodeType === 8
            ||
            (child.nodeType === 3 && !/\S/.test(child.nodeValue))
        ) {
            node.removeChild(child);
            n--;
        }
        else if (child.nodeType === 1) {
            clean(child);
        }
    }
}

function film3() {
    clean(document);
    const mainFilms = document.querySelector("main #film3 .films");
    const films = document.querySelectorAll("main #film3 .films .film");
    const produced = document.querySelector("main #film3 #produced .films");
    const directed = document.querySelector("main #film3 #directed .films");
    const acted = document.querySelector("main #film3 #acted .films");
    const written = document.querySelector("main #film3 #written .films");
    let producedAr = [], directedAr = [], actedAr = [], writtenAr = [];
    for (var film of films) {
        if (film.classList.contains("produced")) {
            producedAr.push(film);
        }
        if (film.classList.contains("directed")) {
            directedAr.push(film);
        }
        if (film.classList.contains("acted")) {
            actedAr.push(film);
        }
        if (film.classList.contains("written")) {
            writtenAr.push(film);
        }
    }
    for (var prodFilm of producedAr) {
        let film = prodFilm.cloneNode(true);
        produced.appendChild(film);
    }
    for (var directFilm of directedAr) {
        let film = directFilm.cloneNode(true);
        directed.appendChild(film);
    }
    for (var actFilm of actedAr) {
        let film = actFilm.cloneNode(true);
        acted.appendChild(film);
    }
    for (var writFilm of writtenAr) {
        let film = writFilm.cloneNode(true);
        written.appendChild(film);
    }
    function startSlider() {
        const mainSlide = film3Slide(mainFilms)();
        const prodSlide = film3Slide(produced)();
        const directSlide = film3Slide(directed)();
        const actSlide = film3Slide(acted)();
        const writSlide = film3Slide(written)();
    }
    document.querySelector("main input").addEventListener("change", startSlider);
}
if (document.querySelector("main #film3")) {
    document.addEventListener("DOMContentLoaded", film3);
}

function film3Slide(section) {
    const films = section.childNodes;
    const filmWidth = films[0].clientWidth;
    const slideLeft = section.getBoundingClientRect().x;
    if (films.length > 4) {
        return function () {
            function slide() {
                for (let i = 0; i < films.length; i++) {
                    let left = films[i].style.left;
                    if (!left) left = 0;
                    left = parseInt(left);
                    left -= filmWidth;
                    films[i].style.left = left + "px";
                    films[i].style.zIndex = "0";
                    if ((films[i].getBoundingClientRect().x + filmWidth) < slideLeft) {
                        if (films[i + 1]) films[i + 1].style.zIndex = "-1";
                        films[i].style.left = left + (filmWidth * (films.length - 1)) + "px";
                    }
                }
            };
            slide();
            window.setInterval(slide, 4000);
        }
    }
    else return function () { }
}

function film4() {
    const filter = document.querySelector("main #film4 #toggle #options");
    const films = document.querySelectorAll("main #film4 #films .film");
    if (filter.value == "all") {
        for (var film of films) {
            film.classList.add("show");
        }
    }
    else {
        for (var film of films) {
            if (film.classList.contains(filter.value)) {
                film.classList.add("show");
            }
            else {
                film.classList.remove("show");
            }
        }
    }
}
if (document.querySelector("main #film4")) {
    document.querySelector("main #film4 #toggle #options").addEventListener("change", film4);
    film4();
}

function clients1(event) {
    let toggle = event.target.innerText;
    toggle = toggle.toLowerCase();
    const clients = document.querySelectorAll("main #clients1 #clients .client");
    if (toggle == "all") {
        for (var client of clients) {
            client.classList.add("show");
        }
    }
    else {
        for (var client of clients) {
            if (client.classList.contains(toggle)) {
                client.classList.add("show");
            }
            else {
                client.classList.remove("show");
            }
        }
    }
}
if (document.querySelector("main #clients1")) {
    const toggles = document.querySelectorAll("main #clients1 #toggler .toggle");
    const startClient1 = { target: { innerText: "all" } };
    for (var toggle of toggles) {
        toggle.addEventListener("click", clients1);
    }
    clients1(startClient1);
}

function clients2(toggle) {
    let filters = [];
    const clients = document.querySelectorAll("main #clients2 #clients .client");
    const checkboxes = document.querySelectorAll("main #clients2 #toggler .toggle input");
    if (toggle !== "all") {
        toggle = toggle.target.id.toLowerCase();
    }
    if (toggle == "all" && checkboxes[0].checked == true) {
        for (let i = 1; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
        for (var client of clients) {
            client.classList.add("show");
        }
    }
    else {
        checkboxes[0].checked = false;
        for (let i = 1; i < checkboxes.length; i++) {
            if (checkboxes[i].checked == true) {
                filters.push(checkboxes[i].id.toLowerCase());
            }
        }
        for (var client of clients) {
            client.classList.remove("show");
            for (var filter of filters) {
                if (client.classList.contains(filter)) {
                    client.classList.add("show");
                }
            }
        }
    }
}
if (document.querySelector("main #clients2")) {
    const checkboxes = document.querySelectorAll("main #clients2 #toggler .toggle");
    for (var toggle of checkboxes) {
        toggle.addEventListener("change", clients2);
    }
    clients2("all");
}

function clients3() {
    clean(document);
    const mainClients = document.querySelector("main #clients3 #all");
    const clients = document.querySelectorAll("main #clients3 #all .client");
    const produced = document.querySelector("main #clients3 #produced");
    const directed = document.querySelector("main #clients3 #directed");
    const acted = document.querySelector("main #clients3 #acted");
    const written = document.querySelector("main #clients3 #written");
    let producedAr = [], directedAr = [], actedAr = [], writtenAr = [];
    for (var client of clients) {
        if (client.classList.contains("produced")) {
            producedAr.push(client);
        }
        if (client.classList.contains("directed")) {
            directedAr.push(client);
        }
        if (client.classList.contains("acted")) {
            actedAr.push(client);
        }
        if (client.classList.contains("written")) {
            writtenAr.push(client);
        }
    }
    for (var prodClient of producedAr) {
        let client = prodClient.cloneNode(true);
        produced.appendChild(client);
    }
    for (var directClient of directedAr) {
        let client = directClient.cloneNode(true);
        directed.appendChild(client);
    }
    for (var actClient of actedAr) {
        let client = actClient.cloneNode(true);
        acted.appendChild(client);
    }
    for (var writClient of writtenAr) {
        let client = writClient.cloneNode(true);
        written.appendChild(client);
    }
    function startSlider() {
        const mainSlide = clients3Slide(mainClients)();
        const prodSlide = clients3Slide(produced)();
        const directSlide = clients3Slide(directed)();
        const actSlide = clients3Slide(acted)();
        const writSlide = clients3Slide(written)();
    }
    document.querySelector("main input").addEventListener("change", startSlider);
}
if (document.querySelector("main #clients3")) {
    document.addEventListener("DOMContentLoaded", clients3);
}

function clients3Slide(section) {
    const clients = section.childNodes;
    const clientWidth = clients[0].clientWidth;
    const slideLeft = section.getBoundingClientRect().x;
    if (clients.length > 4) {
        return function () {
            function slide() {
                for (let i = 0; i < clients.length; i++) {
                    let left = clients[i].style.left;
                    if (!left) left = 0;
                    left = parseInt(left);
                    left -= clientWidth;
                    clients[i].style.left = left + "px";
                    clients[i].style.zIndex = "0";
                    if ((clients[i].getBoundingClientRect().x + clientWidth) < slideLeft) {
                        if (clients[i + 1]) clients[i + 1].style.zIndex = "-1";
                        clients[i].style.left = left + (clientWidth * (clients.length - 1)) + "px";
                    }
                }
            };
            slide();
            window.setInterval(slide, 4000);
        }
    }
    else return function () { }
}

function clients4() {
    const filter = document.querySelector("main #clients4 #toggle #options");
    const clients = document.querySelectorAll("main #clients4 #clients .client");
    if (filter.value == "all") {
        for (var client of clients) {
            client.classList.add("show");
        }
    }
    else {
        for (var client of clients) {
            if (client.classList.contains(filter.value)) {
                client.classList.add("show");
            }
            else {
                client.classList.remove("show");
            }
        }
    }
}
if (document.querySelector("main #clients4")) {
    document.querySelector("main #clients4 #toggle #options").addEventListener("change", clients4);
    clients4();
}

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

function contact2(event) {
    const toggle = event.target.innerText.toLowerCase();
    const contacts = document.querySelectorAll("main #contact2 #contacts section");
    for (var contact of contacts) {
        if (contact.id == toggle) {
            contact.classList.add("show");
        }
        else {
            contact.classList.remove("show");
        }
    }
}
if (document.querySelector("main #contact2")) {
    const toggles = document.querySelectorAll("main #contact2 #header .toggle")
    for (var toggle of toggles) {
        toggle.addEventListener("click", contact2);
    }
    const start = { target: { innerText: "richcon" } };
    contact2(start);
}