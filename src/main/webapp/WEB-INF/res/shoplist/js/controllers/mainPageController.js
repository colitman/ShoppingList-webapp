'use strict';

$(document).ready(function() {
	mainPageController()
});

function mainPageController() {
	var addProductButton = $('#sl-add-product-btn');
	var newProduct = $('#sl-new-product');
	var saveListButton = $('#sl-save-list-btn');
	var hasSavedLists = $('meta[name="hasSavedLists"]').attr('content');

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
		var lists = {};
		getListsForCurrentUser()
			.done(function(data) {
				lists = data;
				createSavedLists(lists);
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				alert('fail getting lists for current user');
			});
	}
}