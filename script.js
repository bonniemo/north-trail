const menuBtn = document.querySelector(".menu-btn");
const burgerMenu = document.querySelector(".burger-menu");

menuBtn.addEventListener('click', () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === 'true';
    menuBtn.setAttribute("aria-expanded", !isOpen);
    burgerMenu.classList.toggle('show');
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && burgerMenu.classList.contains("show")) {
        burgerMenu.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.focus();
    }
})

