'use strict';

var protractorRoot = "./../";

/** === Sign Up functionality
 * navigate to sign up page+
 * 	check that password2 is disabled+
 * 	check that submit is disabled+
 * enter "protractor_user" to username
 * 	check that password2 is disabled
 * 	check that submit is disabled
 * enter "p" to password
 * 	check that password2 is enabled
 * 	check that no feedback
 * 	check that submit is disabled
 * enter "a" to password2
 * 	check that feedback failed
 * 	check that submit is disabled
 * delete value from password
 * 	check that password2 is enabled
 * 	check that feedback failed
 * 	check that submit is disabled
 * enter "a" to password
 * 	check that password2 is enabled
 * 	check that feedback successful
 * 	check that submit is enabled
 * delete value from password2
 * 	check that no feedback
 * 	check that submit is disabled
 * delete value from password
 * 	check that password2 is disabled
 * 	check that no feedback
 * 	check that submit is disabled
 * enter "password" to password
 * 	check that password2 is enabled
 * 	check that submit is disabled
 * enter "password" to password2
 * 	check that feedback successful
 * 	check that submit is enabled
 * press submit
 * 	check that navigated to signin page
 * 	check that username contains "protractor_user"
 * navigate to sign up page
 * enter "protractor_user" to username
 * enter 1 to password
 * enter 1 to password2
 * press submit
 * 	check that user exists error is displayed
 */

var SignUpPage = require(protractorRoot + "pages/SignUpPage");
var signUpPage = new SignUpPage();

var SignUpTest = (function(){
	
	function SignUpTest() {}

	SignUpTest.prototype.run = function() {
		describe('Signup page', function() {
			
			it('should be able to navigate to ', function() {
				signUpPage.visitPage('/shopping-list');
			});
			
			describe('"Password2" field', function() {
				it('should be disabled', function() {
					expect(signUpPage.password2Field.getAttribute('disabled')).toEqual('true');
				});
			});
			
			describe('"SignUp" button', function() {
				it('should be disabled', function() {
					expect(signUpPage.signUpButton.getAttribute('disabled')).toEqual('true');
				});
			});
		});
	}
	
	return SignUpTest;
})();

module.exports = SignUpTest;