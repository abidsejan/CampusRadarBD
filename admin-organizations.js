// Organizations: search, filter and verify an organization

let rows = document.querySelectorAll("#orgTable tbody tr");

function getCell(row, number) {
    return row.querySelector("td:nth-child(" + number + ")").textContent.trim();
}

function filterTable() {
    let search = document.getElementById("q").value.trim().toLowerCase();
    let verification = document.getElementById("verification").value;
    let count = 0;

    rows.forEach(function(row) {
        let text = row.textContent.toLowerCase();
        let show = true;

        if (!text.includes(search)) {
            show = false;
        }
        if (verification !== "Verification: All" && getCell(row, 3) !== verification) {
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

function searchOrganizations(event) {
    event.preventDefault();
    filterTable();
}

// Review link: verify that organization
rows.forEach(function(row) {
    row.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();

        if (getCell(row, 3) === "Verified") {
            alert(getCell(row, 1) + " is already verified.");
        } else {
            row.querySelector("td:nth-child(3)").innerHTML = '<span class="badge green">Verified</span>';
            alert(getCell(row, 1) + " is now verified.");
        }
    });
});

document.getElementById("filterForm").addEventListener("submit", searchOrganizations);
document.getElementById("q").addEventListener("input", filterTable);
document.getElementById("verification").addEventListener("change", filterTable);
