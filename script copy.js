document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. EXISTING: Mouse-Following Spotlight Effect (Global Background) ---
    const body = document.body;
    window.addEventListener('mousemove', (e) => {
        body.style.setProperty('--x', e.clientX + 'px');
        body.style.setProperty('--y', e.clientY + 'px');
    });

    // --- 2. NEW UPGRADE: 3D Tilt & Smart Glow Effect ---
    // මේ කොටසින් තමයි අර 3D විදියට කාඩ්ස් ඇලවෙන්න හදන්නේ
    const tiltElements = document.querySelectorAll('.skill-card, .project-card, .cert-card, .glass-header');

    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // CSS සඳහා මවුස් එක තියෙන තැන යවනවා (Border Glow එකට)
            element.style.setProperty('--mouse-x', `${x}px`);
            element.style.setProperty('--mouse-y', `${y}px`);

            // 3D Rotation ගණනය කිරීම
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // උපරිම අංශක 10ක් ඇලවෙන විදියට (Rotate)
            const rotateX = ((y - centerY) / centerY) * -10; 
            const rotateY = ((x - centerX) / centerX) * 10;

            // කාඩ් එකට 3D Transform එක දෙනවා
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        // මවුස් එක අයින් කළාම ආපහු තිබ්බ තැනට එන්න
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            element.style.setProperty('--mouse-x', `50%`); // Glow එක මැදට
            element.style.setProperty('--mouse-y', `50%`);
        });
    });

    // --- 3. EXISTING: Smooth Scrolling for Nav Links ---
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

    // --- 4. EXISTING: Fade-in Animation on Scroll ---
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

    // --- 5. EXISTING: Language Toggle ---
    const langToggleButton = document.getElementById('lang-toggle');
    let currentLang = 'en';
    if (langToggleButton) {
        langToggleButton.addEventListener('click', () => {
            currentLang = (currentLang === 'en') ? 'ko' : 'en';
            langToggleButton.textContent = (currentLang === 'en') ? '한국어' : 'EN';
            
            // පොඩි ඇනිමේෂන් එකක් දැම්මා button එක click කරද්දි
            langToggleButton.style.transform = 'scale(0.95)';
            setTimeout(() => langToggleButton.style.transform = 'scale(1)', 100);

            document.querySelectorAll('[data-en]').forEach(el => {
                const key = currentLang;
                if (el.dataset[key]) {
                    // Smooth transition for text change
                    el.style.opacity = '0';
                    setTimeout(() => {
                        el.textContent = el.dataset[key];
                        el.style.opacity = '1';
                    }, 200);
                }
            });
        });
    }

    // --- 6. EXISTING: Accordion for Career Journey ---
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

    // --- 7. EXISTING: Project Modal Functionality ---
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
            
            // Ensure 3D tilt doesn't interfere with modal fixed position
            modal.style.transform = 'none'; 
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