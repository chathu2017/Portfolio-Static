document.addEventListener('DOMContentLoaded', function() {
    
    // Mouse-Following Spotlight Effect
    const body = document.body;
    window.addEventListener('mousemove', (e) => {
        body.style.setProperty('--x', e.clientX + 'px');
        body.style.setProperty('--y', e.clientY + 'px');
    });

    // Smooth Scrolling for Nav Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Fade-in Animation on Scroll
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => { observer.observe(section); });

    // Language Toggle
    const langToggleButton = document.getElementById('lang-toggle');
    let currentLang = 'en';
    langToggleButton.addEventListener('click', () => {
        currentLang = (currentLang === 'en') ? 'ko' : 'en';
        langToggleButton.textContent = (currentLang === 'en') ? 'KO' : 'EN';
        document.querySelectorAll('[data-en]').forEach(el => {
            const key = currentLang;
            if (el.dataset[key]) {
                el.textContent = el.dataset[key];
            }
        });
    });

    // Accordion for Career Journey
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const trigger = item.querySelector('.timeline-trigger');
        trigger.addEventListener('click', () => {
            const currentlyOpen = item.classList.contains('is-open');
            // This loop makes it so only one item can be open at a time
            timelineItems.forEach(i => { i.classList.remove('is-open'); });
            if (!currentlyOpen) {
                item.classList.add('is-open');
            }
        });
    });

    // Project Modal Functionality
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    if (modal) {
        const modalImage = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const closeModalBtn = document.getElementById('modal-close-btn');
        const prevBtn = document.getElementById('modal-prev-btn');
        const nextBtn = document.getElementById('modal-next-btn');
        let currentIndex = 0;

        function showProject(index) {
            const card = document.querySelector(`.project-card[data-index='${index}']`);
            if (!card) return;
            modalImage.src = card.querySelector('.project-card-image').src;
            modalTitle.innerText = card.querySelector('.project-card-title').innerText;
            modalDescription.innerHTML = card.querySelector('.project-full-content').innerHTML;
            currentIndex = index;
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === projectCards.length - 1;
        }

        function openModal(index) {
            showProject(index);
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                openModal(parseInt(card.dataset.index, 10));
            });
        });

        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
        nextBtn.addEventListener('click', () => { if (currentIndex < projectCards.length - 1) showProject(currentIndex + 1); });
        prevBtn.addEventListener('click', () => { if (currentIndex > 0) showProject(currentIndex - 1); });
        document.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('hidden')) {
                if (e.key === 'Escape') closeModal();
                if (e.key === 'ArrowRight') nextBtn.click();
                if (e.key === 'ArrowLeft') prevBtn.click();
            }
        });
    }
});