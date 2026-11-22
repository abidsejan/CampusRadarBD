// About page: the clicked menu link becomes the active link

let links = document.querySelectorAll("#topNav a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        links.forEach(function(item) {
            item.classList.toggle("active", item === link);
        });
    });
});
