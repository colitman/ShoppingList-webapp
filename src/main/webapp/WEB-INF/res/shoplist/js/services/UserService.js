'use strict';

function UserService () {}

UserService.prototype
	.signUpUser = function(signUpForm) {
		var url = $(signUpForm).attr('action');
		console.log(url);
		var method = $(signUpForm).attr('method');
		console.log(method);
		var data = $(signUpForm).serialize();
		console.log(data);
		
		return $.ajax({
					type: method,
					url:url,
					data:data,
					dataType:'json',
				});
	};