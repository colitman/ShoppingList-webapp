/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.domain;

import ua.romenskyi.webapp.shopping.domain.users.User;

/**
 * @author dmytro.romenskyi - Jul 1, 2016
 *
 */
public interface OwnedEntityInterface extends IdentifiedEntityInterface {

	User getOwner();
	void setOwner(User owner);
	String getAnonymousOwner();
	void setAnonymousOwner(String anonymousOwner);

}
