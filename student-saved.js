// Saved events: remove a saved event and sort the cards

let cards = document.querySelectorAll(".saved-card");
let total = cards.length;

function updateCount() {
    document.getElementById("savedCount").innerHTML = "0" + total + " events saved";
}

// Remove button: hide the card and lower the count
cards.forEach(function(card) {
    card.querySelector("button").addEventListener("click", function() {
        card.style.display = "none";
        total--;
        updateCount();
    });
});

// Sort: every change flips the order of the cards
function sortCards() {
    let list = document.querySelectorAll(".saved-card");
    let row1 = document.getElementById("row1");
    let row2 = document.getElementById("row2");
    let row3 = document.getElementById("row3");

    for (let i = list.length - 1; i >= 0; i--) {
        let place = list.length - 1 - i;

        if (place < 2) {
            row1.appendChild(list[i]);
        } else if (place < 4) {
            row2.appendChild(list[i]);
        } else {
            row3.appendChild(list[i]);
        }
    }
}

document.getElementById("sort").addEventListener("change", sortCards);
