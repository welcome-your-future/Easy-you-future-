// Alert message on page load
window.onload = function() {
    alert("Welcome to your Educational Hub! Find all chapters, notes, and test papers.
&copy; 2024 Krishna Jadhav all rights reserved
");
}

// Toggle hamburger menu for mobile navigation
function toggleMenu() {
    var menu = document.getElementById("nav-links");
    menu.classList.toggle("active");
}

// Confirm download action
function confirmDownload(chapter) {
    var confirmation = confirm("Do you want to download notes for " + chapter + "?");
    if (confirmation) {
        alert("You have successfully initiated the download for " + chapter);
    } else {
        alert("Download canceled for " + chapter);
    }
}