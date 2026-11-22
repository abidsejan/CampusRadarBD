// My registrations: tabs, view details and download

let rows = document.querySelectorAll("#regTable tbody tr");

// Upcoming tab: show every row
function showUpcoming(event) {
    event.preventDefault();
    document.getElementById("tabUpcoming").classList.toggle("on", true);
    document.getElementById("tabPast").classList.toggle("on", false);

    for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = "";
    }
}

// Past tab: show only the Completed rows
function showPast(event) {
    event.preventDefault();
    document.getElementById("tabUpcoming").classList.toggle("on", false);
    document.getElementById("tabPast").classList.toggle("on", true);

    for (let i = 0; i < rows.length; i++) {
        let status = rows[i].querySelectorAll("td")[2].textContent.trim();

        if (status === "Completed") {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

function downloadData() {
    alert("Preparing your registration data.");
}

// View link: show the details of that row
for (let i = 0; i < rows.length; i++) {
    rows[i].querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();
        let cells = rows[i].querySelectorAll("td");
        alert("Event: " + cells[0].textContent + "\nParticipation: " + cells[1].textContent + "\nStatus: " + cells[2].textContent + "\nDate: " + cells[3].textContent);
    });
}

document.getElementById("tabUpcoming").addEventListener("click", showUpcoming);
document.getElementById("tabPast").addEventListener("click", showPast);
document.getElementById("downloadBtn").addEventListener("click", downloadData);
