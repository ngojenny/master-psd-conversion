$(function() {
	//SLIDE OUT NAV
	$('div.hamburger').on('click', function(){
		$('ul.main').toggleClass('slide-in');
	});

	//Close nav when links are clicked
	$('ul.main a').on('click', function(){
		$('ul.main').toggleClass('slide-in');
	});

	//Close nav when exit symbol is clicked
	$('div.exit').on('click', function(){
		$('ul.main').toggleClass('slide-in');
	});

	// PORTFOLIO SECTION CALL TO ZOOM ACTION
	$('.photo').on('click', function() {
		$(this).find('img').addClass('bigger');
	});
	$('body').on('click', '.bigger', function(){
		$(this).removeClass('bigger');
	});

	// //PORTFOLIO SECTION FILTER
	// $('ul.filters').on('click', function (){
	// 	$('li.hide').toggleClass('li.hide.show');
	// });

	//SMOOTHSCROLL PLUGIN
	$('nav a, a.scroll-down').smoothScroll({
		speed: 400
	});
}); 