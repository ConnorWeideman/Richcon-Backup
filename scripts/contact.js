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