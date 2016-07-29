'use strict';

var protractorRoot = "./../../";

var SignInPage = require(protractorRoot + "pages/SignInPage");

describe('User', function() {

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