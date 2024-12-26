import { initSmoothScroll } from './utils/scroll.js';
import { initNavigation } from './utils/navigation.js';
import { initContactForm } from './components/contact.js';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initNavigation();
    initContactForm();
});
const toggleButton = document.querySelector('.btn-toggle-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
});