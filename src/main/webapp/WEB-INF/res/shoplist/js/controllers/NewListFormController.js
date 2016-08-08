'use strict';

function NewListFormController () {
	this.listService = new ListService();
}

NewListFormController.prototype
	.addProduct = function(productInput){

		if($(productInput).val() === '') {
			return;
		}
		
		var product = new AddedProduct(new Date().getTime(), $(productInput).val());
		
		$('.sl-new-product-form').before(product);
	
		$(productInput).val('');
		$(productInput).focus();
		
		var instance = this;

		$(REMOVE_PRODUCT_BTN_CLASS, product).click(function(event) {
			instance.removeProduct($(this).data('target'));
		});
	};

NewListFormController.prototype
	.removeProduct = function(target) {
		$('#' + target, NEW_LIST).remove();
	};

NewListFormController.prototype
	.saveList = function(listForm) {

		var list = new List();

		list.owner = IS_ANON? -1: CURRENT_USER;
		list.anonymousOwner = IS_ANON? CURRENT_ANON_USER: '';

		$('tr', listForm).each(function(index, item) {
			
			var productName = $('input', item).val();

			if(productName !== '') {
				var product = new Product(productName);
				product.key = $(item).attr('id');
				list.content.push(product);
			}
		});

		if (list.content.length === 0) {
			return;
		}

		if(!IS_ANON) {
			list.publicList = confirm('Do you want to make this list accessible for other users?');
		}

		this.listService.saveList(list)
			.done(function() {
				window.location.replace(window.location.protocol + '//' + window.location.host + ROOT + '/');
			})
			.fail(function(jqXHR, textStatus, errorThrown) {
				$(ALERT_DANGER).text(errorThrown);
				$(ALERT_DANGER).toggleClass('hidden');
			});
	};