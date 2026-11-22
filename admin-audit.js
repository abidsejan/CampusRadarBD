// Audit log: search the table and filter by action

function filterTable() {
    let search = document.getElementById("q").value.trim().toLowerCase();
    let action = document.getElementById("action").value;
    let rows = document.querySelectorAll("#auditTable tbody tr");
    let count = 0;

    rows.forEach(function(row) {
        let text = row.textContent.toLowerCase();
        let rowAction = row.querySelector("td:nth-child(3)").textContent.trim();
        let show = true;

        if (!text.includes(search)) {
            show = false;
        }
        if (action !== "Action: All" && rowAction !== action) {
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

function searchLog(event) {
    event.preventDefault();
    filterTable();
}

document.getElementById("filterForm").addEventListener("submit", searchLog);
document.getElementById("q").addEventListener("input", filterTable);
document.getElementById("action").addEventListener("change", filterTable);
