/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.models.json;

/**
 * @author dmytro.romenskyi - Jul 19, 2016
 *
 */
public class JsonProduct implements JsonModel {
	
	private String name;
	private boolean bought;

	private JsonProduct() {
		this.name = "";
		this.bought = false;
	}

	String getName() {
		return name;
	}

	void setName(String name) {
		this.name = name;
	}

	boolean isBought() {
		return bought;
	}

	void setBought(boolean bought) {
		this.bought = bought;
	}
}
