'use strict';

export function controlPasswordsEqualityState (password, password2, signUpButton) {
	let entered = $(password).val();
	let entered2 = $(password2).val();
	let password2Disabled = $(password2).attr('disabled')
	
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