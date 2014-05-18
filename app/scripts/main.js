'use strict';

jQuery(document).ready(function($) {
	function Midway() {
		var obj = $('[data-align="vertical"]'),
		$height = obj.height(),
		$parentHeight = obj.parent().height(),
		margins = ($parentHeight - $height)/2;
		obj.parent().css('paddingTop',margins);
		obj.parent().css('paddingBottom',margins);
	}

	new Midway();
});