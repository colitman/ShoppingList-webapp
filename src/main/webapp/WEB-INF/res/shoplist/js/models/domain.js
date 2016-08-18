'use strict';

function List() {
	this.key = -1;
	this.content = [];
	this.status = 'draft';
	this.publicList = false;
	Object.seal(this);
}

function Product(name) {
	this.key = new Date().getTime();
	this.name = name;
	this.bought = false;
	Object.seal(this);
}