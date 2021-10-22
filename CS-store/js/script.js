'use-strict'

const foodsLink    = document.getElementById('header-foods-link');
const aboutLink    = document.getElementById('header-about-link');
const locationLink = document.getElementById('header-location-link');
const topLink      = document.getElementById('main-about-button')

const foodsSection    = document.getElementById('main-foods-section')
const aboutSection    = document.getElementById('main-about-section')
const locationSection = document.getElementById('main-location-section')
const html            = document.querySelector('html')

const jumpAnimation = (clickTarget,jumpTarget) => {
	clickTarget.addEventListener('click',(e) => {
		e.preventDefault();
		const jumpTargetTop = jumpTarget.getBoundingClientRect().top;
		
		window.scrollTo({
			top: jumpTargetTop,
			behavior: 'smooth',
		})
	})

}

jumpAnimation(foodsLink,foodsSection)
jumpAnimation(aboutLink,aboutSection)
jumpAnimation(locationLink,locationSection)
jumpAnimation(topLink,html)