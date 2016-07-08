'use strict';

export function controlSecondPasswordInputDisableState(password, password2) {
	let entered = $(password).val();

	if(entered) {
		$(password2).attr('disabled', false);
	} else {
		let entered2 = $(password2).val();
		
		if(!entered2) {
			$(password2).attr('disabled', true);
		}
	}
}