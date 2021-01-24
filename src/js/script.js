window.addEventListener('load', loading, false);
window.addEventListener('scroll', scrolling, false);

function loading() {
	const main = document.getElementById('main');
	const loader = document.getElementById('loader');

	main.classList.remove('d-none');
	loader.classList.add('d-none');
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
