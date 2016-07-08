'use strict';

export function createSavedLists (lists) {
	let listSkeleton = $('.sl-lists .sl-list-wrapper:nth-child(2)');
	let listSnippet = $(listSkeleton).clone();

	for (let [listIndex, list] of lists.entries()) {
		let target;
		let shouldCreate = listIndex > 0;
		
		target = shouldCreate? listSnippet.clone() : listSkeleton;

		if(shouldCreate) {
			$('.sl-lists .sl-list-wrapper:last-child').after(target);
		}

		populateData(target, list);
	}

}

function populateData (target, listData) {
	let key = listData.key;
	let products = JSON.parse(listData.content);
	let productExample;

	for (let product of products) {
		$(target).attr('id', key);
		$('.panel-heading', target).text(key);
		$('.panel-body', target).text($('.panel-body', target).text() + ' ' + products.length);

		productExample = $('.table tr:first', target);
		let savedProductSkeleton = $(productExample, target).clone();

		$(productExample).after(savedProductSkeleton);
		$('.sl-product-name', savedProductSkeleton).text(product.name);
		if(product.bought) {
			$(savedProductSkeleton).addClass('sl-bought-product');
			$('.sl-product-actions i', savedProductSkeleton).addClass('fa-minus');
			$('.sl-product-actions button', savedProductSkeleton).addClass('btn-warning sl-return-product-btn');
		} else {
			$('.sl-product-actions i', savedProductSkeleton).addClass('fa-cart-plus');
			$('.sl-product-actions button', savedProductSkeleton).addClass('btn-success sl-add-to-cart-btn');
		}
	}

	$(productExample).remove();
	$('.sl-saved-product', target).removeClass('hidden');
}