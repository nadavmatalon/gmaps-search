
$(document).ready(function() {

	var map = new GMaps({
	  	div: '#map',
	  	zoom: 15,
	  	mapTypeId: google.maps.MapTypeId.ROADMAP,
	  	lat: 0,
	  	lng: 0
	});

	$('#search').on('click', function() {
		$('#image-container').fadeOut(200).remove();
			$('#map-container').css('transition', 'opacity, 0.5s');
			$('#map-container').css('opacity', '0');
		var addressInfo = '';
		GMaps.geocode({
		  	address: $('#address').val(),
		  	callback: function(results, status) {
		    	if (status == 'OK') {
		    		$('#map-container').css('transition', 'opacity, 0.5s');
		    		$('#map-container').css('opacity', '1');
		      		var latlng = results[0].geometry.location;
		      		addressInfo = results[0].formatted_address
		      		map.setCenter(latlng.lat(), latlng.lng());
		      		map.addMarker({
		        		lat: latlng.lat(),
		        		lng: latlng.lng()
		      		});
		    	} else if ($('#address').val() == '') {
		    		addressInfo = 'Please enter address'
		    	} else {
		    		addressInfo = 'Sorry, address not found'
		    	};
		    	console.log(addressInfo);
		    	$('#current-address').fadeOut(200, function() {
		    		$(this).text(addressInfo).fadeIn(200);
		    	});
		    	$('#address').val('');
		  	}
		});
	});

	$("#address").bind('keydown', function(event) {
		if(event.keyCode == 13) {
			$('#search').trigger('click');
		};
	});

	$('#container').css('transition', 'opacity, 0.5s');
	$('#container').css('opacity', '1');
});

