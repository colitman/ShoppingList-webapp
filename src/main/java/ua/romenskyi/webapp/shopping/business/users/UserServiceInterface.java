/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.business.users;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import ua.romenskyi.webapp.shopping.business.DefaultServiceInterface;
import ua.romenskyi.webapp.shopping.business.ResourceNotFoundException;
import ua.romenskyi.webapp.shopping.domain.users.User;

/**
 * @author dmytro.romenskyi - Jun 30, 2016
 *
 */
public interface UserServiceInterface extends DefaultServiceInterface<User>, UserDetailsService {

	boolean exists(String username);
	boolean exists(Long key);
	User get(Long key) throws ResourceNotFoundException;
	List<User> list();
	

}