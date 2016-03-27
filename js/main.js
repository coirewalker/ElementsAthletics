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

	if $('.sb-slidebar').hasClass('sb-active') {
		$('.burger').hide();
	} else {
		$('.burger').show();
	}
	
});
