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
	
	$(LIST_ACCESS_BUTTON_CLASS).click(function(event) {
		newListFormController.saveList(NEW_LIST, $(this).data('public'));
	});

	$(SAVE_LIST_BTN).click(function(event) {
		if(!IS_ANON) {
			$(LIST_ACCESS_MODAL).modal('show');
		} else {
			newListFormController.saveList(NEW_LIST, true);
		}
	});
	
	listsController.getLists({
		ignoredStatuses:	'draft,bought'
	}).done(function(data) {
		listsBuilder.create(data);
		
		$(SAVED_LIST).each(function(listIndex, listItem) {
			$(CHANGE_PRODUCT_STATUS_BTN_CLASS, listItem).each(function(buttonIndex, buttonItem) {
				$(buttonItem).click(function(event) {
					savedListFormController.changeProductStatus(listItem, event.target);
				});
			})
			
			$(BUY_LIST_BTN_CLASS, listItem).click(function(event) {
				savedListFormController.buyList(event.target);
			});
		});
	}).fail(function (jqXHR, textStatus, errorThrown) {
		$(ALERT_WARNING).text(errorThrown);
		$(ALERT_WARNING).toggleClass('hidden');
	});
}