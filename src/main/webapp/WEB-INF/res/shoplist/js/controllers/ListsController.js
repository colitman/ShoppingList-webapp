'use strict';

function ListsController () {
	this.listService = new ListService();
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