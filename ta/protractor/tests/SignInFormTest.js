'use strict';

var protractorRoot = "./../";

var SignInPage = require(protractorRoot + "pages/SignUpPage");
var Assert = require(protractorRoot + "assertions/Assert");

var signInPage = new SignInPage();

var SignInFormTest = (function(){
	
	function SignInFormTest() {
		this.TEST_USER_NAME = 'protractor_user';
		this.TEST_PASSWORD = 'password';
	}
	
	SignInFormTest.prototype.setAndCheckUsername = function(username) {
		signInPage.setUsername(username);
		Assert.valueEquals(signInPage.usernameField, username, 'Username was not set');
	};
	
	SignInFormTest.prototype.setAndCheckPassword = function(password) {
		signInPage.setPassword(password);
		Assert.valueEquals(signInPage.passwordField, password, 'Password was not set');
	};
	
	return SignInFormTest;
})();

module.exports = SignInFormTest;