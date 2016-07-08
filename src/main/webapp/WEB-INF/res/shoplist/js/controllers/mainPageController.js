'use strict';

import addProductToNewList from '../eventHandlers/click/addProductToNewList';
import addProductToNewList from '../eventHandlers/click/saveList';
import getListsForCurrentUser from '../eventHandlers/apiCalls/getListsForCurrentUser';
import createSavedLists from '../builders/createSavedLists';

$(document).ready(function() {
	let addProductButton = $('#sl-add-product-btn');
	let newProduct = $('#sl-new-product');
	let saveListButton = $('#sl-save-list-btn');
	let hasSavedLists = $('meta[name="hasSavedLists"]').attr('content');

	$(addProductButton).click(function(event) {
		addProductToNewList(newProduct);
	});

	$(newProduct).keyup(function(event) {
		if(event.keyCode == 13 || event.which == 13) {
			$(addProductButton).click();
		}
	});

	$(saveListButton).click(function(event) {
		saveList();
	});

	if(hasSavedLists) {
		let lists = {};
		getListsForCurrentUser()
			.done(function(data) {
				lists = data;
				createSavedLists(lists);
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
 				alert('fail getting lists for current user');
			});
	}
});