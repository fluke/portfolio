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

    var obt1 = new Vivus('obt', {
        type: 'oneByOne',
        duration: 190
    });
    obt1.stop().reset().play(1)

	// $('.about').mousewheel(function(event) {
	// 	$('.projects').scrollTop(($('.projects').scrollTop()) - event.deltaY*40);
	// });

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
                $('.error-msg').addClass('success');
                $('.error-msg').html('<span>Successfully sent mail.</span>');
            })
            .fail(function(data) {
                console.log('<span>Error in sending mail.</span>');
                $('.error-msg').removeClass('success');
                $('.error-msg').html(data);
            });
        } else {
            console.log('Error in sending mail');
            $('.error-msg').removeClass('success');
            $('.error-msg').html('<span>Email address is not valid.</span>');
        }
    });

});
