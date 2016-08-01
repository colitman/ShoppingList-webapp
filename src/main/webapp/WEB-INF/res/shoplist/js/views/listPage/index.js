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

	var listId = $('body').attr('id');

	listsController.getList(listId);
}