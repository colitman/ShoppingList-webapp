'use strict';

function NewListFormController () {
	this.listService = new ListService();
}

NewListFormController.prototype
	.addProduct = function(productInput){

		if($(productInput).val() === '') {
			return;
		}
		// pick added product snippet,
		var product = $('.sl-snippet[data-name="added-product"]').clone();
		$(product).removeClass('sl-snippet');
		
		// insert to proper place,
		$('.list-group-item:last-child', NEW_LIST).before(product);
		
		// populate data,
		$('input', product).val($(productInput).val());
		$(productInput).val('');
		$(productInput).focus();
		
		// assign "remove product" event
		var productId = new Date().getTime();
		$(product).attr('id', productId);
		$('input', product).data('product-id', productId);
		$(REMOVE_PRODUCT_BTN_CLASS, product).data('target', productId);

		var instance = this;

		$(REMOVE_PRODUCT_BTN_CLASS, product).click(function(event) {
			instance.removeProduct(this);
		});
	};

NewListFormController.prototype
	.removeProduct = function(removeButton) {
		
		// get button target id,
		var target = $(removeButton).data('target');
		
		// remove the element with this id
		$('#' + target, NEW_LIST).remove();
	};

NewListFormController.prototype
	.saveList = function(listForm) {

		var list = new List();

		list.owner = IS_ANON? -1: CURRENT_USER;
		list.anonymousOwner = CURRENT_ANON_USER;

		$('input', listForm).each(function(index, item) {
			
			var productName = $(item).val();

			if(productName !== '') {
				var product = new Product(productName);
				product.key = $(item).data('product-id');
				list.content.push(product);
			}
		});

		if (list.content.length === 0) {
			return;
		}

		this.listService.saveList(list)
			.done(function(data) {
				//refresh the main page, display the saved list next to new one form 
				window.location.replace(window.location.protocol + '//' + window.location.host + ROOT + '/');
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				$(ALERT_DANGER).text(errorThrown);
				$(ALERT_DANGER).toggleClass('hidden');
			});
	};