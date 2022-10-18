$(document).ready(function(){

	/*
	jQuery('a[href*=".pdf"]').pdfRepository({repository: 'http://pdf.makrolog.de/pdf-repository/get', repoParam: 'dwa'});
	$('A[rel="_blank"]').each(function(){
		$(this).attr('target', '_blank');
	});
	*/
	$(".tabContents").hide();
	if ($("#tabContainer").length > 0) {
		var activeContentTabName = $("#tabContainer").find("a[class='active']").attr("href").replace(/#/, "");
		$("#tabContentContainer").find("div[id='" + activeContentTabName + "']").show();
	
		$("#tabContainer ul li a").click(function(event){
			event.preventDefault();
			var activeTab = $(this).attr("href");
			var oldTab = $("#tabContainer").find("a[class='active']");
			$(oldTab).addClass("inactive");
			var oldTabName = oldTab.attr("name");
			var oldImg = "./images/" + oldTabName + ".png";
			$(oldTab).find("img").attr("src", oldImg);
			$("#tabContainer ul li a").removeClass("active");
			$(this).removeClass("inactive");
			$(this).addClass("active");
			var newTab = $(this).attr("name");
			var newImg = "./images/" + newTab + "_act.png";
			$(this).find("img").attr("src", newImg);
			$(".tabContents").hide();
			$(activeTab).fadeIn();
		});
	}
});
