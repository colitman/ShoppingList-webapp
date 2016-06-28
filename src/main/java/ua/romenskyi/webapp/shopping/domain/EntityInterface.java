/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.domain;

public interface EntityInterface<KEY> {
	KEY getKey();
	void setKey(KEY key);
}
