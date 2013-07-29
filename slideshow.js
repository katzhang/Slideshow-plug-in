(function($) {

	var currentPosition = 0,
		slideWidth = 400,
		slides = $('.slides'),
		slidesNumber = slides.length,
		autoSliding = false;

	$.fn.slide = function(options) {
		var opts = $.extend( {}, $.fn.slide.defaults, options);

		//set slides-wrapper width equal to the additions of all slides' widths
		$('#slides-wrapper').css('width', slideWidth*slidesNumber);

		this.click(function() {
			var buttonId = this.getAttribute('id');

			if((currentPosition == slidesNumber-1) && (this.getAttribute('id') == 'next-button')) {
				if(!opts.autoBack) {
					return;
				} else {
					navigation(buttonId, 0, false, opts);		
				}
			} else if((currentPosition == 0) && (this.getAttribute('id') == 'prev-button')) {
				return;
			} else {
				navigation(buttonId, currentPosition, true, opts);
			}
		})

		controlButtons(0, opts.autoBack);
	}

	function controlButtons(position, options) {
		position == 0 ? $('#prev-button').addClass('disabled') : $('#prev-button').removeClass('disabled');
		if(options.autoBack) {
			return;	
		} else {
			position == slidesNumber-1 ? $('#next-button').addClass('disabled') : $('#next-button').removeClass('disabled');
		}

	}

	function navigation(button, curPos, def, options) {
		if(def) {
			button == 'next-button' ? curPos+=1 : curPos-=1;
			currentPosition = curPos;
			controlButtons(currentPosition, options);
			$('#slides-wrapper').animate({'marginLeft':slideWidth*(-currentPosition)});	
		}
			currentPosition = curPos;
			controlButtons(currentPosition, options);
			$('#slides-wrapper').animate({'marginLeft':slideWidth*(-currentPosition)});		
	}

	$.fn.slide.defaults = {
		autoBack: true
	}

})(jQuery);

