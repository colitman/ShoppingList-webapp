'use strict';

var protractorRoot = "./../";

/** === Sign In functionality
 * navigate to signin
 * 	check that username is empty
 * 	check that signin is disabled
 * navigate to signin?username=protractor_user
 * 	check that username contains "protractor_user"
 * 	check that signin is disabled
 * navigate to signin?error
 * 	check that username is empty
 * 	check that signin is disabled
 * 	check that signin exception is displayed
 * navigate to signin?username=protractor_user
 * enter "p@ssword" to password
 * 	check that signin is enbaled
 * press signin
 * 	check that redirected to signin?error
 * 	check that username is empty
 * 	check that signin is disabled
 * 	check that signin exception is displayed
 * enter "protractor_user" to username
 * enter "password" to password
 * press signin
 * 	check that redirected to main page
 * 	check that signed in under "protractor_user"
 * press signout
 * 	check that redirected to signin
 * 	check that anonymous
 */

var SignInPage = require(protractorRoot + "pages/SignInPage");
var SignInFormTest = require(protractorRoot + "tests/SignInFormTest");
var Assert = require(protractorRoot + "assertions/Assert");

var signInPage = new SignInPage();
var signInFormTest = new SignInFormTest();

var SignInPageTest = (function(){
	
	function SignInPageTest() {}
	
	SignInPageTest.prototype.run = function() {
		describe('Signin page', function() {
			it('should be able to navigate to ', function() {
				signInPage.visitPage('/shopping-list');
				expect(element(by.css('body')).getAttribute('data-page')).toEqual('signin');
			});
			
			it('should not allow signing in with existing username and password', function() {
				signInFormTest.setAndCheckUsername(signInFormTest.TEST_USER_NAME);
				signInFormTest.setAndCheckPassword(signInFormTest.TEST_PASSWORD);
				signInPage.signIn();
				browser.sleep(5000);
			});
			
			it('should redirect user to main page after successful sign in', function() {
				expect(element(by.css('body')).getAttribute('data-page')).toEqual('root');
			});
		});
	}
	
	return SignInPageTest;
})();

module.exports = SignInPageTest;