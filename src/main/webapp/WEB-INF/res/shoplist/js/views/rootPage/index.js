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
		if(event.keyCode == 13 || event.which == 13) {
			$(ADD_PRODUCT_BTN).click();
		}
	});

	$(SAVE_LIST_BTN).click(function(event) {
		newListFormController.saveList(NEW_LIST); //+
	});

	listsController.getSavedListsForCurrentUser();

	$(SAVED_LIST_CLASS).each(function(index, slSavedList) {
		$(CHANGE_PRODUCT_STATUS_BTN_CLASS, slSavedList).each(function(index, slChangeProductStatusBtn) {
			$(slChangeProductStatusBtn).click(function(event) {
				savedListFormController.changeProductStatus(slSavedList, slChangeProductStatusBtn);
			});
		});

		$(BUY_LIST_BTN_CLASS, slSavedList).each(function(index, slBuyListBtn) {
			$(slBuyListBtn).click(function(event) {
				savedListFormController.buyList(slSavedList, slBuyListBtn);
			});
		});
	});
}