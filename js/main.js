async function loadComponent(id, url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

async function init() {
    // Load all components concurrently
    await Promise.all([
        loadComponent('intro-placeholder', 'components/intro.html'),
        loadComponent('navbar-placeholder', 'components/navbar.html'),
        loadComponent('hero-placeholder', 'components/hero.html'),
        loadComponent('experience-placeholder', 'components/experience.html'),
        loadComponent('projects-placeholder', 'components/projects.html'),
        loadComponent('contact-placeholder', 'components/contact.html'),
        loadComponent('footer-placeholder', 'components/footer.html')
    ]);

    // Refresh ScrollSpy for Bootstrap after content is loaded dynamically
    if (typeof bootstrap !== 'undefined') {
        const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]');
        dataSpyList.forEach(dataSpyEl => {
            const scrollSpy = bootstrap.ScrollSpy.getInstance(dataSpyEl);
            if (scrollSpy) {
                scrollSpy.refresh();
            } else {
                new bootstrap.ScrollSpy(dataSpyEl);
            }
        });
    }

    // Handle intro screen fade out
    const intro = document.getElementById('intro-screen');
    if (intro) {
        setTimeout(() => {
            intro.classList.add('fade-out');
        }, 2000); // Duration 2 seconds
    }
}

document.addEventListener('DOMContentLoaded', init);
