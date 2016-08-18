/**
 * Created by dmytro.romenskyi on 8/4/2016.
 */

'use strict';

function Logger() {
	this.enabled = false;
	this.debugEnabled = false;
}

Logger.prototype.debug = function(text) {
	if(this.enabled && this.debugEnabled) {
		console.log(text);
	}
};