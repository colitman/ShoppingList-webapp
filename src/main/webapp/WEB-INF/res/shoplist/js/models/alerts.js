/**
 * Created by dmytro.romenskyi on 8/4/2016.
 */

'use strict';

function Alert(type, title, text) {
	this.aside = $(document.createElement('aside'));
	var alertTitle = $(document.createElement('strong'));
	
	$(this.aside).addClass('alert alert-' + type + ' alert-dismissible fade in');
	$(this.aside).text(' ' + text);
	$(this.aside).prepend(alertTitle);
	$(this.aside).html('<button type="button" class="close" data-dismiss="alert">&times;</button>' + $(this.aside).html());
	$('strong', this.aside).text(title);
}

Alert.prototype.show = function() {
	$('.alerts').prepend(this.aside);
	$(this.aside).alert();
};