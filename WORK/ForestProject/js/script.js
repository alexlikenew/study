const navBtn = document.querySelector('.burger__btn')
const mobileNav = document.querySelector('.nav__mobile-nav')
const sections = document.querySelectorAll('section[id]')
console.log(sections)

const toggleMobileNav = () => {
	mobileNav.classList.toggle('non-active-mobile-menu')
	mobileNav.classList.toggle('active-mobile-menu')
	navBtn.classList.toggle('burger-btn-dark-mode')
}

function navHighlighter() {
	let scrollY = window.pageYOffset
	sections.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav a[href*=' + sectionId + ']').classList.add('active')
		} else {
			document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove('active')
		}
	})
}
window.addEventListener('scroll', navHighlighter)
navBtn.addEventListener('click', toggleMobileNav)
