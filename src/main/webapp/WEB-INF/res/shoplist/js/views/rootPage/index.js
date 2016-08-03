'use strict';

var newListFormController = new NewListFormController();
var savedListFormController = new SavedListFormController();
var listsController = new ListsController();

$(document).ready(function() {
	init();
});

function init() {
	$(ADD_PRODUCT_BTN).click(function(event) {
		newListFormController.addProduct(NEW_PRODUCT); //+
	});
	
	$(NEW_PRODUCT).keyup(function(event) {
		if(event.keyCode === 13 || event.which === 13) {
			$(ADD_PRODUCT_BTN).click();
		}
	});

	$(SAVE_LIST_BTN).click(function(event) {
		newListFormController.saveList(NEW_LIST); //+
	});

	$(BUY_LIST_BTN_CLASS).click(function(event) {
		savedListFormController.buyList(event.target);
	});

	$(CHANGE_PRODUCT_STATUS_BTN_CLASS).click(function(event) {
		savedListFormController.changeProductStatus(event.target);
	});

	listsController.getSavedListsForCurrentUser();
}