// aos initialization
AOS.init()
// !cursor
let mouseCursor = document.querySelector('.cursor')
let navLinks = document.querySelectorAll('.nav-links li')

window.addEventListener('mousemove', cursor)

function cursor(e) {
	mouseCursor.style.top = e.pageY + 'px'
	mouseCursor.style.left = e.pageX + 'px'
}

navLinks.forEach((link) => {
	link.addEventListener('mouseover', () => {
		mouseCursor.classList.add('link-grow')
	})
	link.addEventListener('mouseleave', () => {
		mouseCursor.classList.remove('link-grow')
	})
})

// ! navbar
const navSlide = () => {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.nav-links')
	const navLinks = document.querySelectorAll('.nav-links li')
	// Toggle nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active')
		//animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 5 + 0.3
				}s`
			}
		})
		//burger animation
		burger.classList.toggle('toggle')
	})
}

navSlide()
