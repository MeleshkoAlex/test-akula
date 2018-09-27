document.addEventListener("DOMContentLoaded", handler);

function handler() {
	let humbBUt = document.querySelector('.humb'),
	closeHumb = document.querySelector('.close'),
	humbMenu = document.querySelector('.wrap-menu-humb'),
	humbMenuWrap = document.querySelector('.humb-menu'),
	widthScreen = window.screen.availWidth;


	humbBUt.addEventListener('click',humbOpen);
	closeHumb.addEventListener('click',humbClose);
	window.addEventListener('resize',width);

	function width (){
		widthScreen = window.screen.availWidth;
		console.log(widthScreen);
	};
	function humbOpen(){
		if(widthScreen < 1300){
			humbMenu.classList.add('active');
			setTimeout(function(){
				humbMenu.style.overflow = 'auto';
			}, 500);
		}else{
			humbMenuWrap.classList.add('active');
			setTimeout(function(){
				humbMenuWrap.style.overflow = 'auto';
			}, 500);
		}

	};
	function humbClose(){
		if(widthScreen < 1300){
			humbMenu.classList.remove('active');
			humbMenu.style.overflow = 'hidden';
		}else{
			humbMenuWrap.classList.remove('active');
			setTimeout(function(){
				humbMenuWrap.style.overflow = 'hidden';
			}, 500);
		}

	};
	

	let ulMenu2 = document.querySelector('.navigation');
	ulMenu2.addEventListener('click',openMenu);
	function openMenu(event){
		if(widthScreen < 1300){
			let target = event && event.target || window.event.srcElement;
			let clas = target.classList.contains('prevent');
			let ulMenu = target.parentElement.querySelector('.drop-menu');
			ulMenu.classList.toggle('show-menu');
			if(clas){
				event.preventDefault();
			}
		}
	}

};
$(document).ready(function(){
	var slickCarousel = $('#slider');
	slickCarousel.slick({
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		autoplay: true,
		vertical: true,
		autoplaySpeed: 111000,
		cssEase: 'linear',
		vertical: true,
		responsive: [
		{
			breakpoint: 2900,
			settings: {
				arrows:true
			}
		},
		{
			breakpoint: 1292,
			settings: {
				arrows:false
			}
		}
		]
	});
	slickCarousel.mousewheel(function(e) {
		e.preventDefault();
		if (e.deltaY < 0) {
			$(this).slick('slickNext'); 
		}
		else {
			$(this).slick('slickPrev');
		}
	});
	$('#slider-prod').slick({
		slidesToShow: 3,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 41000,
		cssEase: 'linear',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}

		]
	});

});


