'use strict';

var newListFormController = new NewListFormController();
var savedListFormController = new SavedListFormController();
var listsController = new ListsController();
var listsBuilder = new ListBuilder();

$(document).ready(function() {
	init();
});

function init() {
	$(ADD_PRODUCT_BTN).click(function(event) {
		newListFormController.addProduct(NEW_PRODUCT);
	});
	
	$(NEW_PRODUCT).keyup(function(event) {
		if(event.keyCode === 13 || event.which === 13) {
			$(ADD_PRODUCT_BTN).click();
		}
	});

	$(SAVE_LIST_BTN).click(function(event) {
		newListFormController.saveList(NEW_LIST);
	});
	
	listsController.getLists({
		ignoredStatuses:	'draft,bought'
	}).done(function(data) {
		listsBuilder.create(data);
		
		$(CHANGE_PRODUCT_STATUS_BTN_CLASS).each(function(index, item) {
			$(item).click(function(event) {
				savedListFormController.changeProductStatus(event.target);
			});
		})
		
		$(BUY_LIST_BTN_CLASS).each(function(index, item) {
			$(item).click(function(event) {
				savedListFormController.buyList(event.target);
			});
		})
	}).fail(function (jqXHR, textStatus, errorThrown) {
		$(ALERT_WARNING).text(errorThrown);
		$(ALERT_WARNING).toggleClass('hidden');
	});
}