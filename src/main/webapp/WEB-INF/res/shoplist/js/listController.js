$(document).ready(function(){
	var newProduct = $('#new-list-product');
	var saveProductButton = $('#save-new-product-btn');
	var removeSavedProductButton = '#remove-saved-product-btn';
	var root = $('meta[name="contextPath"]').attr('content');

	addSaveNewListButtonListener(root);
	bindEnterPressForProductAdding(newProduct, saveProductButton);
	addSaveProductButtonListener(root, newProduct, saveProductButton, removeSavedProductButton);
});

function addSaveNewListButtonListener(root) {
	$('.save-new-list-btn').click(function(event) {

		var list = {
			products:[]
		};

		$('input', '.list-new').each(function(index, item) {
			if($(item).val() !== "") {
				list.products.push($(item).val());
			}
		});

		$.ajax({
			url: root + '/api/lists',
			type: 'POST',
			dataType: 'json',
			data: 'content=' + JSON.stringify(list)
		})
		.done(function(data) {
			//refresh the main page, display the saved list next to new one form 
			window.location.replace(window.location.protocol + "//" + window.location.host + root + "/");
		})
		.fail(function() {
			//TODO: think on this
		})
		
	});
}

function bindEnterPressForProductAdding(newProduct, saveProductButton) {
	$(newProduct).keyup(function(event) {
		if(event.keyCode == 13 || event.which == 13) {
			$(saveProductButton).click();
		}
	});
}

function addSaveProductButtonListener(root, newProduct, saveProductButton, removeSavedProductButton) {
	$(saveProductButton).click(function(event) {
		var savedProduct;

		$.ajax({
			url: root + '/snippets/savedProductSnippet',
			type: 'GET',
			dataType: 'html'
		}).done(function(data) {
			$('.list-group .list-group-item:last-child').before(data);
			
			savedProduct = $('.list-group .list-group-item:nth-last-child(2)');

			var id = new Date().getTime();
			$(savedProduct).attr('id', id);
			$(removeSavedProductButton, savedProduct).data('target', id);

			$(removeSavedProductButton, savedProduct).click(function(event) {
				var target = $(this).data('target');
				$('#' + target).remove();
			});
			
			$('input', savedProduct).val($(newProduct).val());
			$(newProduct).val('');
			$(newProduct).focus();
		});
	});
}
