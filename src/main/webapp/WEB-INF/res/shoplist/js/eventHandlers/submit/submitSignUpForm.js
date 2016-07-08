'use strict';

function submitSignUpForm (form) {
	var url = $(form).attr('action');
	var method = $(form).attr('method');
	var data = $(form).serialize();
	
	$.ajax({
		type: method,
		url:url,
		data:data,
		dataType:'json',
	}).done(function(data){
		var username = $('input#username').val();
		window.location.replace(window.location.protocol + "//" + window.location.host + ROOT + "/signin?username=" + username);
	}).fail(function(jqXHR, textStatus, errorThrown) {
		$('#sl-sign-up-error-message').text(jqXHR.responseText);
		$('.sl-auth-form-header .alert').removeClass('hidden');
	});
}