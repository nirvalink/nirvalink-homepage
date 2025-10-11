// Simple script to confirm the page has loaded and provide a subtle effect
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('IT Services Homepage successfully loaded.');

    // Optional: Add a smooth scroll effect for better UX on anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only apply smooth scroll if the link is not the CTA button, or if you want it on all links
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});