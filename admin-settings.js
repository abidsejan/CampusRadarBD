// Platform settings: count the switches that are turned on

function saveSettings(event) {
    event.preventDefault();

    let names = ["registration", "verification", "expire", "reminders", "review", "online"];
    let count = 0;

    names.forEach(function(name) {
        if (document.getElementById(name).checked) {
            count++;
        }
    });

    alert("Settings saved. " + count + " of " + names.length + " options are on.");
}

document.getElementById("settingsForm").addEventListener("submit", saveSettings);
