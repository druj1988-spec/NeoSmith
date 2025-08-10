document.addEventListener('DOMContentLoaded', () => {
    // --- Page Loader ---
    const loader = document.querySelector('.loader');
    const mainContent = document.querySelector('main');

    setTimeout(() => {
        loader.classList.add('hidden');
        mainContent.classList.add('visible');
    }, 500);

    // --- Theme Switcher ---
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            html.setAttribute('data-theme', 'light');
            themeToggle.textContent = 'Dark Mode';
        } else {
            html.setAttribute('data-theme', 'dark');
            themeToggle.textContent = 'Light Mode';
        }
    });

    // --- Scroll Animations ---
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    };

    const scrollObserver = new IntersectionObserver(revealOnScroll, {
        root: null,
        threshold: 0.1,
    });

    revealElements.forEach(element => {
        scrollObserver.observe(element);
    });

    // --- Burger Menu ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
});
