
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navbar nav");

// Open and close the mobile menu
menuButton.addEventListener("click", function () {
    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);
});

// Close the menu after clicking a navigation link
const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    });
});
