// Login page: check the form, then open the page for the chosen role

function checkLogin(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 8) {
        alert("Password needs at least 8 characters.");
        return;
    }

    if (role === "") {
        alert("Please choose Student, Organizer or Admin.");
        return;
    }

    if (role === "student") {
        window.location.href = "student-overview.html";
    } else if (role === "organizer") {
        window.location.href = "organizer-overview.html";
    } else {
        window.location.href = "admin-overview.html";
    }
}

document.getElementById("loginForm").addEventListener("submit", checkLogin);
