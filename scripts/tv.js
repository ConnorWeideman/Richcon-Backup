const films = document.querySelectorAll("main #film1 #main-box #films .film");
function film1(event) {
    const type = event.srcElement.id;
    if (type == "all") {
        for (var film of films) {
            film.classList.remove("hide");
        }
    }
    else {
        for (var film of films) {
            if (film.classList.contains(type)) {
                film.classList.remove("hide");
            }
            else {
                film.classList.add("hide");
            }
        }
    }
}
document.querySelectorAll("main #film1 #main-box #filters .filter").forEach(filter => {
    filter.addEventListener("click", film1);
});