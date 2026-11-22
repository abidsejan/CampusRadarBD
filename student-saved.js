// Saved events: remove a saved event and sort the cards

let cards = document.querySelectorAll(".saved-card");
let total = cards.length;

// Remove button: hide the card and lower the count
for (let i = 0; i < cards.length; i++) {
    cards[i].querySelector("button").addEventListener("click", function() {
        cards[i].style.display = "none";
        total--;
        document.getElementById("savedCount").innerHTML = "0" + total + " events saved";
    });
}

// Sort: "Newest saved" shows the cards in the opposite order
function sortCards() {
    let newest = document.getElementById("sort").value === "Sort: Newest saved";

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        if (newest) {
            card = cards[cards.length - 1 - i];
        }

        if (i < 2) {
            document.getElementById("row1").appendChild(card);
        } else if (i < 4) {
            document.getElementById("row2").appendChild(card);
        } else {
            document.getElementById("row3").appendChild(card);
        }
    }
}

document.getElementById("sort").addEventListener("change", sortCards);
