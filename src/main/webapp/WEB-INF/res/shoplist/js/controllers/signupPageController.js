'use strict';

import controlSecondPasswordInputDisableState from '../eventHandlers/keyup/controlSecondPasswordInputDisableState';
import controlPasswordsEqualityState from '../eventHandlers/keyup/controlPasswordsEqualityState';
import submitSignUpForm from '../eventHandlers/submit/submitSignUpForm';

$(document).ready(function() {
	let signUpForm = $('.sl-auth-form');
	let password = $('#password', signUpForm);
	let password2 = $('#password2', signUpForm);
	let signUpButton = $('button[type="submit"]', signUpForm);

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
});
