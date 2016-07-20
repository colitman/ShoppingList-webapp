'use strict';

function SavedListFormController () {
	var listservice = new ListService();
}

SavedListFormController.prototype
	.getListsForCurrentUser = function() {
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

		// retrieve only unique lists
		// pick saved list snippet for each list,
		// insert to proper place,
		// populate data,
		// assign events
		createSavedLists(lists);
	};

