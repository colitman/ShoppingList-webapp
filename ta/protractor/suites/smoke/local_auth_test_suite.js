'use strict';

var protractorRoot = "./../../";

var SignInPage = require(protractorRoot + "pages/SignInPage");
var SignUpPage = require(protractorRoot + "pages/SignUpPage");

describe('User', function() {

  it('should be able to navigate to signup page', function() {
    var signUpPage = new SignUpPage();
    signUpPage.visitPage('/shopping-list');
    expect(browser.getTitle()).toEqual('Sign Up');
  });

  it('should be able to signup', function() {
    var signUpPage = new SignUpPage();
    signUpPage.visitPage('/shopping-list');
    signUpPage.setUsername('protractor_user');
    signUpPage.setPassword('password');
    signUpPage.setPassword2('password');
    signUpPage.signUp();
  });

  it('should be able to sign in', function() {
    var signInPage = new SignInPage();

    signInPage.visitPage("/shopping-list");
    signInPage.setUsername('protractor_user');
    signInPage.setPassword('password');
    signInPage.signIn();
  });

  it('should be redirected to main page after successful signin', function() {
  	expect(browser.getTitle()).toEqual('Shopping List');
  	var page = element(by.tagName('body')).getWebElement().getAttribute('id');
  	expect(page).toEqual('root-page');
  });
});