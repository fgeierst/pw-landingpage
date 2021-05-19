function openNav() {
	document.body.classList.add('js-nav--open');
	window.addEventListener('keyup', handleKeyUp);
	document.querySelector('.nav__link').focus();
	// todo: trap focus in modal
}

function closeNav() {
	document.body.classList.remove('js-nav--open');
	window.removeEventListener('keyup', handleKeyUp);
	document.querySelector('.nav__button-open').focus();
}

function handleKeyUp(e) {
	if (e.key === 'Escape') {
		closeNav();
	}
}

document.querySelector('.nav__button-open').addEventListener('click', openNav);
document.querySelector('.nav__button-close').addEventListener('click', closeNav);
