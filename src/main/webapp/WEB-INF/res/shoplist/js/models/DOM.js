/**
 * Created by dmytro.romenskyi on 8/4/2016.
 */
'use strict';

function AddedProduct(id, name) {
	var tr = $(document.createElement('tr'));
	var td = $(document.createElement('td'));
	var div = $(document.createElement('div'));
	var input = $(document.createElement('input'));
	var span = $(document.createElement('span'));
	var button = $(document.createElement('button'));
	var i = $(document.createElement('i'));
	
	$(tr).append(td);
	$(td).append(div);
	$(div).append(input);
	$(div).append(span);
	$(div).append(button);
	$(button).append(i);
	
	$(div).addClass('input-group input-group-sm');
	$(input).addClass('form-control');
	$(input).attr('type', 'text');
	$(input).attr('placeholder', 'Product and amount');
	$(span).addClass('input-group-btn');
	$(button).attr('type', 'button');
	$(button).addClass('btn btn-default sl-remove-product-btn');
	$(i).addClass('fa fa-remove');
	
	return tr;
}

function SavedProduct(id, name, bought) {
	var tr = $(document.createElement('tr'));
	var tdName = $(document.createElement('td'));
	var tdActions = $(document.createElement('td'));
	var button = $(document.createElement('button'));
	var i = $(document.createElement('i'));
	
	$(tr).append(tdName);
	$(tr).append(tdActions);
	$(tdActions).append(button);
	$(button).append(i);
	
	$(tdName).addClass('col-xs-10 sl-product-name');
	$(tdActions).addClass('col-xs-2 sl-product-actions');
	$(button).attr('type', 'button');
	$(button).addClass('btn sl-product-status-btn');
	$(i).addClass('fa');
	
	return tr;
}

function SavedList(id, bought) {
	var article = $(document.createElement('article'));
	
	return article;
}

/*
function SavedList() {}


function SavedProduct() {}

SavedProduct.prototype.skeleton =	'<tr>' +
										'<td>' +
											'<div class="input-group input-group-sm">' +
												'<input type="text" class="form-control" placeholder="Product and amount">' +
												'<span class="input-group-btn">' +
													'<button type="button" class="btn btn-default sl-remove-product-btn"><i class="fa fa-remove"></i></button>' +
												'</span>' +
											'</div>' +
										'</td>' +
									'</tr>';
SavedProduct.prototype.bought = '';
SavedProduct.prototype.name = '';
SavedProduct.prototype.id = '';

SavedProduct.prototype.setId = function(id) {
	this.id = id;
}

SavedProduct.prototype.getId = function() {
	return this.id;
}

SavedProduct.prototype.setName = function(name) {
	this.name = name;
}

SavedProduct.prototype.getName = function() {
	return this.name;
}

SavedProduct.prototype.setBought = function(bought) {
	this.bought = bought;
}

SavedProduct.prototype.build = function() {

}


/*
function AddedProduct_depr() {}

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
	
	$(jTr).attr('id', this.id);
	
	$(REMOVE_PRODUCT_BTN_CLASS, jTr).data('target', this.id);
	
	return jTr;
}*/