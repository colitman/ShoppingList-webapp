'use strict';

function createSavedLists (lists) {
	var listSkeleton = $('.sl-lists .sl-list-wrapper:nth-child(2)');
	var listSnippet = $(listSkeleton).clone();

	for (var i = 0; i < lists.length; i++) {
		var target;
		var shouldCreate = i > 0;
		
		target = shouldCreate? listSnippet.clone() : listSkeleton;

		if(shouldCreate) {
			$('.sl-lists .sl-list-wrapper:last-child').after(target);
		}
		
		populateData(target, lists[i]);
	}
	
	$('.sl-saved-product').removeClass('hidden');
	$('.sl-wait-sign').remove();
}

function populateData (target, listData) {
	var key = listData.key;
	var products = JSON.parse(listData.content)/*.products*/;
	var productExample;
	
	$(target).attr('id', key);
	
	if(listData.bought) {
		$('.panel', target).toggleClass('panel-success panel-default')
	}
	
	$('.panel-heading', target).text(key);
	$('.panel-body', target).text($('.panel-body', target).text() + ' ' + products.length);

	for (var i = 0; i < products.length; i++) {
		var product = products[i];

		

		productExample = $('.table tr:first', target);
		var savedProductSkeleton = $(productExample, target).clone();

		$(productExample).after(savedProductSkeleton);
		$('.sl-product-name', savedProductSkeleton).text(product.name);

		var tempKey = new Date().getTime();
		$(savedProductSkeleton).attr('id', tempKey);

		if(product.bought) {
			$(savedProductSkeleton).addClass('sl-bought-product');
			$('.sl-product-actions i', savedProductSkeleton).addClass('fa-minus');
			$('.sl-product-actions button', savedProductSkeleton).addClass('btn-warning sl-return-product-btn');
		} else {
			$('.sl-product-actions i', savedProductSkeleton).addClass('fa-cart-plus');
			$('.sl-product-actions button', savedProductSkeleton).addClass('btn-success sl-add-to-cart-btn');
		}
		
		$('.sl-product-actions button', savedProductSkeleton).data('target', tempKey);
		
		$('.sl-product-actions button', savedProductSkeleton).click(function(event) {
			manageProductInCart(target, this);
		});
	}

	var publicLink = $('.panel-footer a', target);
	$(publicLink).attr('href', $(publicLink).attr('href') + key);
	$(publicLink).text($(publicLink).text() + key);
	
	var buyButton = $('.buy-list-btn', target).data('target', key);
	
	$('.buy-list-btn').each(function(index, item) {
		var targetListKey = $(item).data('target');
		
		$(item).click(function(event){
			buyList(targetListKey);
		});
	});
	
	$(productExample).remove();
	//$('.sl-saved-product', target).removeClass('hidden');
}