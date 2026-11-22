// Audit log: search the table and filter by action

let rows = document.querySelectorAll("#auditTable tbody tr");

function filterTable(event) {
    event.preventDefault();

    let search = document.getElementById("q").value.trim().toLowerCase();
    let action = document.getElementById("action").value;

    for (let i = 0; i < rows.length; i++) {
        let text = rows[i].textContent.toLowerCase();
        let rowAction = rows[i].querySelectorAll("td")[2].textContent.trim();
        let show = true;

        if (!text.includes(search)) {
            show = false;
        }
        if (action !== "Action: All" && rowAction !== action) {
            show = false;
        }

        if (show) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

document.getElementById("filterForm").addEventListener("submit", filterTable);
document.getElementById("q").addEventListener("input", filterTable);
document.getElementById("action").addEventListener("change", filterTable);
