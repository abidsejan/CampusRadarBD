// My registrations: tabs, view details and download

let rows = document.querySelectorAll("#regTable tbody tr");

function getCell(row, number) {
    return row.querySelector("td:nth-child(" + number + ")").textContent.trim();
}

// type = "past" shows only Completed rows, anything else shows all rows
function showRows(type) {
    let count = 0;

    rows.forEach(function(row) {
        let show = true;

        if (type === "past" && getCell(row, 3) !== "Completed") {
            show = false;
        }

        if (show) {
            row.style.display = "";
            count++;
        } else {
            row.style.display = "none";
        }
        row.classList.toggle("shade", show && count % 2 === 0);
    });
}

function showUpcoming(event) {
    event.preventDefault();
    document.getElementById("tabUpcoming").classList.toggle("on", true);
    document.getElementById("tabPast").classList.toggle("on", false);
    showRows("upcoming");
}

function showPast(event) {
    event.preventDefault();
    document.getElementById("tabUpcoming").classList.toggle("on", false);
    document.getElementById("tabPast").classList.toggle("on", true);
    showRows("past");
}

function downloadData() {
    alert("Preparing your registration data.");
}

// View link: show the details of that row
rows.forEach(function(row) {
    row.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();
        alert("Event: " + getCell(row, 1) + "\nParticipation: " + getCell(row, 2) + "\nStatus: " + getCell(row, 3) + "\nDate: " + getCell(row, 4));
    });
});

document.getElementById("tabUpcoming").addEventListener("click", showUpcoming);
document.getElementById("tabPast").addEventListener("click", showPast);
document.getElementById("downloadBtn").addEventListener("click", downloadData);
