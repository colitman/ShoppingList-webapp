/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.domain;

public interface NamedEntityInterface extends IdentifiedEntityInterface {
	String getName();
	void setName(String name);
}
