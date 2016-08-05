'use strict';

var listsController = new ListsController();
var savedListFormController = new SavedListFormController();

$(document).ready(function() {
	init();
});

function init() {
	listsController.getList($('#sl-saved-lists').data('list'))
		.done(function(data) {
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