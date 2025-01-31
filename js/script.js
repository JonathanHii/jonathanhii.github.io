function showDropdown() {
    const dropdown = document.querySelector("#dropdown-menu")
    dropdown.style.display = 'flex'
}

function hideDropdown() {
    const dropdown = document.querySelector("#dropdown-menu")
    dropdown.style.display = 'none'
}



document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi! I am Jonathan!";
    let index = 0;
    const speed = 100; // typing speed in milliseconds

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-effect").innerHTML = text.substring(0, index + 1);
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();
});