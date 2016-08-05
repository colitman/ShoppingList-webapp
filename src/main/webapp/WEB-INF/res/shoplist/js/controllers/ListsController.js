'use strict';

function ListsController () {

	this.listService = new ListService();
	//this.listBuilder = new ListBuilder();
}

/**
 * Loads a collection of lists.
 * If none of {@link statuses} or {@link ignoredStatuses} are specified, lists with all statuses are returned
 *
 * @param options - lists load filtering.
 * <ul>
 * <li><i>isForCurrentUser</i> - whether to load lists, whose owner is a current user. Defaults to true</li>
 * <li><i>owner</i> - lists owner. Ignored if {@link isForCurrentUser} is set to true.</li>
 * <li><i>statuses</i> - statuses of list to filter</li>
 * <li><i>ignoredStatuses</i> - lists with these statuses will not be loaded. Ignored if {@link statuses} are specified</li>
 * </ul>
 */
ListsController.prototype.getLists = function(options) {
	var optionValues = {
		isForCurrentUser:	true,
		owner:	'',
		statuses:	'',
		ignoredStatuses: ''
	}
	
	for(var param in optionValues) {
		if(typeof options[param] == 'undefined') options[param] = optionValues[param];
	}
	
	var owner = options['isForCurrentUser']? !IS_ANON? CURRENT_USER: null: options[owner];
	var shopper = options['isForCurrentUser']? IS_ANON? CURRENT_ANON_USER: null: null;
	
	return this.listService.getLists({
		owner:	owner,
		shopper:	shopper,
		statuses:	options[statuses],
		ignoredStatuses:	options[ignoredStatuses]
	});
}

/**
 * Loads a list with provided id
 * @param id - id of list to load
 */
ListsController.prototype.getList = function(id) {
	return this.listService.getList(id);
}
/* end of reviwed
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
	};*/
/*
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
	};*/
/*
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
	};*/