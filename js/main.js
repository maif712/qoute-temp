/*=============== LOADER ===============*/
window.onload = function() {
    const loader = document.querySelector('.loader');
    gsap.to(loader, {
        autoAlpha: 0,
        duration: 1,
        delay: 0.5,
        onComplete: () => {
            loader.style.display = 'none';
        }
    });
};

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

        const button = document.querySelector('.button');
        if (button) {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, { scale: 1.1, boxShadow: '0 10px 20px hsla(228, 81%, 49%, 0.6)', duration: 0.3 });
            });
            button.addEventListener('mouseleave', () => {
                gsap.to(button, { scale: 1, boxShadow: '0 10px 20px hsla(228, 81%, 49%, 0.4)', duration: 0.3 });
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
