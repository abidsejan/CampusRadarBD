// Browse events: search, filter and star the event cards

let cards = document.querySelectorAll(".event-card");

function filterEvents() {
    let search = document.getElementById("q").value.trim().toLowerCase();
    let category = document.getElementById("category").value;
    let place = document.getElementById("location").value;
    let count = 0;

    cards.forEach(function(card) {
        let text = card.textContent.toLowerCase();
        let type = card.querySelector(".event-top").textContent.toLowerCase();
        let show = true;

        if (!text.includes(search)) {
            show = false;
        }
        if (category !== "All categories" && !type.includes(category.toLowerCase())) {
            show = false;
        }
        if (place !== "Any location" && !text.includes(place.toLowerCase())) {
            show = false;
        }

        if (show) {
            card.style.display = "";
            count++;
        } else {
            card.style.display = "none";
        }
    });

    document.getElementById("count").innerHTML = count + " events found";
}

function searchEvents(event) {
    event.preventDefault();
    filterEvents();
}

// Star: ☆ is the empty star, ★ is the full star
document.querySelectorAll(".star").forEach(function(star) {
    star.addEventListener("click", function() {
        if (star.textContent === "☆") {
            star.textContent = "★";
        } else {
            star.textContent = "☆";
        }
    });
});

document.getElementById("filterForm").addEventListener("submit", searchEvents);
document.getElementById("q").addEventListener("input", filterEvents);
document.getElementById("category").addEventListener("change", filterEvents);
document.getElementById("location").addEventListener("change", filterEvents);
