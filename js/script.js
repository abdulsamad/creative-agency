'use strict';
window.addEventListener('load', loading, false);
window.addEventListener('scroll', scrolling, false);

function loading() {
	var main = document.getElementById('main');
	var loader = document.getElementById('loader');
	main.style.display = 'block';
	loader.style.display = 'none';
}

function scrolling() {
	var scrollTopSize = window.pageYOffset || document.documentElement.scrollTop;
	var nav = document.getElementById('nav');
	if (scrollTopSize !== 0) {
		nav.classList.add('navbar-active');
	} else {
		nav.classList.remove('navbar-active');
	}
}
