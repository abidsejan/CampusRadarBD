// Event moderation: search, filter, sort and approve events

let tbody = document.getElementById("queueTable").querySelector("tbody");

function getCell(row, number) {
    return row.querySelector("td:nth-child(" + number + ")").textContent.trim();
}

// the first option "Status: Pending review" shows the whole queue
function filterTable() {
    let search = document.getElementById("q").value.trim().toLowerCase();
    let status = document.getElementById("status").value;
    let rows = document.querySelectorAll("#queueTable tbody tr");
    let count = 0;

    rows.forEach(function(row) {
        let text = row.textContent.toLowerCase();
        let show = true;

        if (!text.includes(search)) {
            show = false;
        }
        if (status !== "Status: Pending review" && getCell(row, 3) !== status) {
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

// Sort: the table starts newest first, so "oldest" flips the rows
let flipped = false;

function sortTable() {
    let oldestFirst = document.getElementById("sort").value === "Sort by oldest";

    if (oldestFirst !== flipped) {
        let rows = document.querySelectorAll("#queueTable tbody tr");

        for (let i = rows.length - 1; i >= 0; i--) {
            tbody.appendChild(rows[i]);
        }
        flipped = oldestFirst;
    }
    filterTable();
}

function searchQueue(event) {
    event.preventDefault();
    filterTable();
}

// Review link: approve that event
document.querySelectorAll("#queueTable tbody tr").forEach(function(row) {
    row.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();

        let first = getCell(row, 1);
        let small = row.querySelector(".muted").textContent;
        let name = first.slice(0, first.length - small.length);

        row.querySelector("td:nth-child(3)").innerHTML = '<span class="badge green">Approved</span>';
        row.querySelector("a").innerHTML = "Reviewed";
        alert(name + " is approved.");
    });
});

document.getElementById("filterForm").addEventListener("submit", searchQueue);
document.getElementById("q").addEventListener("input", filterTable);
document.getElementById("status").addEventListener("change", filterTable);
document.getElementById("sort").addEventListener("change", sortTable);
