// Reset password page: the new password must be long enough and match

function checkReset(event) {
    event.preventDefault();

    let newPass = document.getElementById("newpass").value;
    let confirmPass = document.getElementById("confirm").value;

    if (newPass.length < 8) {
        alert("Password needs at least 8 characters.");
        return;
    }

    if (newPass !== confirmPass) {
        alert("Passwords do not match.");
        return;
    }

    alert("Password updated. Please log in.");
    window.location.href = "login.html";
}

document.getElementById("resetForm").addEventListener("submit", checkReset);
