// Forgot password page: check the email and the new password

function checkForgot(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let newPassword = document.getElementById("new").value;

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (newPassword.length < 8) {
        alert("New password needs at least 8 characters.");
        return;
    }

    window.location.href = "reset-password.html";
}

document.getElementById("forgotForm").addEventListener("submit", checkForgot);
