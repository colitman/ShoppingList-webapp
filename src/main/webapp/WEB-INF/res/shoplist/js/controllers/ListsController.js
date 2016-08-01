'use strict';

function ListsController () {
														LOGGER.debug('ListsController initialized');
	this.listService = new ListService();
	this.listBuilder = new ListBuilder();
}

ListsController.prototype
	.getList = function(id) {
		var instance = this;
		this.listService.getList(id)
			.done(function (data) {
				var listForm = $('#' + data.key + SAVED_LIST_CLASS).parents('.sl-list-wrapper');
				var productFormSnippet = $('.sl-snippet[data-name="saved-product"]');
				instance.listBuilder.populate(data, listForm, productFormSnippet);
				$('.sl-wait-sign').remove();
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
														LOGGER.debug('Promise getting failed');
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
											LOGGER.debug('Initiating DOM creation for saved lists');
				instance.createSavedLists(lists);
			});
	};

ListsController.prototype
	.createSavedLists = function(listsData) {
														LOGGER.debug('Trying to create saved lists DOM');
		if(listsData.length === 0) {
														LOGGER.debug('No saved lists. Exiting.');
			return;
		}
														LOGGER.debug('Start iterating over saved lists data');
		for (var i = 0; i < listsData.length; i++) {
			var listData = listsData[i];
														LOGGER.debug('List index [' + i + ']');

			if(listData.bought) {
				continue;
			}

			//pick up a snippet
			var listForm = $('.sl-snippet[data-name="saved-list"]').clone(true, true);
			$(listForm).removeClass('sl-snippet');
														LOGGER.debug('Picked up a snippet for saved list.');

			//insert to proper place
			$('.sl-lists .sl-list-wrapper:first-child').after(listForm);

			var productFormSnippet = $('.sl-snippet[data-name="saved-product"]');

			this.listBuilder.populate(listData, listForm, productFormSnippet);
		}

		$(SAVED_PRODUCT_CLASS).removeClass('hidden');
		$('.sl-wait-sign').remove();
	};