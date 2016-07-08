'use strict';

function controlPasswordsEqualityState (password, password2, signUpButton) {
	var entered = $(password).val();
	var entered2 = $(password2).val();
	var password2Disabled = $(password2).attr('disabled')
	
	if(entered !== entered2 && !password2Disabled ) {
		signUpButton.attr('disabled', true);
		
		$('#sl-passwords').removeClass('has-success');
		$('#sl-passwords').addClass('has-error');
		
		$('.has-feedback .form-control-feedback').removeClass('glyphicon-ok');
		$('.has-feedback .form-control-feedback').addClass('glyphicon-warning-sign');
	} else {
		signUpButton.attr('disabled', false);
		
		$('#sl-passwords').removeClass('has-error');
		$('#sl-passwords').addClass('has-success');
		
		$('.has-feedback .form-control-feedback').removeClass('glyphicon-warning-sign');
		$('.has-feedback .form-control-feedback').addClass('glyphicon-ok');
	}
}