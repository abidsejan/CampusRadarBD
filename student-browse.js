// Browse events: search and filter the event cards, star an event

let cards = document.querySelectorAll(".event-card");
let stars = document.querySelectorAll(".star");

function filterEvents(event) {
    event.preventDefault();

    let search = document.getElementById("q").value.trim().toLowerCase();
    let category = document.getElementById("category").value.toLowerCase();
    let place = document.getElementById("location").value.toLowerCase();
    let count = 0;

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].textContent.toLowerCase();
        let type = cards[i].querySelector(".event-top").textContent.toLowerCase();
        let show = true;

        if (!text.includes(search)) {
            show = false;
        }
        if (category !== "all categories" && !type.includes(category)) {
            show = false;
        }
        if (place !== "any location" && !text.includes(place)) {
            show = false;
        }

        if (show) {
            cards[i].style.display = "";
            count++;
        } else {
            cards[i].style.display = "none";
        }
    }

    document.getElementById("count").innerHTML = count + " events found";
}

// Star: click to change the empty star to a full star and back
for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click", function() {
        if (stars[i].textContent === "☆") {
            stars[i].textContent = "★";
        } else {
            stars[i].textContent = "☆";
        }
    });
}

document.getElementById("filterForm").addEventListener("submit", filterEvents);
document.getElementById("q").addEventListener("input", filterEvents);
document.getElementById("category").addEventListener("change", filterEvents);
document.getElementById("location").addEventListener("change", filterEvents);
