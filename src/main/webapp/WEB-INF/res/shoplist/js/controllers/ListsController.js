'use strict';

function ListsController () {
	var listservice = new ListService();
}

ListsController.prototype
	.getSavedListsForCurrentUser = function () {
		var anonPromise = listService.getListsByAnonymousOwner(CURRENT_ANON_USER);
		var ownerPromise = IS_ANON? null : listService.getListsByOwner(CURRENT_USER);

		var lists = [];

		anonPromise
			.done(function (data) {
				$.merge(lists, data);
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				$(ALERT_WARNING).text(errorThrown);
				$(ALERT_WARNING).toggleClass('hidden');
			});

		if (ownerPromise) {
			ownerPromise
				.done(function (data) {
					$.merge(lists, data);
				})
				.fail(function (jqXHR, textStatus, errorThrown) {
					$(ALERT_WARNING).text(errorThrown);
					$(ALERT_WARNING).toggleClass('hidden');
				});
		}

		// retrieve only unique lists - will be checked against html via list ID
		// pick saved list snippet for each list,
		// insert to proper place,
		// populate data,
		createSavedLists(lists);
	}

ListsController.prototype
	.createSavedLists = function(listsData) {
		if(listsData.length === 0) {
			return;
		}

		for (var i = 0; i < listsData.length; i++) {
			var listData = listsData[i];

			//pick up a snippet
			var listForm = $('.sl-snippet[data-name="saved-list"]').clone();
			$(listForm).removeClass('sl-snippet');

			//insert to proper place
			$('.sl-lists .sl-list-wrapper:first-child').after(listForm);
			
			//populate data
			var listKey = listData.key;
			var listProducts = JSON.parse(listData.content);

			
		}
	}