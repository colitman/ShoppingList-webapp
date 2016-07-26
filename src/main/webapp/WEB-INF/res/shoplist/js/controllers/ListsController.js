'use strict';

function ListsController () {
	var listservice = new ListService();
}

ListsController.prototype
	.getSavedListsForCurrentUser = function () {
		var anonPromise = listService.getListsByAnonymousOwner(CURRENT_ANON_USER);
		var ownerPromise = IS_ANON? null : listService.getListsByOwner(CURRENT_USER);

		var lists = [];

		anonPromise
			.done(function (data) {
				$.merge(lists, data);
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				$(ALERT_WARNING).text(errorThrown);
				$(ALERT_WARNING).toggleClass('hidden');
			});

		if (ownerPromise) {
			ownerPromise
				.done(function (data) {
					$.merge(lists, data);
				})
				.fail(function (jqXHR, textStatus, errorThrown) {
					$(ALERT_WARNING).text(errorThrown);
					$(ALERT_WARNING).toggleClass('hidden');
				});
		}
		
		createSavedLists(lists);
	}

ListsController.prototype
	.createSavedLists = function(listsData) {
		if(listsData.length === 0) {
			return;
		}

		for (var i = 0; i < listsData.length; i++) {
			var listData = listsData[i];

			if($(SAVED_LIST_CLASS + '#' + listData.key)) {
				continue;
			}

			//pick up a snippet
			var listForm = $('.sl-snippet[data-name="saved-list"]').clone();
			$(listForm).removeClass('sl-snippet');

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

			// populate list products data
			for (var j = 0; j < listProducts.length; j++) {
				var listProduct = listProducts[i];

				// pick up a snippet
				var productForm = $('.sl-snippet[data-name="saved-product"]').clone();
				$(productForm).removeClass('sl-snippet');

				// insert to proper place
				$('.sl-wait-sign', listForm).before(productForm);
				
				// populate with data
				$('.sl-product-name', productForm).text(listProduct.name);
				$(productForm).attr('id', listProduct.key);

				$(CHANGE_PRODUCT_STATUS_BTN_CLASS, productForm).data('target', listProduct.key);

				var bought = listProduct.bought;

				$(productForm).addClass(bought? 'sl-bought-product':'');
				$('.sl-product-actions i', productForm).addClass(bought? 'fa-minus' : 'fa-cart-plus');
				$(CHANGE_PRODUCT_STATUS_BTN_CLASS, productForm).addClass(bought? 'btn-warning' : 'btn-success');
			}
		}

		$(SAVED_PRODUCT_CLASS).removeClass('hidden');
		$('.sl-wait-sign').remove();
	}