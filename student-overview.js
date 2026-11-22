// Student overview: a number box turns light green when the mouse is over it

let stats = document.querySelectorAll(".stat");

for (let i = 0; i < stats.length; i++) {
    stats[i].addEventListener("mouseover", function() {
        stats[i].style.backgroundColor = "#eef6f1";
    });

    stats[i].addEventListener("mouseout", function() {
        stats[i].style.backgroundColor = "";
    });
}
