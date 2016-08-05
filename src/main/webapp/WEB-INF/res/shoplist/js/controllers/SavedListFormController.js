'use strict';


function SavedListFormController () {
	this.listService = new ListService();
	this.listBuilder = new ListBuilder();
}

SavedListFormController.prototype
	.changeProductStatus = function (clicked) {

		var button = $(clicked).is('button')? clicked : $(clicked).parent();

		var targetProductId = $(button).data('target');
		var targetListId = $(button).data('targetList');

		var listForm = $('#' + targetListId + '.sl-list');

		$('#' + targetProductId, listForm).toggleClass('sl-bought-product');
		$(button).toggleClass('btn-success btn-warning');
		$('i', button).toggleClass('fa-cart-plus fa-minus');
	
		var list = this.listBuilder.parse(listForm);

		if (list.content.length === 0) {
			return;
		}

		this.listService.updateList(list)
			.done(function() {
				$(ALERT_SUCCESS).text('Successfully');
				$(ALERT_SUCCESS).toggleClass('hidden');
			})
			.fail(function(jqXHR, textStatus, errorThrown) {

				$('#' + targetProductId, listForm).toggleClass('sl-bought-product');
				$(button).toggleClass('btn-success btn-warning');
				$('i', button).toggleClass('fa-cart-plus fa-minus');

				$(ALERT_DANGER).text(errorThrown);
				$(ALERT_DANGER).toggleClass('hidden');
			});

	};

SavedListFormController.prototype
	.buyList = function (button) {

		var listId = $(button).data('target');
		var listForm = $('#' + listId + '.sl-list');

		$('.panel', listForm).removeClass('panel-success');
		$('.panel', listForm).addClass('panel-default');

		$(BUY_LIST_BTN_CLASS, listForm).removeClass('btn-success');
		$(BUY_LIST_BTN_CLASS, listForm).addClass('btn-default');
		$(BUY_LIST_BTN_CLASS, listForm).attr('disabled', 'disabled');

		var list = this.listBuilder.parse(listForm);

		if (list.content.length === 0) {
			return;
		}
		
		this.listService.updateList(list)
			.done(function() {

				$(ALERT_SUCCESS).text('Successfully');
				$(ALERT_SUCCESS).toggleClass('hidden');
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				
				$('.panel', listForm).removeClass('panel-default');
				$('.panel', listForm).addClass('panel-success');

				$(BUY_LIST_BTN_CLASS, listForm).removeClass('btn-default');
				$(BUY_LIST_BTN_CLASS, listForm).addClass('btn-success');
				$(BUY_LIST_BTN_CLASS, listForm).removeAttr('disabled');

				$(ALERT_DANGER).text(errorThrown);
				$(ALERT_DANGER).toggleClass('hidden');
			});
	};

