/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.domain;

public interface IdentifiedEntityInterface extends EntityInterface {
	Long getKey();
	void setKey(Long key);
}
