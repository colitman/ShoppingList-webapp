var ROOT = $('meta[name="contextPath"]').attr('content');

$(document).ready(function() {
	setMinHeight();
	$(window).resize(function(event) {
		setMinHeight();
	});
});

function setMinHeight() {
	var nav = $('.page nav');
	var content = $('.page .main-content');
	var footer = $('.page footer');

	var contentMinHeight;

	contentMinHeight = $(window).height() - $(nav).outerHeight(true) - $(footer).outerHeight(true);

	$(content).css('min-height', contentMinHeight);
}