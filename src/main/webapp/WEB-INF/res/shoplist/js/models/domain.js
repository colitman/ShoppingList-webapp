'use strict';

function List() {
	this.key = -1;
	this.content = [];
	this.bought = false;
	this.publicList = false;
	/*this.anonymousOwner = '';
	this.owner = -1;*/
	Object.seal(this);
}

function Product(name) {
	this.key = new Date().getTime();
	this.name = name;
	this.bought = false;
	Object.seal(this);
}