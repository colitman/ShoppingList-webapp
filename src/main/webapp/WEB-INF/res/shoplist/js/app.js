'use strict';

var ROOT = $('meta[name="contextPath"]').attr('content');
var CURRENT_USER = $('meta[name="currentUser"]').attr('content');
var CURRENT_ANON_USER = Cookies.get('shopper');
var IS_ANON = !CURRENT_USER || CURRENT_USER.length === 0;

var AUTH_FORM = $('.sl-auth-form');

var NEW_LIST = $('#sl-new-list article');
var NEW_PRODUCT = $('#sl-new-product-form input', NEW_LIST);
var ADD_PRODUCT_BTN = $('#sl-new-product-form button', NEW_LIST);
var REMOVE_PRODUCT_BTN_CLASS = '.sl-remove-product-btn';
var SAVE_LIST_BTN = $('.sl-list-action-btn', NEW_LIST);

var CHANGE_PRODUCT_STATUS_BTN_CLASS = '.sl-product-status-btn';
var BUY_LIST_BTN_CLASS = '.sl-buy-list-btn';

var SAVED_LIST = '#sl-saved-lists article';

var LIST_SEARCH_FORM = $('#sl-list-search-form');

var ALERT_SUCCESS = $('footer .alert-success');
var ALERT_INFO = $('footer .alert-info');
var ALERT_WARNING = $('footer .alert-warning');
var ALERT_DANGER = $('footer .alert-danger');

$(document).ready(function() {
	setMinHeight();
	$(window).resize(function(event) {
		setMinHeight();
	});

	$(LIST_SEARCH_FORM).submit(function(event) {
		event.preventDefault();
		var id = $('#listId', this).val();
		window.location.replace(window.location.protocol + '//' + window.location.host + $(this).attr('action') + id);
	});
});

function setMinHeight() {
	var page = $('body > .container');

	var nav = $('nav', page);
	var content = $('main', page);
	var footer = $('body > .container > footer');

	var contentMinHeight;

	contentMinHeight = $(window).height() - $(nav).outerHeight(true) - $(footer).outerHeight(true);

	$(content).css('min-height', contentMinHeight);
}