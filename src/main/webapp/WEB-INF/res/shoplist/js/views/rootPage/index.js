'use strict';

var newListFormController = new NewListFormController();
var savedListFormController = new SavedListFormController();
var listsController = new ListsController();

$(document).ready(function() {
																				LOGGER.debug('Document ready');
	init();
});

function init() {

																				LOGGER.debug('Initializing a page');
																				LOGGER.debug('Assigning Add product button click event');

	$(ADD_PRODUCT_BTN).click(function(event) {
																				LOGGER.debug('Add product button clicked');
		newListFormController.addProduct(NEW_PRODUCT); //+
	});
																				LOGGER.debug('Assigning New product input keyup event');
	$(NEW_PRODUCT).keyup(function(event) {
																				LOGGER.debug('New product input keyup event triggered');
		if(event.keyCode == 13 || event.which == 13) {
																				LOGGER.debug('Add product button click simulated');
			$(ADD_PRODUCT_BTN).click();
		}
	});
																				LOGGER.debug('Assigning Save list button click event');
	$(SAVE_LIST_BTN).click(function(event) {
																				LOGGER.debug('Save list button clicked');
		newListFormController.saveList(NEW_LIST); //+
	});


	listsController.getSavedListsForCurrentUser();

																				LOGGER.debug('Start iterating over saved lists');
	$(SAVED_LIST_CLASS).each(function(index, slSavedList) {
																				LOGGER.debug('Saved list [' + index + ']');
																				LOGGER.debug('Start iterating over change status buttons for list [' + index + ']');
		$(CHANGE_PRODUCT_STATUS_BTN_CLASS, slSavedList).each(function(index1, slChangeProductStatusBtn) {
																				LOGGER.debug('Change status button [' + index1 + ']');
			$(slChangeProductStatusBtn).click(function(event) {
																				LOGGER.debug('Assigning Change product status button click event');
				savedListFormController.changeProductStatus(slSavedList, slChangeProductStatusBtn);
			});
		});

																				LOGGER.debug('Start iterating over Buy list buttons for list [' + index + ']');
		$(BUY_LIST_BTN_CLASS, slSavedList).each(function(index2, slBuyListBtn) {
																				LOGGER.debug('Buy list button [' + index2 + ']');
			$(slBuyListBtn).click(function(event) {
																				LOGGER.debug('Assign Buy list button click event');
				savedListFormController.buyList(slSavedList, slBuyListBtn);
			});
		});
	});
}