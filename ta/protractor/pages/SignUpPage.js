var SignUpPage = (function(){
	'use strict';

	function SignUpPage() {
		this.usernameField = element(by.css('input#username'));
		this.passwordField = element(by.css('input#password'));
		this.password2Field = element(by.css('input#password2'));
		this.signUpButton = element(by.css('.sl-auth-button'));
		this.signInLink = element(by.css('#sign-in-link'));
		this.feedback = element(by.css('.has-feedback'));
		this.alert = element(by.css('.sl-auth-form .alert'));
	}

	SignUpPage.prototype
		.visitPage = function(appRoot) {
			browser.get(appRoot + "/signup");
		}

	SignUpPage.prototype
		.setUsername = function(username) {
			this.usernameField.clear();
			this.usernameField.sendKeys(username);
		}

	SignUpPage.prototype
		.setPassword = function(password) {
			this.passwordField.clear();
			if(password !== '') {
				this.passwordField.sendKeys(password);
			} else {
				this.passwordField.sendKeys(protractor.Key.BACK_SPACE);
			}
		}

	SignUpPage.prototype
		.setPassword2 = function(password) {
			this.password2Field.clear();
			if(password !== '') {
				this.password2Field.sendKeys(password);
			} else {
				this.password2Field.sendKeys(protractor.Key.BACK_SPACE);
			}
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