'use strict';

var signUpFormController = new SignUpFormController();

$(document).ready(function() {
	init();
});

function init() {

	var password = $('#password', AUTH_FORM);
	var password2 = $('#password2', AUTH_FORM);
	var signUpButton = $('button[type="submit"]', AUTH_FORM);

	$(password).keyup(function(event) {
		signUpFormController.toggleSecondPasswordAccessibility();
		signUpFormController.checkPasswordsEqual();
	});

	$(password2).keyup(function(event) {
		signUpFormController.checkPasswordsEqual();
	});

	$(AUTH_FORM).submit(function(event) {
		event.preventDefault();
		signUpFormController.submitForm();
	});
}