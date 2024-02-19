const navBtn = document.querySelector('.burger__btn')
const mobileNav = document.querySelector('.nav__mobile-nav')
console.log(mobileNav);

const toggleMobileNav = () => {
    mobileNav.classList.toggle('non-active-mobile-menu')
    mobileNav.classList.toggle('active-mobile-menu')
    navBtn.classList.toggle('burger-btn-dark-mode')
}
navBtn.addEventListener('click' , toggleMobileNav)