'use strict';

jQuery(document).ready(function($) {
	function Midway() {
		var obj = $('[data-align="vertical"]');
		$.each(obj, function() {
			var $height = $(this).height(),
			$parentHeight = $(this).parent().height(),
			margins = ($parentHeight - $height)/2;
			$(this).css('top',margins);
		});
	}

	new Midway();
	$(window).resize(Midway);

	function AnchorCheck() {
		var anchor = window.location.hash.substring(1);
		if(anchor === 'contact') { $('.about-me').hide(); }
		else { $('.contact').hide(); }
	}

	new AnchorCheck();
	$('a.contact-link').click(function() {
		$('.about-me').hide();
		$('.contact').show();
	});

	function isValidEmailAddress(emailAddress) {
	    var pattern = new RegExp(/@/i);
	    return pattern.test(emailAddress);
	}

    $('#contactForm').unbind('submit').submit(function(event) {
        /* Act on the event */
        event.preventDefault();
        if(isValidEmailAddress($('input[name="email"]').val())) {
            var formInput = $(this).serialize();
            console.log(formInput);
            // Do some error checking
            $.post($(this).attr('action'),formInput,null)
            .done(function() {
                console.log('Successfully sent mail.');
                $('.error-msg').html('<span>Successfully sent mail.</span>');
                $('.error-msg').addClass('success');
                $('.error-msg').show();
            })
            .fail(function(data) {
                console.log('<span>Error in sending mail.</span>');
                $('.error-msg').html(data);
                $('.error-msg').show();
            });
        } else {
            console.log('Error in sending mail');
            $('.error-msg').html('<span>Email address is not valid.</span>');
            $('.error-msg').show();
        }
    });
	
});