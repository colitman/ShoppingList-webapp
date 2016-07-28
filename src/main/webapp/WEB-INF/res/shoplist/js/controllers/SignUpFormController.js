'use strict';

function SignUpFormController (signUpForm) {
	this.form = signUpForm;
	this.userService = new UserService();
}

SignUpFormController.prototype
	.checkPasswordsEqual = function() {
		var entered1 = $('#password', this.form).val();
		var entered2 = $('#password2', this.form).val();
		var signUpButton = $('button[type="submit"]', this.form);
		var password2Disabled = $('#password2', this.form).attr('disabled')
		
		var equal = !(entered1 !== entered2 && !password2Disabled);

		signUpButton.attr('disabled', !equal);
		$('#sl-passwords', this.form).removeClass(equal? 'has-error': 'has-success');
		$('#sl-passwords', this.form).addClass(equal? 'has-success' : 'has-error');

		$('.has-feedback .form-control-feedback', this.form).removeClass(equal? 'glyphicon-warning-sign': 'glyphicon-ok');
		$('.has-feedback .form-control-feedback', this.form).addClass(equal? 'glyphicon-ok': 'glyphicon-warning-sign');
	};

SignUpFormController.prototype
	.toggleSecondPasswordAccessibility = function() {
		var entered1 = $('#password', this.form).val();

		if(entered1) {
			$('#password2', this.form).attr('disabled', false);
		} else {
			var entered2 = $('#password2', this.form).val();
			
			if(!entered2) {
				$('#password2', this.form).attr('disabled', true);
			}
		}
	};

SignUpFormController.prototype
	.submitForm = function() {
		this.userService.signUpUser(this.form)
			.done(function(data){
				var username = $('input#username').val();
				window.location.replace(window.location.protocol + "//" + window.location.host + ROOT + "/signin?username=" + username);
			}).fail(function(jqXHR, textStatus, errorThrown) {
				$('#sl-sign-up-error-message').text(jqXHR.responseText);
				$('.sl-auth-form-header .alert').removeClass('hidden');
			});
	};