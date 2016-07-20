'use strict';

var newListController = new NewListFormController();
var savedListController = new SavedListFormController();

$(document).ready(function() {
	init();
});

function init() {

	$(ADD_PRODUCT_BTN).click(function(event) {
		newListController.addProduct(NEW_PRODUCT); //+
	});

	$(NEW_PRODUCT).keyup(function(event) {
		if(event.keyCode == 13 || event.which == 13) {
			$(ADD_PRODUCT_BTN).click();
		}
	});

	$(SAVE_LIST_BTN).click(function(event) {
		newListController.saveList(NEW_LIST); //+
	});

	if(HAS_SAVED_LISTS) {
		savedListController.getListsForCurrentUser();
	}
}