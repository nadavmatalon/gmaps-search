
$(document).ready(function() {

	var map = new GMaps({
	  	div: '#map',
	  	zoom: 12,
	  	mapTypeId: google.maps.MapTypeId.ROADMAP,
	  	lat: 0,
	  	lng: 0
	});

	var geocoder = new google.maps.Geocoder();

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

	$("#address").autocomplete({
	    source: function(request, response) {
	      	geocoder.geocode( {'address': request.term }, function(results, status) {
	        	response($.map(results, function(item) {
	          		return {
	            		label: item.formatted_address, // appears in dropdown box
	            		value: item.formatted_address, // inserted into input element when selected
	            		geocode: item                  // all geocode data: used in select callback event
	          		}
	        	}));
	      	});
	    },
    	select: function(event,ui) {
      		update_ui(ui.item.value, ui.item.geocode.geometry.location);
    	}
	});

	function update_ui(address, latLng) {
		$('#address').autocomplete("close").val(address);
	};

	$('#container').css('transition', 'opacity, 0.5s');
	$('#container').css('opacity', '1');
});

