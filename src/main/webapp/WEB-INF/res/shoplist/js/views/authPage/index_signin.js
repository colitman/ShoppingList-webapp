'use strict';

$(document).ready(function() {
	init();
});

function init() {

	$(LIST_SEARCH_FORM).submit(function(event) {
		event.preventDefault();
		var id = $('#listId', this).val();
		window.location.replace(window.location.protocol + '//' + window.location.host + $(this).attr('action') + id);
	});

}