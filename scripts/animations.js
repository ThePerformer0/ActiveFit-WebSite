// Gestion des animations au défilement
document.addEventListener('DOMContentLoaded', () => {
    // Configuration de l'Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer les éléments avec des classes d'animation
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Animation du header au défilement
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }

        lastScroll = currentScroll;
    });

    // Animation des décorations circulaires
    const circles = document.querySelectorAll('.decoration-circle');
    circles.forEach(circle => {
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            circle.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        });
    });

    // Animation des cartes au hover
    const cards = document.querySelectorAll('.service-card, .pricing-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!('ontouchstart' in window)) {
                card.style.transform = 'translateY(-10px)';
            }
        });

        card.addEventListener('mouseleave', () => {
            if (!('ontouchstart' in window)) {
                card.style.transform = 'translateY(0)';
            }
        });
    });

    // Animation des boutons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            if (!('ontouchstart' in window)) {
                button.style.transform = 'translateY(-2px)';
            }
        });

        button.addEventListener('mouseleave', () => {
            if (!('ontouchstart' in window)) {
                button.style.transform = 'translateY(0)';
            }
        });
    });

    // Animation des liens sociaux
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (!('ontouchstart' in window)) {
                link.style.transform = 'translateY(-3px)';
            }
        });

        link.addEventListener('mouseleave', () => {
            if (!('ontouchstart' in window)) {
                link.style.transform = 'translateY(0)';
            }
        });
    });

    // Animation des statistiques dans la section hero
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const interval = duration / 50;

        const updateStat = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                setTimeout(updateStat, interval);
            } else {
                stat.textContent = target;
            }
        };

        observer.observe(stat);
        stat.addEventListener('visible', updateStat);
    });
});
