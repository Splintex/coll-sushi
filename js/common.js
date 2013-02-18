$(document).ready(function() {
	$(".fancybox").fancybox();
	$(".top-bar button").click(function(){
		$(".call").fadeIn();
		$(".overlay").show();
	});
	$(".overlay").click(function(){
		$(".call").fadeOut();
		$(this).hide();
	});
});