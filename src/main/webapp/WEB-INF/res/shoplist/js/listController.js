$(document).ready(function(){
	var newProduct = $('#new-list-product');
	var addProductButton = $('#add-new-product-btn');
	var removeAddedProductButton = '#remove-added-product-btn';

	addSaveNewListButtonListener();
	bindEnterPressForProductAdding(newProduct, addProductButton);
	addAddProductButtonListener(newProduct, addProductButton, removeAddedProductButton);
	populateSavedLists();
});

function populateSavedLists() {
	$('.list-saved').each(function(index, item) {
		var listId = $('.panel', item).attr('id');

		$.ajax({
			url: ROOT + '/api/lists/' + listId,
			type: 'GET',
			dataType: 'json'
		})
		.done(function(data) {
			var list = JSON.parse(data.content);
			$('.wait-sign', item).remove();

			var snippet;
			$.ajax({
				url: ROOT + '/snippets/savedProductSnippet',
				type: 'GET',
				dataType: 'html'
			})
			.done(function(data) {
				$('.table',item).append(data);
				snippet = $('tr',item);

				for (var i = 0; i < list.products.length; i++) {
					var listEntry = $(snippet).clone();

					$('.table',item).append(listEntry);
					$('.product-name', listEntry).text(list.products[i].name);

					var productName = $('.product-name', listEntry);
					if(list.products[i].bought) {
						$(productName).wrapInner('<s></s>');
						$('.product-actions i', listEntry).addClass('fa-minus');
						$('.product-actions button', listEntry).addClass('btn-warning return-product-to-shelf-btn')
					} else {
						$('.product-actions i', listEntry).addClass('fa-cart-plus');
						$('.product-actions button', listEntry).addClass('btn-success add-product-to-cart-btn')
					}
				}

				$(snippet).remove();
			});
			
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
			alert(jqXHR.responseText);
		});
		
	});
}

function addSaveNewListButtonListener() {
	$('.save-new-list-btn').click(function(event) {

		var list = new List();
		
		$('input', '.list-new').each(function(index, item) {
			if($(item).val() !== "") {
				var product = new Product($(item).val());
				list.products.push(product);
			}
		});

		if(list.products.length === 0) {
			return;
		}

		$.ajax({
			url: ROOT + '/api/lists',
			type: 'POST',
			dataType: 'json',
			data: 'content=' + JSON.stringify(list)
		})
		.done(function(data) {
			//refresh the main page, display the saved list next to new one form 
			window.location.replace(window.location.protocol + "//" + window.location.host + /*root*/ROOT + "/");
		})
		.fail(function() {
			//TODO: think on this
		})
		
	});
}

function bindEnterPressForProductAdding(newProduct, addProductButton) {
	$(newProduct).keyup(function(event) {
		if(event.keyCode == 13 || event.which == 13) {
			$(addProductButton).click();
		}
	});
}

function addAddProductButtonListener(newProduct, addProductButton, removeAddedProductButton) {
	$(addProductButton).click(function(event) {
		if($(newProduct).val() == '') {
			return;
		}

		var addedProduct;

		$.ajax({
			url: ROOT + '/snippets/addedProductSnippet',
			type: 'GET',
			dataType: 'html'
		}).done(function(data) {
			$('.list-new .list-group .list-group-item:last-child').before(data);
			
			addedProduct = $('.list-new .list-group .list-group-item:nth-last-child(2)');

			var id = new Date().getTime();
			$(addedProduct).attr('id', id);
			$(removeAddedProductButton, addedProduct).data('target', id);

			$(removeAddedProductButton, addedProduct).click(function(event) {
				var target = $(this).data('target');
				$('#' + target).remove();
			});
			
			$('input', addedProduct).val($(newProduct).val());
			$(newProduct).val('');
			$(newProduct).focus();
		});
	});
}
