var RootPage = (function(){
	'use strict';

	function RootPage() {
		this.newProductInput = element(by.css('#sl-new-product-form input'));
		this.addProductButton = element(by.css('#sl-new-product-form button'));
		this.saveListButton = element(by.css('#sl-new-list article .sl-list-action-btn'));
	}
	
	RootPage.prototype
		.visitPage = function(appRoot) {
			browser.get(appRoot + "/");
		}
	
	RootPage.prototype
		.setProductName = function(name) {
			this.newProductInput.clear();
			this.newProductInput.sendKeys(name);
		}
	
	RootPage.prototype
		.addProduct = function() {
		this.addProductButton.click();
		}
	
	RootPage.prototype
		.saveList = function() {
		this.saveListButton.click();
		}

	return RootPage;
})();

module.exports = RootPage;