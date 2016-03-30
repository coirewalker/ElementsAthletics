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

	// can't get burger to hide yet...
	// if ($('.sb-slidebar').hasClass('sb-active')) {
	// 	$('.burger').addClass('hidden');
	// } else {
	// 	$('.burger').removeClass('hidden');
	// }




	// GOOGLE MAP 
	// When the window has finished loading create our google map below
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
	    // Basic options for a simple Google Map
	    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	    var mapOptions = {
	        // How zoomed in you want the map to start at (always required)
	        zoom: 15,

	        // The latitude and longitude to center the map (always required)
	        center: new google.maps.LatLng(40.678430, -73.954907), // New York

	        // Disables the default Google Maps UI components
	        disableDefaultUI: true,
	        scrollwheel: false,
	        draggable: true,

	    //     [{
	    //         "featureType": "water",
	    //         "elementType": "geometry",
	    //         "stylers": [{
	    //             "color": "#000000"
	    //         }, {
	    //             "lightness": 17
	    //         }]
	    //     }, {
	    //         "featureType": "landscape",
	    //         "elementType": "geometry",
	    //         "stylers": [{
	    //             "color": "#000000"
	    //         }, {
	    //             "lightness": 20
	    //         }]
	    //     }, {
	    //         "featureType": "road.highway",
	    //         "elementType": "geometry.fill",
	    //         "stylers": [{
	    //             "color": "#000000"
	    //         }, {
	    //             "lightness": 17
	    //         }]
	    //     }, {
	    //         "featureType": "road.highway",
	    //         "elementType": "geometry.stroke",
	    //         "stylers": [{
	    //             "color": "#000000"
	    //         }, {
	    //             "lightness": 29
	    //         }, {
	    //             "weight": 0.2
	    //         }]
	    //     }, {
	    //         "featureType": "road.arterial",
	    //         "elementType": "geometry",
	    //         "stylers": [{
	    //             "color": "#000000"
	    //         }, {
	    //             "lightness": 18
	    //         }]
	    //     }, {
	    //         "featureType": "road.local",
	    //         "elementType": "geometry",
	    //         "stylers": [{
	    //             "color": "#000000"
	    //         }, {
	    //             "lightness": 16
	    //         }]
	    //     }, {
	    //         "featureType": "poi",
	    //         "elementType": "geometry",
	    //         "stylers": [{
	    //             "color": "#000000"
	    //         }, {
	    //             "lightness": 21
	    //         }]
	    //     }, {
	    //         "elementType": "labels.text.stroke",
	    //         "stylers": [{
	    //             "visibility": "on"
	    //         }, {
	    //             "color": "#000000"
	    //         }, {
	    //             "lightness": 16
	    //         }]
	    //     }, {
	    //         "elementType": "labels.text.fill",
	    //         "stylers": [{
	    //             "saturation": 36
	    //         }, {
	    //             "color": "#000000"
	    //         }, {
	    //             "lightness": 40
	    //         }]
	    //     }, {
	    //         "elementType": "labels.icon",
	    //         "stylers": [{
	    //             "visibility": "off"
	    //         }]
	    //     }, {
	    //         "featureType": "transit",
	    //         "elementType": "geometry",
	    //         "stylers": [{
	    //             "color": "#000000"
	    //         }, {
	    //             "lightness": 19
	    //         }]
	    //     }, {
	    //         "featureType": "administrative",
	    //         "elementType": "geometry.fill",
	    //         "stylers": [{
	    //             "color": "#000000"
	    //         }, {
	    //             "lightness": 20
	    //         }]
	    //     }, {
	    //         "featureType": "administrative",
	    //         "elementType": "geometry.stroke",
	    //         "stylers": [{
	    //             "color": "#000000"
	    //         }, {
	    //             "lightness": 17
	    //         }, {
	    //             "weight": 1.2
	    //         }]
	    //     }]
	    // };


	    // How you would like to style the map. 
	    // This is where you would paste any style found on Snazzy Maps.
	    styles: 
	    [{"stylers":[{"saturation":-100},{"gamma":0.8},{"lightness":4},{"visibility":"on"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"on"},{"color":"#5dff00"},{"gamma":4.97},{"lightness":-5},{"saturation":100}]}]
		};


	    // Get the HTML DOM element that will contain your map 
	    // We are using a div with id="map" seen below in the <body>
	    var mapElement = document.getElementById('map');

	    // Create the Google Map using out element and options defined above
	    var map = new google.maps.Map(mapElement, mapOptions);

	    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
	    var image = 'images/gmaps-pin.png';
	    var myLatLng = new google.maps.LatLng(40.678430, -73.954907);
	    var beachMarker = new google.maps.Marker({
	        position: myLatLng,
	        map: map,
	        icon: image
	    });
	 //    var currCenter = map.getCenter();
	 //    google.maps.event.trigger(map, 'resize');
		// map.setCenter(currCenter);
	}
	
});
