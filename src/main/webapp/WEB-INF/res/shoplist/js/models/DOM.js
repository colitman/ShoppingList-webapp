/**
 * Created by dmytro.romenskyi on 8/4/2016.
 */
'use strict';

function AddedProduct() {
	var instance = function() {
		
		return
	}
	
	return $(instance);
}

AddedProduct.prototype.skeleton =	'<tr>' +
										'<td>' +
											'<div class="input-group input-group-sm">' +
												'<input type="text" class="form-control" placeholder="Product and amount">' +
												'<span class="input-group-btn">' +
													'<button type="button" class="btn btn-default sl-remove-product-btn"><i class="fa fa-remove"></i></button>' +
												'</span>' +
											'</div>' +
										'</td>' +
									'</tr>';
AddedProduct.prototype.name = '';
AddedProduct.prototype.id = '';

AddedProduct.prototype.setId = function(id) {
	this.id = id;
}

AddedProduct.prototype.getId = function() {
	return this.id;
}

AddedProduct.prototype.setName = function(name) {
	this.name = name;
}

AddedProduct.prototype.getName = function() {
	return this.name;
}

AddedProduct.prototype.build = function() {
	var tr = document.createElement('tr');
	var jTr = $(tr);
	$(jTr).append(this.skeleton);
	$('input', jTr).val(this.name);
	$('input', jTr).data('product-id', this.id);
	
	$(jTr).attr('id', this.id);
	
	$(REMOVE_PRODUCT_BTN_CLASS, jTr).data('target', this.id);
	
	return jTr;
}