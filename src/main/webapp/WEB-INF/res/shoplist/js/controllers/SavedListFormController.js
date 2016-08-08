'use strict';


function SavedListFormController () {
	this.listService = new ListService();
	this.listBuilder = new ListBuilder();
}

SavedListFormController.prototype
	.changeProductStatus = function (listItem, clicked) {

		var button = $(clicked).is('button')? clicked : $(clicked).parent();

		var targetProductId = $(button).data('target');
		var targetListId = $(listItem).attr('id');

		var listForm = $('article#' + targetListId);

		$('#' + targetProductId, listForm).data('bought', !$('#' + targetProductId, listForm).data('bought'));
	
		var list = this.listBuilder.parse(listForm);

		if (list.content.length === 0) {
			return;
		}

		this.listService.updateList(list)
			.done(function() {
				$('#' + targetProductId, listForm).toggleClass('sl-bought-product');
				$(button).toggleClass('btn-success btn-warning');
				$('i', button).toggleClass('fa-cart-plus fa-minus');
				
				$(ALERT_SUCCESS).text('Successfully');
				$(ALERT_SUCCESS).toggleClass('hidden');
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				$('#' + targetProductId, listForm).data('bought', !$('#' + targetProductId, listForm).data('bought'));

				$(ALERT_DANGER).text(errorThrown);
				$(ALERT_DANGER).toggleClass('hidden');
			});

	};

SavedListFormController.prototype
	.buyList = function (button) {

		var listId = $(button).data('target');
		var listForm = $('article#' + listId);

		$(listForm).data('bought', true);

		var list = this.listBuilder.parse(listForm);

		if (list.content.length === 0) {
			return;
		}
		
		this.listService.updateList(list)
			.done(function() {
				$('.panel', listForm).removeClass('panel-success');
				$('.panel', listForm).addClass('panel-default');
				
				$(BUY_LIST_BTN_CLASS, listForm).removeClass('btn-success');
				$(BUY_LIST_BTN_CLASS, listForm).addClass('btn-default');
				$(BUY_LIST_BTN_CLASS, listForm).prop('disabled', 'disabled');
				
				$(ALERT_SUCCESS).text('Successfully');
				$(ALERT_SUCCESS).toggleClass('hidden');
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				
				$(listForm).data('bought', false);

				$(ALERT_DANGER).text(errorThrown);
				$(ALERT_DANGER).toggleClass('hidden');
			});
	};

