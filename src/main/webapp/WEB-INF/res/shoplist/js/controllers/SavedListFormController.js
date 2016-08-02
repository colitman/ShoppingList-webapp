'use strict';

function SavedListFormController () {
														LOGGER.debug('SavedListFormController initialized');
	this.listService = new ListService();
	this.listBuilder = new ListBuilder();
}

SavedListFormController.prototype
	.changeProductStatus = function (clicked) {
														LOGGER.debug('Trying to change product status');
		var button = $(clicked).is('button')? clicked : $(clicked).parent();

		var targetProductId = $(button).data('target');
		var targetListId = $(button).data('targetList');
														LOGGER.debug('Searching for targets - Product[' + targetProductId + ']; List[' + targetListId + ']');
		var listForm = $('#' + targetListId + '.sl-list-wrapper');

		$('#' + targetProductId, listForm).toggleClass('sl-bought-product');
		$(button).toggleClass('btn-success btn-warning');
		$('i', button).toggleClass('fa-cart-plus fa-minus');

														LOGGER.debug('Starting building a new list state');
		var list = this.listBuilder.parse(listForm);

		if (list.content.length === 0) {
														LOGGER.debug('No products in a list. Exiting.');
			return;
		}

														LOGGER.debug('Initiating list update');
		this.listService.updateList(list)
			.done(function(data) {
														LOGGER.debug('List successfully updated');

				$(ALERT_SUCCESS).text('Successfully');
				$(ALERT_SUCCESS).toggleClass('hidden');
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
														LOGGER.debug('Failed to update list');

				$('#' + targetProductId, listForm).toggleClass('sl-bought-product');
				$(button).toggleClass('btn-success btn-warning');
				$('i', button).toggleClass('fa-cart-plus fa-minus');

				$(ALERT_DANGER).text(errorThrown);
				$(ALERT_DANGER).toggleClass('hidden');
			});

	};

SavedListFormController.prototype
	.buyList = function (button) {

														LOGGER.debug('Trying to buy a list');
		var listId = $(button).data('target');
		var listForm = $('#' + listId + '.sl-list-wrapper');
														LOGGER.debug('Starting building a new list state');

		$('.panel', listForm).removeClass('panel-success');
		$('.panel', listForm).addClass('panel-default');

		var list = this.listBuilder.parse(listForm);

		if (list.content.length === 0) {
														LOGGER.debug('No products in a list. Exiting.');
			return;
		}
														LOGGER.debug('Initiating list update');
		this.listService.updateList(list)
			.done(function(data) {
														LOGGER.debug('List successfully updated');

				$(ALERT_SUCCESS).text('Successfully');
				$(ALERT_SUCCESS).toggleClass('hidden');
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
														LOGGER.debug('Failed to update list');
				$('.panel', listForm).removeClass('panel-default');
				$('.panel', listForm).addClass('panel-success');

				$(ALERT_DANGER).text(errorThrown);
				$(ALERT_DANGER).toggleClass('hidden');
			});
	};

