'use strict';

export function submitSignUpForm (form) {
	let url = $(form).attr('action');
	let method = $(form).attr('method');
	let data = $(form).serialize();
	
	$.ajax({
		type: method,
		url:url,
		data:data,
		dataType:'json',
	}).done(function(data){
		let username = $('input#username').val();
		window.location.replace(window.location.protocol + "//" + window.location.host + ROOT + "/signin?username=" + username);
	}).fail(function(jqXHR, textStatus, errorThrown) {
		$('#sl-sign-up-error-message').text(jqXHR.responseText);
		$('.sl-auth-form-header .alert').removeClass('hidden');
	});
}