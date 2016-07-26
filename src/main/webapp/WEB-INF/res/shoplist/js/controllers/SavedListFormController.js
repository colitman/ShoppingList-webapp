'use strict';

function SavedListFormController () {
	var listservice = new ListService();
}

SavedListFormController.prototype
	.changeProductStatus = function (listForm, button) {
		var targetProductId = $(button).data('target');

		$('#' + targetProductId, listForm).toggleClass('sl-bought-product');
		$(button).toggleClass('btn-success btn-warning');
		$('i', button).toggleClass('fa-cart-plus fa-minus');

		var list = new List();

		list.key = listForm.attr('id');
		list.bought = $('.panel', listForm).hasClass('panel-default');
		list.owner = IS_ANON? -1: CURRENT_USER;
		list.anonymousOwner = CURRENT_ANON_USER;

		$(SAVED_PRODUCT_CLASS, listForm).each(function(index, item) {
			var productName = $('.sl-product-name', item).text();
			var product = new Product(productName);
			product.key = targetProductId;
			product.bought = $(item).hasClass('sl-bought-product');
			list.content.push(product);
		});

		if (list.content.length === 0) {
			return;
		}

		listService.updateList(list);
			.done(function(data) {
				$(ALERT_SUCCESS).text('Successfully');
				$(ALERT_SUCCESS).toggleClass('hidden');
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				$(ALERT_DANGER).text(errorThrown);
				$(ALERT_DANGER).toggleClass('hidden');
			})

	};

SavedListFormController.prototype
	.buyList = function (listForm, button) {

		$('.panel', listForm).removeClass('panel-success');
		$('.panel', listForm).addClass('panel-default');

		var list = new List();

		list.key = listForm.attr('id');
		list.bought = $('.panel', listForm).hasClass('panel-default');
		list.owner = IS_ANON? -1: CURRENT_USER;
		list.anonymousOwner = CURRENT_ANON_USER;

		$(SAVED_PRODUCT_CLASS, listForm).each(function(index, item) {
			var productName = $('.sl-product-name', item).text();
			var product = new Product(productName);
			product.key = targetProductId;
			product.bought = $(item).hasClass('sl-bought-product');
			list.content.push(product);
		});

		if (list.content.length === 0) {
			return;
		}

		listService.updateList(list);
			.done(function(data) {
				$(ALERT_SUCCESS).text('Successfully');
				$(ALERT_SUCCESS).toggleClass('hidden');
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				$(ALERT_DANGER).text(errorThrown);
				$(ALERT_DANGER).toggleClass('hidden');
			})
	};

