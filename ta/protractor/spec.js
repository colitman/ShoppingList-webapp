'use strict';

var SignInPage = require("./pages/SignInPage");


describe('Protractor Demo App', function() {
  it('should have a title', function() {
    var signInPage = new SignInPage();

    signInPage.visitPage();
    signInPage.setUsername('1');
    signInPage.setPassword('1');
    signInPage.signIn();

    expect(browser.getTitle()).toEqual('Shopping List');
  });
});