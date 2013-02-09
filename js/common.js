$(document).ready(function() {
	$(".top-bar button").click(function(){
		$(".popup").fadeIn();
		$(".overlay").show();
	});
	$(".overlay").click(function(){
		$(".popup").fadeOut();
		$(this).hide();
	});
});