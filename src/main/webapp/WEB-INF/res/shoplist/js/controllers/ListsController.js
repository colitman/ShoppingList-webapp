'use strict';

function ListsController () {
														LOGGER.debug('ListsController initialized');
	this.listService = new ListService();
}

ListsController.prototype
	.getList = function(id) {
		var instance = this;
		this.listService.getList(id)
			.done(function (data) {
				instance.populateList(data);
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
														LOGGER.debug('Anonymous promise getting failed');
				$(ALERT_WARNING).text(errorThrown);
				$(ALERT_WARNING).toggleClass('hidden');
			});
	};

ListsController.prototype
	.populateList = function(listData) {
		var listForm = $('#' + listData.key + SAVED_LIST_CLASS).parents('.sl-list-wrapper');
		
		//populate list data
		var listKey = listData.key;
		var listProducts = JSON.parse(listData.content);

		$(listForm).attr('id', listKey);

		if(listData.bought) {
			$('.panel', listForm).addClass('panel-default');
		} else {
			$('.panel', listForm).addClass('panel-success');
		}

		$('.panel-heading', listForm).text(listKey);
		$('.panel-body', listForm).text($('.panel-body', listForm).text() + ' ' + listProducts.length);

		var publicLink = $('.panel-footer a', listForm);
		$(publicLink).attr('href', $(publicLink).attr('href') + listKey);
		$(publicLink).text($(publicLink).text() + listKey);

		$(BUY_LIST_BTN_CLASS, listForm).data('target', listKey);
													LOGGER.debug('Start iterating over list products data');
		// populate list products data
		for (var j = 0; j < listProducts.length; j++) {
			var listProduct = listProducts[j];
													LOGGER.debug('List product index [' + j + ']');
			// pick up a snippet
			var productForm = $('.sl-snippet[data-name="saved-product"]').clone(true, true);
			$(productForm).removeClass('sl-snippet');
																	LOGGER.debug('Picked up a snippet for list product.');

			// insert to proper place
			$('.sl-wait-sign', listForm).before(productForm);
			
			// populate with data
			$('.sl-product-name', productForm).text(listProduct.name);
			$(productForm).attr('id', listProduct.key);

			$(CHANGE_PRODUCT_STATUS_BTN_CLASS, productForm).data('target', listProduct.key);
			$(CHANGE_PRODUCT_STATUS_BTN_CLASS, productForm).data('targetList', listKey);

			var bought = listProduct.bought;

			$(productForm).addClass(bought? 'sl-bought-product':'');
			$('.sl-product-actions i', productForm).addClass(bought? 'fa-minus' : 'fa-cart-plus');
			$(CHANGE_PRODUCT_STATUS_BTN_CLASS, productForm).addClass(bought? 'btn-warning' : 'btn-success');
		}

		$('.sl-wait-sign').remove();
	};

ListsController.prototype
	.getSavedListsForCurrentUser = function () {

		var promise = IS_ANON?
						this.listService.getListsByAnonymousOwner(CURRENT_ANON_USER):
						this.listService.getListsByOwner(CURRENT_USER);

		var lists = [];
		var instance = this;

		promise
			.done(function (data) {
				$.merge(lists, data);
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				$(ALERT_WARNING).text(errorThrown);
				$(ALERT_WARNING).toggleClass('hidden');
			})
			.always(function() {
											LOGGER.debug('Initiating DOM creation for saved lists');
				instance.createSavedLists(lists);
			});
	};

ListsController.prototype
	.createSavedLists = function(listsData) {
														LOGGER.debug('Trying to create saved lists DOM');
		if(listsData.length === 0) {
														LOGGER.debug('No saved lists. Exiting.');
			return;
		}
														LOGGER.debug('Start iterating over saved lists data');
		for (var i = 0; i < listsData.length; i++) {
			var listData = listsData[i];
														LOGGER.debug('List index [' + i + ']');

			//pick up a snippet
			var listForm = $('.sl-snippet[data-name="saved-list"]').clone(true, true);
			$(listForm).removeClass('sl-snippet');
														LOGGER.debug('Picked up a snippet for saved list.');

			//insert to proper place
			$('.sl-lists .sl-list-wrapper:first-child').after(listForm);
			
			//populate list data
			var listKey = listData.key;
			var listProducts = JSON.parse(listData.content);

			$(listForm).attr('id', listKey);

			if(listData.bought) {
				$('.panel', listForm).addClass('panel-default');
			} else {
				$('.panel', listForm).addClass('panel-success');
			}

			$('.panel-heading', listForm).text(listKey);
			$('.panel-body', listForm).text($('.panel-body', listForm).text() + ' ' + listProducts.length);

			var publicLink = $('.panel-footer a', listForm);
			$(publicLink).attr('href', $(publicLink).attr('href') + listKey);
			$(publicLink).text($(publicLink).text() + listKey);

			$(BUY_LIST_BTN_CLASS, listForm).data('target', listKey);
														LOGGER.debug('Start iterating over list products data');
			// populate list products data
			for (var j = 0; j < listProducts.length; j++) {
				var listProduct = listProducts[j];
														LOGGER.debug('List product index [' + j + ']');
				// pick up a snippet
				var productForm = $('.sl-snippet[data-name="saved-product"]').clone(true, true);
				$(productForm).removeClass('sl-snippet');
																		LOGGER.debug('Picked up a snippet for list product.');

				// insert to proper place
				$('.sl-wait-sign', listForm).before(productForm);
				
				// populate with data
				$('.sl-product-name', productForm).text(listProduct.name);
				$(productForm).attr('id', listProduct.key);

				$(CHANGE_PRODUCT_STATUS_BTN_CLASS, productForm).data('target', listProduct.key);
				$(CHANGE_PRODUCT_STATUS_BTN_CLASS, productForm).data('targetList', listKey);

				var bought = listProduct.bought;

				$(productForm).addClass(bought? 'sl-bought-product':'');
				$('.sl-product-actions i', productForm).addClass(bought? 'fa-minus' : 'fa-cart-plus');
				$(CHANGE_PRODUCT_STATUS_BTN_CLASS, productForm).addClass(bought? 'btn-warning' : 'btn-success');
			}
		}

		$(SAVED_PRODUCT_CLASS).removeClass('hidden');
		$('.sl-wait-sign').remove();
	};