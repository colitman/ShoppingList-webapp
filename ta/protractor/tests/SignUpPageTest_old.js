'use strict';

var protractorRoot = "./../";

/** === Sign Up functionality
 * navigate to sign up page					+
 * 	check that password2 is disabled		+
 * 	check that submit is disabled			+
 * enter "protractor_user" to username		+
 * 	check that password2 is disabled		+
 * 	check that submit is disabled			+
 * enter "p" to password					+
 * 	check that password2 is enabled			+
 * 	check that no feedback					+
 * 	check that submit is disabled			+
 * enter "a" to password2					+
 * 	check that feedback failed				+
 * 	check that submit is disabled			+
 * delete value from password				+
 * 	check that password2 is enabled			+
 * 	check that feedback failed				+
 * 	check that submit is disabled			+
 * enter "a" to password					+
 * 	check that password2 is enabled			+
 * 	check that feedback successful			+
 * 	check that submit is enabled			+
 * delete value from password2				+
 * 	check that no feedback					+
 * 	check that submit is disabled			+
 * delete value from password				+
 * 	check that password2 is disabled		+
 * 	check that no feedback					+
 * 	check that submit is disabled			+
 * enter "password" to password				+
 * 	check that password2 is enabled			+
 * 	check that submit is disabled			+
 * enter "password" to password2			+
 * 	check that feedback successful			+
 * 	check that submit is enabled			+
 * press submit								+
 * 	check that navigated to signin page
 * 	check that username contains "protractor_user"
 * navigate to sign up page					+
 * enter "protractor_user" to username		+
 * enter 1 to password						+
 * enter 1 to password2						+
 * press submit								+
 * 	check that user exists error is displayed +
 */

var SignUpPage = require(protractorRoot + "pages/SignUpPage");
var signUpPage = new SignUpPage();

var SignUpPageTest = (function(){
	
	function SignUpPageTest() {}
	
	SignUpPageTest.prototype.run = function() {
		describe('Signup page', function() {
			
			it('should be able to navigate to ', function() {
				signUpPage.visitPage('/shopping-list');
				expect(element(by.css('body')).getAttribute('data-page')).toEqual('signup');
				expect(signUpPage.password2Field.getAttribute('disabled')).toEqual('true');
				expect(signUpPage.signUpButton.getAttribute('disabled')).toEqual('true');
			});
		});
		
		describe('User', function() {
			it('should be able to enter username', function() {
				signUpPage.setUsername('protractor_user');
				expect(signUpPage.usernameField.getAttribute('value')).toEqual('protractor_user');
				expect(signUpPage.password2Field.getAttribute('disabled')).toEqual('true');
				expect(signUpPage.signUpButton.getAttribute('disabled')).toEqual('true');
			});
		});
		
		describe('User', function() {
			it('should be able to enter password', function() {
				signUpPage.setPassword('p');
				expect(signUpPage.passwordField.getAttribute('value')).toEqual('p');
				expect(signUpPage.password2Field.getAttribute('disabled')).toBeNull();//.toBe('false');
				expect(element(by.css('.has-feedback')).getAttribute('class')).toEqual('has-feedback');
				expect(signUpPage.signUpButton.getAttribute('disabled')).toEqual('true');
			});
		});
		
		describe('User', function() {
			it('should be able to enter password2', function() {
				signUpPage.setPassword2('a');
				expect(signUpPage.password2Field.getAttribute('value')).toEqual('a');
				expect(element(by.css('.has-feedback')).getAttribute('class')).toContain('has-error');
				expect(signUpPage.signUpButton.getAttribute('disabled')).toEqual('true');
			});
		});
		
		describe('User', function() {
			it('should be able to delete entered password', function() {
				signUpPage.setPassword('');
				expect(signUpPage.passwordField.getAttribute('value')).toEqual('');
				expect(signUpPage.password2Field.getAttribute('disabled')).toBeNull();//.toBe('false');
				expect(element(by.css('.has-feedback')).getAttribute('class')).toContain('has-error');
				expect(signUpPage.signUpButton.getAttribute('disabled')).toEqual('true');
			});
		});
		
		describe('User', function() {
			it('should be able to enter another password', function() {
				signUpPage.setPassword('a');
				expect(signUpPage.passwordField.getAttribute('value')).toEqual('a');
				expect(signUpPage.password2Field.getAttribute('disabled')).toBeNull();//.toBe('false');
				expect(element(by.css('.has-feedback')).getAttribute('class')).toContain('has-success');
				expect(signUpPage.signUpButton.getAttribute('disabled')).toBeNull();//.toBe('false');
			});
		});
		
		describe('User', function() {
			it('should be able to delete entered password2', function() {
				signUpPage.setPassword2('');
				expect(signUpPage.password2Field.getAttribute('value')).toEqual('');
				expect(element(by.css('.has-feedback')).getAttribute('class')).toEqual('has-feedback');
				expect(signUpPage.signUpButton.getAttribute('disabled')).toEqual('true');
			});
		});
		
		describe('User', function() {
			it('should be able to delete entered password', function() {
				signUpPage.setPassword('');
				expect(signUpPage.passwordField.getAttribute('value')).toEqual('');
				expect(signUpPage.password2Field.getAttribute('disabled')).toEqual('true');
				expect(element(by.css('.has-feedback')).getAttribute('class')).toEqual('has-feedback');
				expect(signUpPage.signUpButton.getAttribute('disabled')).toEqual('true');
			});
		});
		
		describe('User', function() {
			it('should be able to enter another password', function() {
				signUpPage.setPassword('password');
				expect(signUpPage.passwordField.getAttribute('value')).toEqual('password');
				expect(signUpPage.password2Field.getAttribute('disabled')).toBeNull();//.toBe('false');
				expect(signUpPage.signUpButton.getAttribute('disabled')).toEqual('true');
			});
		});
		
		describe('User', function() {
			it('should be able to enter password2', function() {
				signUpPage.setPassword2('password');
				expect(signUpPage.password2Field.getAttribute('value')).toEqual('password');
				expect(element(by.css('.has-feedback')).getAttribute('class')).toContain('has-success');
				expect(signUpPage.signUpButton.getAttribute('disabled')).toBeNull();//.toBe('false');
			});
		});
		
		describe('User', function() {
			it('should be able to sign up', function() {
				signUpPage.signUp();
				signUpPage.visitPage('/shopping-list');
			});
			
			/*describe('User', function() {
				it('should be redirected to signin page', function() {
					expect(element(by.css('body')).getAttribute('data-page')).toEqual('signin');
				});
				
				it('should see signed up username in form', function() {
					expect(signInPage.usernameField.getAttribute('value')).toEqual('protractor_user');
				});
			});*/
		});
		
		describe('User', function() {
			/*it('should be able to go back to sign up page', function() {
				signInPage.signUp();
				expect(element(by.css('body')).getAttribute('data-page')).toEqual('signup');
			});*/
			
			it('should be able to enter username', function() {
				signUpPage.setUsername('protractor_user');
				expect(signUpPage.usernameField.getAttribute('value')).toEqual('protractor_user');
				expect(signUpPage.password2Field.getAttribute('disabled')).toEqual('true');
				expect(signUpPage.signUpButton.getAttribute('disabled')).toEqual('true');
			});
			
			it('should be able to enter another password', function() {
				signUpPage.setPassword('1');
				expect(signUpPage.passwordField.getAttribute('value')).toEqual('1');
				expect(signUpPage.password2Field.getAttribute('disabled')).toBeNull();//.toBe('false');
				expect(signUpPage.signUpButton.getAttribute('disabled')).toEqual('true');
			});
			
			it('should be able to enter password2', function() {
				signUpPage.setPassword2('1');
				expect(signUpPage.password2Field.getAttribute('value')).toEqual('1');
				expect(element(by.css('.has-feedback')).getAttribute('class')).toContain('has-success');
				expect(signUpPage.signUpButton.getAttribute('disabled')).toBeNull();//.toBe('false');
			});
			
			it('should be able to press sign up button', function() {
				signUpPage.signUp();
				expect(element(by.css('.sl-auth-form .alert'))).not.toContain('hidden');
			});
		});
	}
	
	return SignUpPageTest;
})();

module.exports = SignUpPageTest;