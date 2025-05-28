// Sélection des éléments DOM
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Gestion du menu hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermeture du menu mobile lors du clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Gestion du header sticky au scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Gestion du slider de témoignages
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    testimonialCards[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
});

nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
});

// Auto-rotation des témoignages
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Gestion du formulaire de contact
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    try {
        // Simulation d'envoi de formulaire (à remplacer par votre API)
        console.log('Données du formulaire:', formValues);
        
        // Réinitialisation du formulaire
        contactForm.reset();
        
        // Affichage d'un message de succès
        alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
        alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
});

// Gestion du défilement fluide pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gestion de l'activation des liens de navigation au scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// Gestion de la navigation active
const currentPage = window.location.pathname;

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPage.includes(linkPath) && linkPath !== '#') {
        link.classList.add('active');
    }
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Vérification de la disponibilité des éléments avant initialisation
    if (testimonialCards.length > 0) {
        showTestimonial(0);
    }
});
