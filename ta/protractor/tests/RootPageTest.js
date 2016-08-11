'use strict';

/** === Root page functionality
 */

var protractorRoot = "./../";

var RootPage = require(protractorRoot + "pages/RootPage");
var Assert = require(protractorRoot + "assertions/Assert");

var rootPage = new RootPage();

var RootPageTest = (function(){
	
	function RootPageTest() {}
	
	RootPageTest.prototype.run = function() {
		describe('smoke', function() {
			it('should work', function(){
				rootPage.visitPage('/shopping-list');
				browser.sleep(5000);
				rootPage.setProductName('bread');
				rootPage.addProduct();
				rootPage.saveList();
			});
		})
	}
	
	return RootPageTest;
})();

module.exports = RootPageTest;