'use strict';

function SignUpFormController (signUpForm) {
	var form = signUpForm;
	var userService = new UserService();
}

SignUpFormController.prototype
	.checkPasswordsEqual = function() {
	// body...
	};

SignUpFormController.prototype
	.toggleSecondPasswordAccessibility = function() {
	// body...
	};

SignUpFormController.prototype
	.submitForm = function() {
		userService.signUpUser(form)
			.done(function(data){
				var username = $('input#username').val();
				window.location.replace(window.location.protocol + "//" + window.location.host + ROOT + "/signin?username=" + username);
			}).fail(function(jqXHR, textStatus, errorThrown) {
				$('#sl-sign-up-error-message').text(jqXHR.responseText);
				$('.sl-auth-form-header .alert').removeClass('hidden');
			});
	};