function showDropdown() {
    const dropdown = document.querySelector("#dropdown-menu")
    dropdown.style.display = 'flex'

}

function hideDropdown() {
    const dropdown = document.querySelector("#dropdown-menu");
    dropdown.style.display = 'none';
}


window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar-menu");
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

/* animate in */
window.addEventListener("load", function () {
    const homePage = document.getElementById("home-page");
    homePage.classList.add("animate-in");
});



