'use strict';

var listsController = new ListsController();
var savedListFormController = new SavedListFormController();
var listsBuilder = new ListBuilder();

$(document).ready(function() {
	init();
});

function init() {
	listsController.getList($('#sl-saved-lists').data('list'))
		.done(function(data) {
			var lists = [];
			lists.push(data);
			listsBuilder.create(lists);
			
			$(SAVED_LIST).each(function(listIndex, listItem) {
				$(CHANGE_PRODUCT_STATUS_BTN_CLASS, listItem).each(function(buttonIndex, buttonItem) {
					$(buttonItem).click(function(event) {
						savedListFormController.changeProductStatus(listItem, event.target);
					});
				});
				
				$(BUY_LIST_BTN_CLASS, listItem).click(function(event) {
					savedListFormController.buyList(event.target);
				});
			});
		}).fail(function (jqXHR, textStatus, errorThrown) {
			$(ALERT_WARNING).text(errorThrown);
			$(ALERT_WARNING).toggleClass('hidden');
		});
}