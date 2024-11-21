// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Banner Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initialize slider
showSlide(0);
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Form Validation
const contactForm = document.getElementById('contactForm');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const destinationError = document.getElementById('destinationError');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Destination validation
    const destination = document.getElementById('destination').value;
    if (!destination) {
        destinationError.textContent = 'Please select a destination';
        isValid = false;
    } else {
        destinationError.textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});