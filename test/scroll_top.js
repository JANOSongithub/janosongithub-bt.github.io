$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});



$(document).ready(function() {
	$(window).scroll(function() {
	if ($(this).scrollTop() > 20) {
	$('#toTopBtn').fadeIn();
	} else {
	$('#toTopBtn').fadeOut();
	}
	});
	
	$('#toTopBtn').click(function() {
	$("html, body").animate({
	scrollTop: 0
	}, 1000);
	return false;
	});
	});