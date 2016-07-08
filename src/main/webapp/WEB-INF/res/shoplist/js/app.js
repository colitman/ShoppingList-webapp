'use strict';

var ROOT = $('meta[name="contextPath"]').attr('content');

$(document).ready(function() {
	setMinHeight();
	$(window).resize(function(event) {
		setMinHeight();
	});
});

function setMinHeight() {
	var nav = $('.sl-page nav');
	var content = $('.sl-page .sl-main-content');
	var footer = $('.sl-page footer');

	var contentMinHeight;

	contentMinHeight = $(window).height() - $(nav).outerHeight(true) - $(footer).outerHeight(true);

	$(content).css('min-height', contentMinHeight);
}