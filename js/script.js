let burgerIcon = document.querySelector(".burger-icon");
let burgerIconSpan = document.querySelectorAll(".burger-icon span");
let navBar = document.querySelector("nav");
let uListLi = document.querySelectorAll("ul li a");

burgerIcon.addEventListener("click", () => {
    navBar.classList.toggle("open");
    burgerIconSpan.forEach((span) => {
        span.classList.toggle("close");
    });
});

uListLi.forEach((a) => {
    a.addEventListener("click", () => {
        navBar.classList.remove("open");
        burgerIconSpan.forEach((span) => {
            span.classList.remove("close");
        });
    });
});
