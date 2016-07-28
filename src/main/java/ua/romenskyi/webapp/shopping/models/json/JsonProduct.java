/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.models.json;

import java.util.Date;

/**
 * @author dmytro.romenskyi - Jul 19, 2016
 *
 */
public class JsonProduct implements JsonModel {
	
	private Long key;
	private String name;
	private boolean bought;

	public  JsonProduct() {
		this.key = new Date().getTime();
		this.name = "";
		this.bought = false;
	}

	public Long getKey() {
		return key;
	}

	public void setKey(Long key) {
		this.key = key;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isBought() {
		return bought;
	}

	public void setBought(boolean bought) {
		this.bought = bought;
	}
}
