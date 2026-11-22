// About page: the clicked menu link becomes the active link

let links = document.querySelectorAll("#topNav a");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        for (let j = 0; j < links.length; j++) {
            links[j].classList.toggle("active", i === j);
        }
    });
}
