$(document).ready(function() {
	
	var pass = $('#password');
	var pass2 = $('#password2');
	var signUpButton = $('.auth-form button[type="submit"]');
	
	pass2DisableController(pass, pass2, signUpButton);
	passwordsEqualityController(pass, pass2, signUpButton);
	
});

function passwordsEqualityController(pass, pass2, signUpButton) {
	$(pass).keyup(function(event) {
		var entered = $(pass).val();
		var entered2 = $(pass2).val();
		var pass2Disabled = $(pass2).attr('disabled')
		
		if(entered !== entered2 && !pass2Disabled ) {
			signUpButton.attr('disabled', true);
			
			$('#passwords').removeClass('has-success');
			$('#passwords').addClass('has-error');
			
			$('.has-feedback .form-control-feedback').removeClass('glyphicon-ok');
			$('.has-feedback .form-control-feedback').addClass('glyphicon-warning-sign');
		} else {
			signUpButton.attr('disabled', false);
			
			$('#passwords').addClass('has-success');
			$('#passwords').removeClass('has-error');
			
			$('.has-feedback .form-control-feedback').removeClass('glyphicon-warning-sign');
			$('.has-feedback .form-control-feedback').addClass('glyphicon-ok');
		}
	});
	
	$(pass2).keyup(function(event) {
		var entered = $(pass).val();
		var entered2 = $(pass2).val();
		
		if(entered2 === entered) {
			signUpButton.attr('disabled', false);
			
			$('#passwords').addClass('has-success');
			$('#passwords').removeClass('has-error');
			
			$('.has-feedback .form-control-feedback').removeClass('glyphicon-warning-sign');
			$('.has-feedback .form-control-feedback').addClass('glyphicon-ok');
		} else {
			signUpButton.attr('disabled', true);
			
			$('#passwords').removeClass('has-success');
			$('#passwords').addClass('has-error');
			
			$('.has-feedback .form-control-feedback').removeClass('glyphicon-ok');
			$('.has-feedback .form-control-feedback').addClass('glyphicon-warning-sign');
		}
	});
}

function pass2DisableController(pass, pass2, signUpButton) {
	$(pass).keyup(function(event) {
		var entered = $(pass).val();
		if(entered) {
			$(pass2).attr('disabled', false);
		} else {
			var entered2 = $(pass2).val();
			if(!entered2) {
				$(pass2).attr('disabled', true);
			}
		}
	});
}