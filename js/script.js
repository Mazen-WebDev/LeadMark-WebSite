let burgerIcon = document.querySelector(".burger-icon");
let burgerIconSpan = document.querySelectorAll(".burger-icon span");
let navBar = document.querySelector("nav");

burgerIcon.addEventListener("click", () => {
    navBar.classList.toggle("open");
    burgerIconSpan.forEach((span) => {
        span.classList.toggle("close");
    });
});
