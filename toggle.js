const toggle = document.getElementById("menu");
const nav = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

if (toggle && nav && overlay) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });
} else {
    console.error("One or more elements not found. Check your IDs.");
}