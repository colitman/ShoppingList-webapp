'use strict';

function ListsController () {

	this.listService = new ListService();
	this.listBuilder = new ListBuilder();
}

ListsController.prototype
	.getList = function(id) {
		var instance = this;
		this.listService.getList(id)
			.done(function (data) {
				var listForm = $('#' + data.key + SAVED_LIST_CLASS).parents('.sl-list');
				var productFormSnippet = $('.sl-snippet[data-name="saved-product"]');
				instance.listBuilder.populate(data, listForm, productFormSnippet);
				$('.sl-wait-sign').remove();
			})
			.fail(function (jqXHR, textStatus, errorThrown) {

				$(SAVED_LIST_CLASS).parents('.sl-list').remove();
				$(ALERT_WARNING).text(errorThrown);
				$(ALERT_WARNING).toggleClass('hidden');
			});
	};

ListsController.prototype
	.getSavedListsForCurrentUser = function () {

		var promise = IS_ANON?
						this.listService.getListsByAnonymousOwner(CURRENT_ANON_USER):
						this.listService.getListsByOwner(CURRENT_USER);

		var lists = [];
		var instance = this;

		promise
			.done(function (data) {
				$.merge(lists, data);
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				$(ALERT_WARNING).text(errorThrown);
				$(ALERT_WARNING).toggleClass('hidden');
			})
			.always(function() {
				
				instance.createSavedLists(lists);
			});
	};

ListsController.prototype
	.createSavedLists = function(listsData) {

		if(listsData.length === 0) {
			return;
		}

		for (var i = 0; i < listsData.length; i++) {
			var listData = listsData[i];

			if(listData.bought) {
				continue;
			}

			//pick up a snippet
			var listForm = $('.sl-snippet[data-name="saved-list"]').clone(true, true);
			$(listForm).removeClass('sl-snippet');

			//insert to proper place
			$('section#saved-lists').append(listForm);

			var productFormSnippet = $('.sl-snippet[data-name="saved-product"]');

			this.listBuilder.populate(listData, listForm, productFormSnippet);
		}

		$(SAVED_PRODUCT_CLASS).removeClass('hidden');
		$('.sl-wait-sign').remove();
	};