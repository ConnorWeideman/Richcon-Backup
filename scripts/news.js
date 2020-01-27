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