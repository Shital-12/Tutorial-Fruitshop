// Add your custom JavaScript here
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            card.classList.add("shadow-lg");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("shadow-lg");
        });
    });

    // Smooth scroll effect for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});