'use strict';

$(document).ready(function() {
	signupPageController()
});

function signupPageController() {
	
	var signUpForm = $('.sl-auth-form');
	var password = $('#password', signUpForm);
	var password2 = $('#password2', signUpForm);
	var signUpButton = $('button[type="submit"]', signUpForm);

	$(password).keyup(function(event) {
		controlSecondPasswordInputDisableState(this, password2);
		controlPasswordsEqualityState(this, password2, signUpButton);
	});

	$(password2).keyup(function(event) {
		controlPasswordsEqualityState(password, this, signUpButton);
	});

	$(signUpForm).submit(function(event) {
		event.preventDefault();
		submitSignUpForm(this);
	});
}
