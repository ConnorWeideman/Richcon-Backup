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