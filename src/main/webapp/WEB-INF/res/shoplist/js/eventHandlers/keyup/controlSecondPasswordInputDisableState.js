'use strict';

function controlSecondPasswordInputDisableState(password, password2) {
	var entered = $(password).val();

	if(entered) {
		$(password2).attr('disabled', false);
	} else {
		var entered2 = $(password2).val();
		
		if(!entered2) {
			$(password2).attr('disabled', true);
		}
	}
}