'use strict';

function ListBuilder () {}

ListBuilder.prototype.create = function(lists) {
	for(var i = 0; i < lists.length; i++) {
		var listData = lists[i];
		var listElement = new SavedList(listData.key, listData.bought);
		
		var listProductsData = JSON.parse(listData.content);
		
		for(var j = 0; j < listProductsData.length; j++) {
			var listProductData = listProductsData[j];
			var productElement = new SavedProduct(listProductData.key, listProductData.name, listProductData.buoght);
			$(listElement).append(productElement);
		}
		
		$('.sl-saved-lists').append(listElement);
	}
}

/* end of reviwed
ListBuilder.prototype
	.parse = function (listForm) {
		var list = new List();

		list.key = $(listForm).attr('id');
		list.bought = $('.panel', listForm).hasClass('panel-default');
		list.owner = IS_ANON? -1: CURRENT_USER;
		list.anonymousOwner = IS_ANON? CURRENT_ANON_USER: '';
	
		$(SAVED_PRODUCT_CLASS, listForm).each(function(index, item) {

			var productName = $('.sl-product-name', item).text();
			var product = new Product(productName);
			product.key = $(item).attr('id');
			product.bought = $(item).hasClass('sl-bought-product');
			list.content.push(product);
		});

		return list;
	};*/
/*
ListBuilder.prototype
	.populate = function (listData, listForm, productFormSnippet) {
		
		var listKey = listData.key;
		var listProducts = JSON.parse(listData.content);

		$(listForm).attr('id', listKey);

		if(listData.bought) {
			$('.panel', listForm).addClass('panel-default');
			$(BUY_LIST_BTN_CLASS, listForm).attr('disabled', 'disabled');
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
			var listProduct = listProducts[j];

			// pick up a snippet
			var productForm = $(productFormSnippet).clone(true, true);
			$(productForm).removeClass('sl-snippet');

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
	};*/