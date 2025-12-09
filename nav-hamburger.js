document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        // Toggle class 'active' pada hamburger dan menu
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Fitur tambahan: Tutup menu saat salah satu link diklik
    document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
});