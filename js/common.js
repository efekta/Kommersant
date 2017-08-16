;

$(document).ready(function(){
	// http://jquery.eisbehr.de/lazy/#installation
	$('.lazy').Lazy();
	// <div class="home lazy" data-src="img/bg/bg.jpg">
});

$(window).on('load',function() {
	$('#loader-page').fadeOut();
});