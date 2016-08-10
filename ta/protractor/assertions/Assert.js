var Assert = (function(){
	'use strict';

	function Assert() {
		
	}
	
	Assert.disabled = function(element, failMessage) {
		expect(element.getAttribute('disabled')).toEqual('true', failMessage);
	}
	
	Assert.enabled = function(element, failMessage) {
		expect(element.getAttribute('disabled')).toBeNull(failMessage);
	}
	
	Assert.valueEquals = function(element, expectedValue, failMessage) {
		expect(element.getAttribute('value')).toEqual(expectedValue, failMessage);
	}
	
	Assert.classEquals = function(element, expectedClass, failMessage) {
		expect(element.getAttribute('class')).toEqual(expectedClass, failMessage);
	}
	
	Assert.hasClass = function(element, expectedClass, failMessage) {
		expect(element.getAttribute('class')).toContain(expectedClass, failMessage);
	}
	
	Assert.notHasClass = function(element, notExpectedClass, failMessage) {
		expect(element.getAttribute('class')).not.toContain(notExpectedClass, failMessage);
	}

	return Assert;
})();

module.exports = Assert;