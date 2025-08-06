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
const sections = document.querySelectorAll('section');

const revealSection = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

sections.forEach(section => {
    sectionObserver.observe(section);
});
