$(document).ready(function(){
	
	$.slidebars();

	$(window).scroll(function () {
		if ($(window).outerWidth() > 768) {
			var scroll_top = $(this).scrollTop();
			if (scroll_top >= 1) {
				$('.desktop-nav').removeClass('hidden');
				$('header').addClass('hdr-scrolled');
				$('.desktop-nav').addClass('nav-scrolled');
			} else {
				$('header').removeClass('hdr-scrolled');
				$('.desktop-nav').addClass('hidden');
				$('.desktop-nav').removeClass('nav-scrolled');
			}
		}
	});	
  	
  	// reset header on window resize
	$(window).resize(function() {
		if ($(window).outerWidth() < 769) {
			$('header').removeClass('hdr-scrolled');
			$('.desktop-nav').removeClass('nav-scrolled');
		}
	});

	// pause arrow animation on scroll
	$(window).scroll(function() {
		var scroll_top = $(this).scrollTop();
		if (scroll_top >= 1) {
			$('.btn-circle i').removeClass('animated');
		} else {
			$('.btn-circle i').addClass('animated');
		}
	});

	//Change burger color on scroll down 
    var $win = $(window);
    var winH = $win.height();

	$win.on('scroll', function() {
		if ($(this).scrollTop() > winH) {
			$('.burger').removeClass('burger-light');
			$('.burger').addClass('burger-dark');
		} else {
			$('.burger').removeClass('burger-dark');
			$('.burger').addClass('burger-light');
		}
	}).on('resize', function() {
		winH = $(this).height();
	});
	
});
