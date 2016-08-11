'use strict';

var protractorRoot = "./../";

var SignUpPage = require(protractorRoot + "pages/SignUpPage");
var Assert = require(protractorRoot + "assertions/Assert");

var signUpPage = new SignUpPage();

var SignUpFormTest = (function(){
	
	function SignUpFormTest() {
		this.TEST_USER_NAME = 'protractor_user';
		this.TEST_PASSWORD = 'password';
	}
	
	SignUpFormTest.prototype.setAndCheckUsername = function(username) {
		signUpPage.setUsername(username);
		Assert.valueEquals(signUpPage.usernameField, username, 'Username was not set');
	};
	
	SignUpFormTest.prototype.setAndCheckPassword = function(password) {
		signUpPage.setPassword(password);
		Assert.valueEquals(signUpPage.passwordField, password, 'Password was not set');
	};
	
	SignUpFormTest.prototype.setAndCheckPassword2 = function(password) {
		signUpPage.setPassword2(password);
		Assert.valueEquals(signUpPage.password2Field, password, 'Password2 was not set');
	};
	
	SignUpFormTest.prototype.baseFormBehavior = function() {
		var instance = this;
		
		it('should have proper initial state', function() {
			Assert.disabled(signUpPage.password2Field, 'Password2 field should be disabled');
			Assert.disabled(signUpPage.signUpButton, 'Sign Up button should be disabled');
		});
		
		it('should allow entering username', function() {
			instance.setAndCheckUsername(instance.TEST_USER_NAME);
			Assert.disabled(signUpPage.password2Field, 'Password2 field should not be enabled');
			Assert.disabled(signUpPage.signUpButton, 'Sign Up button should be disabled unless both passwords entered and are equal');
		});
		
		it('should allow entering password', function() {
			instance.setAndCheckPassword(instance.TEST_PASSWORD);
			Assert.enabled(signUpPage.password2Field, 'Password2 should be enabled if password is not empty');
			Assert.classEquals(signUpPage.feedback, 'has-feedback', 'There should be no feedback if Password2 is empty');
			Assert.disabled(signUpPage.signUpButton, 'Sign Up button should be disabled unless both passwords entered and are equal');
		});
		
		it('should allow entering password2', function() {
			instance.setAndCheckPassword2(instance.TEST_PASSWORD);
			Assert.hasClass(signUpPage.feedback, 'has-success', 'Feedback should success if passwords are equal');
			Assert.enabled(signUpPage.signUpButton, 'Sign Up button should be enabled if both passwords entered and are equal');
		});
		
		it('should allow signin up', function() {
			Assert.enabled(signUpPage.signUpButton, 'Sign Up button should be enabled if both passwords entered and are equal');
			/*signUpPage.setPassword2('');
			signUpPage.setPassword('');
			signUpPage.setUsername('');*/
		});
	};
	
	SignUpFormTest.prototype.passwordsValidationBehavior = function() {
		
		var instance = this;
		
		it('should have proper initial state', function() {
			Assert.enabled(signUpPage.passwordField, 'Password field should be enabled');
			Assert.disabled(signUpPage.password2Field, 'Password2 field should be disabled');
			Assert.disabled(signUpPage.signUpButton, 'Sign Up button should be disabled');
		});
		
		it('should properly process password combinations', function() {
			instance.setAndCheckPassword('a');
			Assert.enabled(signUpPage.password2Field, 'Password2 field should be enabled if password is entered');
			Assert.classEquals(signUpPage.feedback, 'has-feedback', 'There should be no feedback if Password is entered but Password2 is empty');
			Assert.disabled(signUpPage.signUpButton, 'Sign Up button should be disabled unless both passwords entered and are equal');
			
			instance.setAndCheckPassword2('a');
			Assert.hasClass(signUpPage.feedback, 'has-success', 'Feedback should success if passwords are equal');
			Assert.enabled(signUpPage.signUpButton, 'Sign Up button should be enabled if both passwords entered and are equal');
			
			instance.setAndCheckPassword2('b');
			Assert.hasClass(signUpPage.feedback, 'has-error', 'Feedback should fail if passwords are not equal');
			Assert.disabled(signUpPage.signUpButton, 'Sign Up button should be disabled unless both passwords entered and are equal');
			
			instance.setAndCheckPassword2('ba');
			Assert.hasClass(signUpPage.feedback, 'has-error', 'Feedback should fail if passwords are not equal');
			Assert.disabled(signUpPage.signUpButton, 'Sign Up button should be disabled unless both passwords entered and are equal');
			
			instance.setAndCheckPassword2('');
			instance.setAndCheckPassword('ab');
			Assert.enabled(signUpPage.password2Field, 'Password2 field should be enabled if password is entered');
			Assert.classEquals(signUpPage.feedback, 'has-feedback', 'There should be no feedback if Password is entered but Password2 is empty');
			Assert.disabled(signUpPage.signUpButton, 'Sign Up button should be disabled unless both passwords entered and are equal');
			
			instance.setAndCheckPassword2('a');
			Assert.hasClass(signUpPage.feedback, 'has-error', 'Feedback should fail if passwords are not equal');
			Assert.disabled(signUpPage.signUpButton, 'Sign Up button should be disabled unless both passwords entered and are equal');
			
			instance.setAndCheckPassword2('ac');
			Assert.hasClass(signUpPage.feedback, 'has-error', 'Feedback should fail if passwords are not equal');
			Assert.disabled(signUpPage.signUpButton, 'Sign Up button should be disabled unless both passwords entered and are equal');
			
			instance.setAndCheckPassword2('ab');
			Assert.hasClass(signUpPage.feedback, 'has-success', 'Feedback should success if passwords are equal');
			Assert.enabled(signUpPage.signUpButton, 'Sign Up button should be enabled if both passwords entered and are equal');
			
			instance.setAndCheckPassword('');
			Assert.enabled(signUpPage.password2Field, 'Password2 field should be enabled if it is not empty, even when password is empty');
			Assert.hasClass(signUpPage.feedback, 'has-error', 'Feedback should fail if passwords are not equal');
			Assert.disabled(signUpPage.signUpButton, 'Sign Up button should be disabled unless both passwords entered and are equal');
			
			instance.setAndCheckPassword2('a');
			Assert.hasClass(signUpPage.feedback, 'has-error', 'Feedback should fail if passwords are not equal');
			Assert.disabled(signUpPage.signUpButton, 'Sign Up button should be disabled unless both passwords entered and are equal');
			
			instance.setAndCheckPassword2('');
			Assert.disabled(signUpPage.password2Field, 'Password2 field should be disabled if it is empty and password is empty');
			Assert.classEquals(signUpPage.feedback, 'has-feedback', 'There should be no feedback if both Password and Password2 are empty');
			Assert.disabled(signUpPage.signUpButton, 'Sign Up button should be disabled unless both passwords entered and are equal');
		});
	};
	
	return SignUpFormTest;
})();

module.exports = SignUpFormTest;