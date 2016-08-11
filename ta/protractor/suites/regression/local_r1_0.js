'use strict';

var protractorRoot = "./../../";

var SignUpPageTest = require(protractorRoot + "tests/SignUpPageTest");
var SignInPageTest = require(protractorRoot + "tests/SignInPageTest");
var RootPageTest = require(protractorRoot + "tests/RootPageTest");

var signUpPageTest = new SignUpPageTest();
var signInPageTest = new SignInPageTest();
var rootPageTest = new RootPageTest();

signUpPageTest.run();
signInPageTest.run();
rootPageTest.run();

/** === List creation
 *  ====== Anonymous user
 *
 */