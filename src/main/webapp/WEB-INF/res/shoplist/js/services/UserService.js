'use strict';

function UserService () {}

UserService.prototype
	.signUpUser = function() {
		var url = $(AUTH_FORM).attr('action');
		var method = $(AUTH_FORM).attr('method');
		var data = $(AUTH_FORM).serialize();
		
		return $.ajax({
					type: method,
					url: url,
					data: data,
					dataType:'json'
				});
	};