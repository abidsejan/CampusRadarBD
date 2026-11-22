// Register page: check every field, then go to the login page

function checkRegister(event) {
    event.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let type = document.getElementById("type").value;
    let password = document.getElementById("password").value;

    if (fullname.length < 2) {
        alert("Please enter your full name.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (type === "") {
        alert("Please choose Student or Organizer.");
        return;
    }

    if (password.length < 8) {
        alert("Password needs at least 8 characters.");
        return;
    }

    alert("Account created. Please log in.");
    window.location.href = "login.html";
}

document.getElementById("registerForm").addEventListener("submit", checkRegister);
