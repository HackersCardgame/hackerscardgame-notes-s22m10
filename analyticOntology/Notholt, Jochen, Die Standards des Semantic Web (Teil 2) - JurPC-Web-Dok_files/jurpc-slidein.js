var closedByUser = false;
var slideinState = false;

$(document).ready(function() {
    $("div#jurpc-slidein-toggle").click(function() {
        if (slideinState === false) {
            $("#jurpc-slidein").animate({right: '0px'});
            $("#jurpc-slidein-toggle img").attr("src", "images/slidein-arrow-right.png");
            slideinState = true;
            console.log('slide in');
        } else {
            $("#jurpc-slidein").animate({right: '-480px'});
            $("#jurpc-slidein-toggle img").attr("src", "images/slidein-arrow-left.png");
            slideinState = false;
            closedByUser = true;
            console.log('slide out');
        }
        console.log('toggle');
    });
    $("div#slidein-close").click(function() {
        $("#jurpc-slidein").animate({right: '-540px'});
    });
});


$(window).scroll(function() {

    var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
    var scrolltrigger = 0.75;

    if ((wintop / (docheight - winheight)) > scrolltrigger) {
    	if (closedByUser === false && slideinState === false) {

	        $("#jurpc-slidein").animate({right: '0px'});
	        slideinState = true;
	        console.log('toggle scroll');
        }
    }
});