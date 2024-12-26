import { $ } from '../utils/dom.js';

export function initContactForm() {
    const form = $('#contactForm');
    if (!form) return;

    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Log form data (replace with actual submission logic)
    console.log('Form submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
}