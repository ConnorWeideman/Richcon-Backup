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