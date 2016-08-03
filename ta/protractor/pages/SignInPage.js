var SignInPage = (function(){
	'use strict';

	function SignInPage() {
		this.usernameField = element(by.css('input#username'));
		this.passwordField = element(by.css('input#password'));
		this.signInButton = element(by.css('.sl-auth-button'));
		this.signUpLink = element(by.css('#sign-up-link'));
		this.resetPwdLink = element(by.css('#reset-pwd-link'));
	}

	SignInPage.prototype
		.visitPage = function(appRoot) {
			browser.get(appRoot + "/signin");
		}

	SignInPage.prototype
		.setUsername = function(username) {
			this.usernameField.sendKeys(username);
		}

	SignInPage.prototype
		.setPassword = function(password) {
			this.passwordField.sendKeys(password);
		}

	SignInPage.prototype
		.signIn = function() {
			this.signInButton.click();
		}

	SignInPage.prototype
		.signUp = function() {
			this.signUpLink.click();
		}

	SignInPage.prototype
		.resetPassword = function() {
			this.resetPwdLink.click();
		}

	return SignInPage;
})();

module.exports = SignInPage;