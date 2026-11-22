// Student profile: Edit profile -> change the fields -> Save profile

function editProfile(event) {
    event.preventDefault();

    let button = document.getElementById("editBtn");

    // first click: start editing
    if (button.innerHTML === "Edit profile") {
        button.innerHTML = "Save profile";
        return;
    }

    // second click: check the fields and save
    let name = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name.length < 2) {
        alert("Please enter your full name.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    document.getElementById("profileName").textContent = name;
    button.innerHTML = "Edit profile";
    alert("Profile updated.");
}

document.getElementById("editBtn").addEventListener("click", editProfile);
