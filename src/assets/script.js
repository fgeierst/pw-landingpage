const hamburgerButton = document.querySelector('.nav__hamburger');

function openNav() {
	document.body.classList.add('js-nav--open');
	console.log(this);
	hamburgerButton.setAttribute('aria-label', 'close menu');
	window.addEventListener('keyup', handleKeyUp);
	document.querySelector('.nav__link').focus(); // set focus to first menu item
	// TODO: trap focus in modal
}

function closeNav() {
	document.body.classList.remove('js-nav--open');
	window.removeEventListener('keyup', handleKeyUp);
	hamburgerButton.setAttribute('aria-label', 'open menu');
	hamburgerButton.focus(); // set focus to hamburger button
}

function handleKeyUp(e) {
	if (e.key === 'Escape') {
		closeNav();
	}
}

hamburgerButton.addEventListener('click', () => {
	document.body.classList.contains('js-nav--open') ? closeNav() : openNav();
});
