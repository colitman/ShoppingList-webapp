/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.web.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiParam;
import ua.romenskyi.webapp.shopping.business.ResourceAlreadyExistsException;
import ua.romenskyi.webapp.shopping.business.ResourceNotFoundException;
import ua.romenskyi.webapp.shopping.business.lists.ListServiceInterface;
import ua.romenskyi.webapp.shopping.config.CurrentUser;
import ua.romenskyi.webapp.shopping.domain.list.List;
import ua.romenskyi.webapp.shopping.domain.users.User;

/**
 * @author dmytro.romenskyi - Jul 1, 2016
 *
 */
@RestController
@RequestMapping(path="api/lists")
public class ListsController {
	
	@Autowired
	private ListServiceInterface listService;
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<String> postNewList(@RequestParam String content,
												@CurrentUser User currentUser,
												@CookieValue(required=false) String shopper) {
		
		List list = new List();
		list.setContent(content);
		list.setOwner(currentUser == null? -1L : currentUser.getKey());
		list.setAnonymousOwner(shopper == null? "" : shopper);
		
		Long key = null;
		
		try {
			key = listService.add(list);
		} catch (ResourceAlreadyExistsException e) {
			return new ResponseEntity<String>("List already exists",HttpStatus.CONFLICT);
		}
		
		MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
		headers.add("Location", String.valueOf(key));
		return new ResponseEntity<String>(String.valueOf(key), headers, HttpStatus.CREATED);
	}
	
	@RequestMapping(path="/{listKey}", method=RequestMethod.PUT)
	public ResponseEntity<String> updateList(@PathVariable String listKey,
												@RequestParam String content,
												@CurrentUser @ApiParam(hidden=true) User currentUser,
												@CookieValue(required=false) String shopper) {
		
		if(listKey == null || listKey.isEmpty()) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		
		List list = null;
		
		try {
			list = listService.get(Long.valueOf(listKey));
		} catch (NumberFormatException e) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		} catch (ResourceNotFoundException e) {
			return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
		}
		
		list.setContent(content);
		
		boolean updated = false;
		
		try {
			updated = listService.update(list);
		} catch (ResourceNotFoundException e) {
			return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
		}
		
		MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
		headers.add("Location", listKey);
		return new ResponseEntity<String>(String.valueOf(updated), headers, HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<java.util.List<List>> getLists(@RequestParam(required=false) String shopper) {
		if(shopper != null && !shopper.isEmpty()) {
			java.util.List<List> lists = listService.getByAnonymousOwner(shopper);
			return new ResponseEntity<java.util.List<List>>(lists, HttpStatus.OK);
		}
		
		java.util.List<List> lists = listService.list();
		
		return new ResponseEntity<java.util.List<List>>(lists, HttpStatus.OK);
	}
	
	@RequestMapping(path="/{listKey}", method=RequestMethod.GET)
	public ResponseEntity<List> getListByKey(@PathVariable String listKey) {
		if(listKey == null || listKey.isEmpty()) {
			return new ResponseEntity<List>(HttpStatus.BAD_REQUEST);
		}
		
		List list = null;
		
		try {
			list = listService.get(Long.valueOf(listKey));
		} catch (NumberFormatException e) {
			return new ResponseEntity<List>(HttpStatus.BAD_REQUEST);
		} catch (ResourceNotFoundException e) {
			return new ResponseEntity<List>(HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<List>(list, HttpStatus.OK);
	}
}
