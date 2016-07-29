'use strict';

var listsController = new ListsController();
var savedListFormController = new SavedListFormController();

$(document).ready(function() {
																				LOGGER.debug('Document ready');
	init();
});

function init() {

	$(BUY_LIST_BTN_CLASS).click(function(event) {
		savedListFormController.buyList(event.target);
	});

	$(CHANGE_PRODUCT_STATUS_BTN_CLASS).click(function(event) {
		savedListFormController.changeProductStatus(event.target);
	});

	$(LIST_SEARCH_FORM).submit(function(event) {
		event.preventDefault();
		var id = $('#listId', this).val();
		window.location.replace(window.location.protocol + '//' + window.location.host + $(this).attr('action') + id);
	});

	var listId = $('body').attr('id');

	listsController.getList(listId);
}