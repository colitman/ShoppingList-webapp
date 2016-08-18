'use strict';


function SavedListFormController () {
	this.listService = new ListService();
	this.listBuilder = new ListBuilder();
}

SavedListFormController.prototype
	.changeProductStatus = function (listItem, clicked) {

		var button = $(clicked).is('button')? clicked : $(clicked).parent();

		var targetProductId = $(button).data('target');

		$('#' + targetProductId, listItem).data('bought', !$('#' + targetProductId, listItem).data('bought'));
	
		var list = this.listBuilder.parse(listItem);

		if (list.content.length === 0) {
			return;
		}
		
		this.listService.updateList(list)
			.done(function() {
				$('#' + targetProductId, listItem).toggleClass('sl-bought-product');
				$(button).toggleClass('btn-success btn-warning');
				$('i', button).toggleClass('fa-cart-plus fa-minus');
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				$('#' + targetProductId, listItem).data('bought', !$('#' + targetProductId, listItem).data('bought'));

				new Alert('danger', '', errorThrown).show();
			});

	};

SavedListFormController.prototype
	.buyList = function (button) {

		var listId = $(button).data('target');
		var listForm = $('article#' + listId);

		var prevStatus = $(listForm).data('status');
		$(listForm).data('status', LIST_STATUS_BOUGHT);

		var list = this.listBuilder.parse(listForm);

		if (list.content.length === 0) {
			return;
		}
		
		this.listService.updateList(list)
			.done(function() {
				$('.panel', listForm).removeClass('panel-success');
				$('.panel', listForm).addClass('panel-default');
				
				$(BUY_LIST_BTN_CLASS, listForm).remove();
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				
				$(listForm).data('status', prevStatus);
				
				new Alert('danger', '', errorThrown).show();
			});
	};

