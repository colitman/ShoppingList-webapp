/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.business.lists;

import ua.romenskyi.webapp.shopping.business.DefaultServiceInterface;
import ua.romenskyi.webapp.shopping.business.ResourceNotFoundException;
import ua.romenskyi.webapp.shopping.domain.list.List;
import ua.romenskyi.webapp.shopping.domain.users.User;

/**
 * @author dmytro.romenskyi - Jun 30, 2016
 *
 */
public interface ListServiceInterface extends DefaultServiceInterface<List> {

	boolean exists(Long key);
	List get(Long key) throws ResourceNotFoundException;
	java.util.List<List> list();
	java.util.List<List> getByOwner(User owner);
	java.util.List<List> getByAnonymousOwner(String owner);

}