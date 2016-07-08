'use strict';

export function addProductToNewList (product) {
	if($(product).val() == '') {
		return;
	}

	let addedProduct;

	$.ajax({
		url: ROOT + '/snippets/addedProductSnippet',
		type: 'GET',
		dataType: 'html'
	}).done(function(data) {
		$('#sl-new-list .list-group-item:last-child').before(data);
		
		addedProduct = $('#sl-new-list .list-group .list-group-item:nth-last-child(2)');

		let id = new Date().getTime();
		$(addedProduct).attr('id', id);
		$('.sl-remove-product-btn', addedProduct).data('target', id);

		$('.sl-remove-product-btn', addedProduct).click(function(event) {
			let target = $(this).data('target');
			$('#' + target).remove();
		});
		
		$('input', addedProduct).val($(product).val());
		$('#sl-new-product').val('');
		$('#sl-new-product').focus();
	});
}