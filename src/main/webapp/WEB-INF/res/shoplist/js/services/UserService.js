'use strict';

function UserService () {}

UserService.prototype
	.signUpUser = function(signUpForm) {
		var url = $(signUpForm).attr('action');
		var method = $(signUpForm).attr('method');
		var data = $(signUpForm).serialize();
		
		return
				$.ajax({
					type: method,
					url:url,
					data:data,
					dataType:'json',
				});
	};