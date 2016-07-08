'use strict';

export class List() {

	constructor() {
		this.products = [];

		Object.seal(this);
	}

	get products() {
		return this.products;
	}

}