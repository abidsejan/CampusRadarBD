// Accounts: search, filter and view an account

let rows = document.querySelectorAll("#accountsTable tbody tr");

function getCell(row, number) {
    return row.querySelector("td:nth-child(" + number + ")").textContent.trim();
}

function filterTable() {
    let search = document.getElementById("q").value.trim().toLowerCase();
    let role = document.getElementById("role").value;
    let status = document.getElementById("status").value;
    let count = 0;

    rows.forEach(function(row) {
        let text = row.textContent.toLowerCase();
        let show = true;

        if (!text.includes(search)) {
            show = false;
        }
        if (role !== "Role: All" && getCell(row, 2) !== role) {
            show = false;
        }
        if (status !== "Status: All" && getCell(row, 3) !== status) {
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

function searchAccounts(event) {
    event.preventDefault();
    filterTable();
}

function exportAccounts() {
    alert("Exporting accounts.");
}

// View link: show the details of that row (name = first cell without the email)
rows.forEach(function(row) {
    row.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();

        let first = getCell(row, 1);
        let email = row.querySelector(".muted").textContent;
        let name = first.slice(0, first.length - email.length);

        alert("Name: " + name + "\nEmail: " + email + "\nRole: " + getCell(row, 2) + "\nStatus: " + getCell(row, 3) + "\nJoined: " + getCell(row, 4));
    });
});

document.getElementById("filterForm").addEventListener("submit", searchAccounts);
document.getElementById("q").addEventListener("input", filterTable);
document.getElementById("role").addEventListener("change", filterTable);
document.getElementById("status").addEventListener("change", filterTable);
document.getElementById("exportBtn").addEventListener("click", exportAccounts);
