$(document).ready(function() {
	$('.auth-form').submit(function(event) {
		event.preventDefault();
		
		var url = $(this).attr('action');
		var data = $(this).serialize();
		
		$.post({
			url:url,
			data:data,
			dataType:'json',
		}).done(function(data){
			var root = $('meta[name="contextPath"]').attr('content');
			var username = $('input#username').val();
			window.location.replace(window.location.protocol + "//" + window.location.host + root + "/signin?username=" + username);
		}).fail(function(jqXHR, textStatus, errorThrown) {
			$('#sign-up-error-message').text(jqXHR.responseText);
			$('.auth-form-header .alert').removeClass('hidden');
		});
	});
});