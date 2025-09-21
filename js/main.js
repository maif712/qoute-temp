/*=============== SHARED ===============*/
// Mobile Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
}
if(navClose){
    navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
}

const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Header (for Home Page)
const scrollHeader = () => {
    const header = document.querySelector('.header');
    if (header) {
        this.scrollY >= 50 ? header.classList.add('scroll-header')
                           : header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);


/*=============== PAGE-SPECIFIC LOGIC ===============*/
document.addEventListener('DOMContentLoaded', () => {

    // Home Page Logic
    if (document.querySelector('.home')) {
        gsap.from('.nav__logo', {opacity: 0, y: -10, delay: 0.5, duration: 0.5});
        gsap.from('.nav__list .nav__item', {opacity: 0, y: -10, delay: 0.7, duration: 0.5, stagger: 0.2});
        gsap.from('.nav__toggle', {opacity: 0, y: -10, delay: 0.7, duration: 0.5});

        gsap.from('.quote__card', {opacity: 0, y: 50, delay: 1.2, duration: 1, ease: 'power3.out'});
        gsap.from('.quote__text', {opacity: 0, y: 20, delay: 1.5, duration: 0.8});
        gsap.from('.quote__author', {opacity: 0, y: 20, delay: 1.7, duration: 0.8});
        gsap.from('.button', {opacity: 0, scale: 0.8, delay: 2, duration: 0.8, ease: 'back.out(1.7)'});

        // Magnetic Button Effect
        const button = document.querySelector('.button');
        if (button) {
            button.addEventListener('mousemove', (e) => {
                const { offsetX, offsetY, target } = e;
                const { clientWidth, clientHeight } = target;

                const x = (offsetX / clientWidth) - 0.5;
                const y = (offsetY / clientHeight) - 0.5;

                gsap.to(button, {
                    x: x * 30,
                    y: y * 30,
                    scale: 1.1,
                    ease: 'power2.out',
                    duration: 0.4
                });
            });

            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    ease: 'elastic.out(1, 0.3)',
                    duration: 0.7
                });
            });
        }

        // 3D Tilt Card Effect
        const quoteCard = document.querySelector('.quote__card');
        if (quoteCard) {
            quoteCard.addEventListener('mousemove', (e) => {
                const { clientX, clientY, target } = e;
                const { left, top, width, height } = target.getBoundingClientRect();

                const x = (clientX - left) / width;
                const y = (clientY - top) / height;

                const rotateX = (y - 0.5) * -20; // -10 to 10 degrees
                const rotateY = (x - 0.5) * 20; // -10 to 10 degrees

                gsap.to(quoteCard, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    transformPerspective: 1000,
                    ease: 'power1.out',
                    duration: 0.5
                });
            });

            quoteCard.addEventListener('mouseleave', () => {
                gsap.to(quoteCard, {
                    rotationX: 0,
                    rotationY: 0,
                    ease: 'elastic.out(1, 0.3)',
                    duration: 1
                });
            });
        }
    }

    // Dashboard Logic
    if (document.querySelector('.dashboard')) {
        const deleteModal = document.querySelector('.delete-modal');
        const deleteButtons = document.querySelectorAll('.btn--delete');
        const cancelBtn = document.querySelector('.btn--cancel');
        const confirmDeleteBtn = document.querySelector('.btn--confirm-delete');

        const showModal = () => {
            gsap.to(deleteModal, { autoAlpha: 1 });
            gsap.from('.modal__content', { scale: 0.5, duration: 0.3, ease: 'back.out(1.7)'});
        }

        const hideModal = () => {
            gsap.to(deleteModal, { autoAlpha: 0 });
        }

        deleteButtons.forEach(button => {
            button.addEventListener('click', showModal);
        });

        if (cancelBtn) cancelBtn.addEventListener('click', hideModal);
        if (confirmDeleteBtn) confirmDeleteBtn.addEventListener('click', hideModal);

        gsap.from('.sidebar', { x: -200, duration: 1, ease: 'power3.out'});
        gsap.from('.dashboard__header', { opacity: 0, y: -20, duration: 0.8, delay: 0.5});
        gsap.from('.quote-card', { opacity: 0, y: 30, duration: 0.6, stagger: 0.2, delay: 0.8});
        gsap.from('.fab', { scale: 0, rotation: 360, duration: 0.8, delay: 1.2, ease: 'back.out(1.7)'});
    }

    // Form Page Logic
    if (document.querySelector('.quote-form')) {
        gsap.from('.form-title', { opacity: 0, y: -20, duration: 0.8, delay: 0.5 });
        gsap.from('.form-group', { opacity: 0, y: 20, duration: 0.6, stagger: 0.2, delay: 0.8 });
        gsap.from('.button', { opacity: 0, scale: 0.8, delay: 1.2, duration: 0.8, ease: 'back.out(1.7)' });
    }
});
