import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle';
import $ from 'jquery';

window.addEventListener('load', loading, false);
window.addEventListener('scroll', scrolling, false);

function loading() {
	const main = document.getElementById('main');
	const loader = document.getElementById('loader');

	main.classList.remove('d-none');
	loader.classList.add('d-none');

	// Carousel
	$('.carousel').carousel({
		interval: 3000,
	});
}

function scrolling() {
	const nav = document.getElementById('nav');
	const scrollTopSize =
		window.pageYOffset || document.documentElement.scrollTop;

	if (scrollTopSize !== 0) {
		nav.classList.add('navbar-active');
	} else {
		nav.classList.remove('navbar-active');
	}
}
