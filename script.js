// Animation for the "View My Work" button
document.querySelector('.btn').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
});

document.querySelector('.btn').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

// Contact form submission (simple alert)
document.querySelector('#contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
});

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
