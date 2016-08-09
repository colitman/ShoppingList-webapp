'use strict';

function SignUpFormController () {
	this.password = $('#password', AUTH_FORM);
	this.password2 = $('#password2', AUTH_FORM);
	this.signUpButton = $('button[type="submit"]', AUTH_FORM);
	
	this.userService = new UserService();
}

SignUpFormController.prototype
	.checkPasswordsEqual = function() {
		var entered1 = $(this.password).val();
		var entered2 = $(this.password2).val();
	
		var equal = false;
		var provideFeedback = false;
		
		if(entered1) {
			if(entered2) {
				equal = entered1 === entered2;
				provideFeedback = true;
			}
		} else if(entered2) {
			provideFeedback = true;
		}
	
		this.signUpButton.prop('disabled', !equal);
		
		if(!provideFeedback) {
			$('.has-feedback', AUTH_FORM).removeClass('has-error has-success');
			$('.form-control-feedback', AUTH_FORM).removeClass('glyphicon-warning-sign glyphicon-ok');
		} else {
			$('.has-feedback', AUTH_FORM).removeClass(equal? 'has-error': 'has-success');
			$('.has-feedback', AUTH_FORM).addClass(equal? 'has-success' : 'has-error');
			
			$('.form-control-feedback', AUTH_FORM).removeClass(equal? 'glyphicon-warning-sign': 'glyphicon-ok');
			$('.form-control-feedback', AUTH_FORM).addClass(equal? 'glyphicon-ok': 'glyphicon-warning-sign');
		}
	};

SignUpFormController.prototype
	.toggleSecondPasswordAccessibility = function() {
		var entered1 = $(this.password).val();

		if(entered1) {
			$(this.password2).prop('disabled', false);
		} else {
			var entered2 = $(this.password2).val();
			
			if(!entered2) {
				$(this.password2).prop('disabled', true);
			}
		}
	};

SignUpFormController.prototype
	.submitForm = function() {
		this.userService.signUpUser()
			.done(function(){
				var username = $('input#username').val();
				window.location.replace(window.location.protocol + '//' + window.location.host + ROOT + '/signin?username=' + username);
			}).fail(function(jqXHR, textStatus, errorThrown) {
				$('.alert p', AUTH_FORM).text(jqXHR.responseText);
				$('.alert', AUTH_FORM).removeClass('hidden');
			});
	};