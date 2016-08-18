'use strict';

var protractorRoot = "./../";

var SignUpPage = require(protractorRoot + "pages/SignUpPage");
var SignInPage = require(protractorRoot + "pages/SignInPage");
var SignUpFormTest = require(protractorRoot + "tests/SignUpFormTest");
var Assert = require(protractorRoot + "assertions/Assert");

var signUpPage = new SignUpPage();
var signInPage = new SignInPage();
var signUpFormTest = new SignUpFormTest();

var SignUpPageTest = (function(){
	
	function SignUpPageTest() {}
	
	SignUpPageTest.prototype.run = function() {
		describe('Signup page', function() {
			it('should be able to navigate to ', function() {
				signUpPage.visitPage('/shopping-list');
				expect(element(by.css('body')).getAttribute('data-page')).toEqual('signup');
			});
			
			signUpFormTest.baseFormBehavior();
			signUpFormTest.passwordsValidationBehavior();
			
			it('should allow signing up a new user', function() {
				signUpFormTest.setAndCheckUsername(signUpFormTest.TEST_USER_NAME);
				signUpFormTest.setAndCheckPassword(signUpFormTest.TEST_PASSWORD);
				signUpFormTest.setAndCheckPassword2(signUpFormTest.TEST_PASSWORD);
				signUpPage.signUp();
				browser.sleep(5000);
			});
			
			it('should redirect user to sign in page after successful sign up', function() {
				expect(element(by.css('body')).getAttribute('data-page')).toEqual('signin');
				Assert.valueEquals(signInPage.usernameField, signUpFormTest.TEST_USER_NAME, 'Just signed up user should see the entered username in input.');
			});
			
			it('should not allow signing up a new user with existing username', function() {
				signUpPage.visitPage('/shopping-list');
				signUpFormTest.setAndCheckUsername(signUpFormTest.TEST_USER_NAME);
				signUpFormTest.setAndCheckPassword(signUpFormTest.TEST_PASSWORD);
				signUpFormTest.setAndCheckPassword2(signUpFormTest.TEST_PASSWORD);
				signUpPage.signUp();
				browser.sleep(5000);
				Assert.notHasClass(signUpPage.alert, 'hidden', 'Error message should be displayed when trying to sign up with existing username');
			});
		});
	};
	
	return SignUpPageTest;
})();

module.exports = SignUpPageTest;