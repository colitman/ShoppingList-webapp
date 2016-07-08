'use strict';

function addProductToNewList (product) {
	if($(product).val() == '') {
		return;
	}

	var addedProduct;

	$.ajax({
		url: ROOT + '/snippets/addedProductSnippet',
		type: 'GET',
		dataType: 'html'
	}).done(function(data) {
		$('#sl-new-list .list-group-item:last-child').before(data);
		
		addedProduct = $('#sl-new-list .list-group .list-group-item:nth-last-child(2)');

		var id = new Date().getTime();
		$(addedProduct).attr('id', id);
		$('.sl-remove-product-btn', addedProduct).data('target', id);

		$('.sl-remove-product-btn', addedProduct).click(function(event) {
			var target = $(this).data('target');
			$('#' + target).remove();
		});
		
		$('input', addedProduct).val($(product).val());
		$('#sl-new-product').val('');
		$('#sl-new-product').focus();
	});
}