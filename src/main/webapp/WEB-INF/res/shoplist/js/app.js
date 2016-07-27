'use strict';

var ROOT = $('meta[name="contextPath"]').attr('content');
var CURRENT_USER = $('meta[name="currentUser"]').attr('content');
var CURRENT_ANON_USER = Cookies.get('shopper');
var IS_ANON = (!CURRENT_USER || CURRENT_USER.length === 0)? true: false;

var AUTH_FORM = $('.sl-auth-form');

var NEW_LIST = $('#sl-new-list');
var NEW_PRODUCT = $('#sl-new-product', NEW_LIST);
var ADD_PRODUCT_BTN = $('#sl-add-product-btn', NEW_LIST);
var SAVE_LIST_BTN = $('#sl-save-list-btn', NEW_LIST);

var REMOVE_PRODUCT_BTN_CLASS = '.sl-remove-product-btn';

var SAVED_LIST_CLASS = '.sl-saved-list';
var SAVED_PRODUCT_CLASS = '.sl-saved-product';
var CHANGE_PRODUCT_STATUS_BTN_CLASS = '.sl-product-status-btn';
var BUY_LIST_BTN_CLASS = '.sl-buy-list-btn';

var ALERT_SUCCESS = $('footer .alert-success');
var ALERT_INFO = $('footer .alert-info');
var ALERT_WARNING = $('footer .alert-warning');
var ALERT_DANGER = $('footer .alert-danger');


$(document).ready(function() {
	setMinHeight();
	$(window).resize(function(event) {
		setMinHeight();
	});
});

function setMinHeight() {
	var page = $('.sl-page');

	var nav = $('nav', page);
	var content = $('.sl-main-content', page);
	var footer = $('footer', page);

	var contentMinHeight;

	contentMinHeight = $(window).height() - $(nav).outerHeight(true) - $(footer).outerHeight(true);

	$(content).css('min-height', contentMinHeight);
}