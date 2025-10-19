// This file is currently empty. 
// Form submission is handled by the 'action' attribute in index.html (Formspree).
// All other basic interactive elements (like navigation) are handled by CSS.

// --- 4. Section Fade-In on Scroll ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once visible
            observer.unobserve(entry.target); 
        }
    });
}, {
    // Options: Start loading slightly before it hits the viewport
    threshold: 0.1 
});

// Target all sections marked as hidden
const hiddenSections = document.querySelectorAll('.section.hidden');
hiddenSections.forEach(section => observer.observe(section));