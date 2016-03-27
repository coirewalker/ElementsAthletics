 // header color change on scroll
$(document).ready(function(){
	
	$.slidebars();

	$(window).scroll(function () {
		if ($(window).outerWidth() > 768) {
			var scroll_top = $(this).scrollTop();
			if (scroll_top >= 1) {
				$('header').addClass('hdr-scrolled');
				$('.desktop-nav').addClass('nav-scrolled');
			} else {
				$('header').removeClass('hdr-scrolled');
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
	// $(window).resize(function() {
	// 	if ($(window).innerWidth() < 769) {
	// 		$('.desktop-nav').addClass('hidden');
	// 	} else {
	// 		$('.desktop-nav').removeClass('hidden');
	// 	}
	// });

	// can't get burger to hide yet...
	if ($('.sb-slidebar').hasClass('sb-active')) {
		$('.burger').addClass('hidden');
	} else {
		$('.burger').removeClass('hidden');
	}
	
});
