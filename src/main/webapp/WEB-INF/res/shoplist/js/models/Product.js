'use strict';

export class Product(name) {

	constructor(name) {
		this.name = name;
		this.bought = false;
		Object.seal(this);
	}

	get name() {
		return this.name;
	}

	set name(vale) {
		this.name = val;
	}

	get bought() {
		return this.bought;
	}

	set bought(val) {
		this.bought = val;
	}
}