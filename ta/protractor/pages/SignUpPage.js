var SignUpPage = (function(){
	'use strict';

	function SignUpPage() {
		this.usernameField = element(by.css('input#username'));
		this.passwordField = element(by.css('input#password'));
		this.password2Field = element(by.css('input#password2'));
		this.signUnButton = element(by.css('.sl-auth-button'));
		this.signIpLink = element(by.css('#sign-in-link'));
	}

	SignUpPage.prototype
		.visitPage = function(appRoot) {
			browser.get(appRoot + "/signup");
		}

	SignUpPage.prototype
		.setUsername = function(username) {
			this.usernameField.sendKeys(username);
		}

	SignUpPage.prototype
		.setPassword = function(password) {
			this.passwordField.sendKeys(password);
		}

	SignUpPage.prototype
		.setPassword2 = function(password) {
			this.password2Field.sendKeys(password);
		}

	SignUpPage.prototype
		.signUp = function() {
			this.signUpButton.click();
		}

	SignUpPage.prototype
		.signIn = function() {
			this.signInLink.click();
		}

	return SignUpPage;
})();

module.exports = SignUpPage;