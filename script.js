const openNavBtn = document.querySelector('.btn.nav-open');
const closeNavBtn = document.querySelector('.btn.nav-close');

const navs = document.querySelectorAll('.nav');

openNavBtn.addEventListener('click', () => {
    navs.forEach(nav => nav.classList.add('show'));
});

closeNavBtn.addEventListener('click', () => {
    navs.forEach(nav => nav.classList.remove('show'));
});

window.addEventListener('click', (e) => {
    if (e.target === document.body) {
        navs.forEach(nav => nav.classList.remove('show'));
    }
});