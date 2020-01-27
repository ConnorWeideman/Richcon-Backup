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