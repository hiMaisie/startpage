$('.section').click(function () {
	$(this).find("ul").toggleClass("hideLinks");
	$('.section').not(this).find("ul").addClass("hideLinks");
	if($(this).find("ul").hasClass("hideLinks")) {
		currentPaneOpen = "";
	}
	else {
		currentPaneOpen = $(this).attr("data-letter");
	}
});

var currentPaneOpen = "";

$(document).keyup(function (event) {
	if (!$(event.target).is("input:focus")) {
		if (event.which >= 65 && event.which <= 90) {
			$('.section[data-letter="'+String.fromCharCode(event.which)+'"]').click();
		}
		else if (event.which == 220) {
			$('.searchbox').focus();
		}
		else if (event.which >= 49 && event.which <= 57) {
			window.location.href = $('.section[data-letter="'+currentPaneOpen+'"] ul li:nth-child('+(event.which-48)+') a').attr("href");
		}
		else if (event.which == 48) {
			window.location.href = $('.section[data-letter="'+currentPaneOpen+'"] ul li:nth-child(10) a').attr("href");
		}
	}
	else {
		if (event.which==27) {
			$('.searchbox').blur();
		}

		if (event.which==13) {
			window.location.href="https://duckduckgo.com/?q="+$('.searchbox').val();
		}
	}
});

$(document).ready(function() {
	var d = new Date();
	if (d.getHours()<12) {
		$('.dateTime').html('Good morning! ');
	}
	else $('.dateTime').html('Good afternoon! ');
});
