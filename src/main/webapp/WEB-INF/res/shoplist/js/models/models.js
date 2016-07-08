'use strict';

function List() {
	this.products = [];
	Object.seal(this);
}

function Product(name) {
	this.name = name;
	this.bought = false;
	Object.seal(this);
}