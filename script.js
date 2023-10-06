const menuButton = document.querySelector(".menu");
const closeButton = document.querySelector(".close");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", () => {
    nav.classList.add("show-nav");
    overlay.style.display = "block";
});

closeButton.addEventListener("click", () => {
    nav.classList.remove("show-nav");
    overlay.style.display = "none";
});
