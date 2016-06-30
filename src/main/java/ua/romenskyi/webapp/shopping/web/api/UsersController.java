/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.web.api;

import org.jasypt.springsecurity3.authentication.encoding.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ua.romenskyi.webapp.shopping.business.ResourceAlreadyExistsException;
import ua.romenskyi.webapp.shopping.business.users.UserServiceInterface;
import ua.romenskyi.webapp.shopping.domain.users.User;

/**
 * @author dmytro.romenskyi - Jun 30, 2016
 *
 */
@RestController
@RequestMapping(path="api/users")
public class UsersController {
	
	@Autowired
	private UserServiceInterface userService;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<String> addUser(@RequestParam String username, @RequestParam String password) {
		
		User newUser = new User();
		newUser.setUsername(username);
		newUser.setPassword(passwordEncoder.encodePassword(password, null));
		
		Long key = null;
		try {
			key = userService.add(newUser);
		} catch (ResourceAlreadyExistsException e) {
			return new ResponseEntity<String>("Username already exists",HttpStatus.CONFLICT);
		}
		
		MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
		headers.add("Location", String.valueOf(key));
		
		return new ResponseEntity<String>(String.valueOf(key), headers,HttpStatus.CREATED);
	}
}
