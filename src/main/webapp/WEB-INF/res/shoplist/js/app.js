const ROOT = $('meta[name="contextPath"]').attr('content');

$(document).ready(function() {
	setMinHeight();
	$(window).resize(function(event) {
		setMinHeight();
	});
});

function setMinHeight() {
	let nav = $('.sl-page nav');
	let content = $('.sl-page .sl-main-content');
	let footer = $('.sl-page footer');

	let contentMinHeight;

	contentMinHeight = $(window).height() - $(nav).outerHeight(true) - $(footer).outerHeight(true);

	$(content).css('min-height', contentMinHeight);
}