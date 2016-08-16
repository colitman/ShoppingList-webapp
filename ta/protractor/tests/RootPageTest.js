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
		describe('Root page', function() {
			it('should be able to navigate to', function(){
				rootPage.visitPage('/shopping-list');
				expect(element(by.css('body')).getAttribute('data-page')).toEqual('root');
			});
		})
	}
	
	return RootPageTest;
})();

module.exports = RootPageTest;