/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.business.users;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ua.romenskyi.webapp.shopping.business.DefaultService;
import ua.romenskyi.webapp.shopping.business.ResourceNotFoundException;
import ua.romenskyi.webapp.shopping.data.ObjectNotExistsException;
import ua.romenskyi.webapp.shopping.domain.users.User;

/**
 * @author dmytro.romenskyi - Jun 28, 2016
 *
 */
@Service
public class UserService 
					extends DefaultService<User>
					implements UserDetailsService {

	@Override
	public User loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Long userKey = null;
		try {
			userKey = getDAO().getKeyByName(User.class, username);
		} catch (ObjectNotExistsException onee) {
			throw new UsernameNotFoundException(onee.getMessage(), onee);
		}
		
		User user = null;
		try {
			user = get(userKey);
		} catch (ResourceNotFoundException rnfe) {
			throw new UsernameNotFoundException(rnfe.getMessage(), rnfe);
		}
		
		return user;
	}

	public boolean exists(Long key) {
		return super.exists(User.class, key);
	}

	public User get(Long key) throws ResourceNotFoundException {
		return super.get(User.class, key);
	}

	public List<User> list() {
		return super.list(User.class);
	}
}
