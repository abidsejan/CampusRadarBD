// Event moderation: search, filter, sort and approve events

let rows = document.querySelectorAll("#queueTable tbody tr");
let tbody = document.querySelector("#queueTable tbody");

// the first option "Status: Pending review" shows the whole queue
function filterTable(event) {
    event.preventDefault();

    let search = document.getElementById("q").value.trim().toLowerCase();
    let status = document.getElementById("status").value;

    for (let i = 0; i < rows.length; i++) {
        let text = rows[i].textContent.toLowerCase();
        let rowStatus = rows[i].querySelectorAll("td")[2].textContent.trim();
        let show = true;

        if (!text.includes(search)) {
            show = false;
        }
        if (status !== "Status: Pending review" && rowStatus !== status) {
            show = false;
        }

        if (show) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

// Sort: the table starts newest first, "oldest" shows the rows in the opposite order
function sortTable() {
    let oldest = document.getElementById("sort").value === "Sort by oldest";

    for (let i = 0; i < rows.length; i++) {
        if (oldest) {
            tbody.appendChild(rows[rows.length - 1 - i]);
        } else {
            tbody.appendChild(rows[i]);
        }
    }
}

// Review link: approve that event
for (let i = 0; i < rows.length; i++) {
    rows[i].querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();
        rows[i].querySelectorAll("td")[2].innerHTML = '<span class="badge green">Approved</span>';
        rows[i].querySelector("a").innerHTML = "Reviewed";
        alert("The event is approved.");
    });
}

document.getElementById("filterForm").addEventListener("submit", filterTable);
document.getElementById("q").addEventListener("input", filterTable);
document.getElementById("status").addEventListener("change", filterTable);
document.getElementById("sort").addEventListener("change", sortTable);
