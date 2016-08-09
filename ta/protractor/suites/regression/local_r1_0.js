'use strict';

var protractorRoot = "./../../";

var SignUpTest = require(protractorRoot + "tests/SignUpTest");
//var SignInTest = require(protractorRoot + "tests/SignInTest");
var signUpTest = new SignUpTest();
signUpTest.run();

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
//SignInTest.run();

/** === List creation
 *  ====== Anonymous user
 *
 */