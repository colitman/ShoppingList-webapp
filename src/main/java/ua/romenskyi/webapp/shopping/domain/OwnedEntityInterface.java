/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.domain;

/**
 * @author dmytro.romenskyi - Jul 1, 2016
 *
 */
public interface OwnedEntityInterface extends IdentifiedEntityInterface {

	Long getOwner();
	void setOwner(Long owner);
	String getAnonymousOwner();
	void setAnonymousOwner(String anonymousOwner);

}
