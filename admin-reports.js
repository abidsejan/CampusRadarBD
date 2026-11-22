// Reports: search, filter by severity and investigate a report

let rows = document.querySelectorAll("#reportTable tbody tr");

function getCell(row, number) {
    return row.querySelector("td:nth-child(" + number + ")").textContent.trim();
}

function filterTable() {
    let search = document.getElementById("q").value.trim().toLowerCase();
    let severity = document.getElementById("severity").value;
    let count = 0;

    rows.forEach(function(row) {
        let text = row.textContent.toLowerCase();
        let show = true;

        if (!text.includes(search)) {
            show = false;
        }
        if (severity !== "Severity: All" && getCell(row, 4) !== severity) {
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

function searchReports(event) {
    event.preventDefault();
    filterTable();
}

// Investigate link: mark that report as investigated
rows.forEach(function(row) {
    row.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();
        row.querySelector("a").innerHTML = "Investigated";
        alert("Report " + getCell(row, 1) + " is marked as investigated.");
    });
});

document.getElementById("filterForm").addEventListener("submit", searchReports);
document.getElementById("q").addEventListener("input", filterTable);
document.getElementById("severity").addEventListener("change", filterTable);
