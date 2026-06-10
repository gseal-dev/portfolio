// Basic Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('section .container');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Carousel Navigation & Dot Synchronization Logic
    const wrapper = document.querySelector('.carousel-wrapper');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (wrapper) {
        if (dots.length > 0) {
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    wrapper.scrollTo({
                        left: wrapper.clientWidth * index,
                        behavior: 'smooth'
                    });
                    setActiveDot(index);
                });
            });

            wrapper.addEventListener('scroll', () => {
                const index = Math.round(wrapper.scrollLeft / wrapper.clientWidth);
                setActiveDot(index);
            });

            function setActiveDot(index) {
                dots.forEach((dot, idx) => {
                    if (idx === index) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                wrapper.scrollBy({
                    left: -wrapper.clientWidth,
                    behavior: 'smooth'
                });
            });

            nextBtn.addEventListener('click', () => {
                wrapper.scrollBy({
                    left: wrapper.clientWidth,
                    behavior: 'smooth'
                });
            });
        }
    }

    console.log("Portfolio script loaded successfully.");
});
