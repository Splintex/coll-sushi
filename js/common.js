$(document).ready(function() {
	$(".top-bar button").click(function(){
		$(".call").fadeIn();
		$(".overlay").show();
	});
	$(".overlay").click(function(){
		$(".call").fadeOut();
		$(this).hide();
	});

// fancybox
    var window_width = $(window).width();
    if (window_width > 767) {
        $(".fancybox").fancybox({
            // insert parameters here
        });
    }
    else {
        $("a.fancybox").click(function(){
            return false;
        });
    }
});