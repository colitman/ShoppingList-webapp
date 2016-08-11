'use strict';

var protractorRoot = "./../../";

var SignUpPageTest = require(protractorRoot + "tests/SignUpPageTest");
var SignInPageTest = require(protractorRoot + "tests/SignInPageTest");

var signUpPageTest = new SignUpPageTest();
var signInPageTest = new SignInPageTest();

signUpPageTest.run();
//signInPageTest.run();

/** === List creation
 *  ====== Anonymous user
 *
 */