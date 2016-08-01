/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.web.api;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
import ua.romenskyi.webapp.shopping.models.json.JsonList;

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
	public ResponseEntity<String> postNewList(@RequestBody JsonList listModel,
												@CurrentUser User currentUser,
												@CookieValue(required=false) String shopper) {
		
		if(listModel == null) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		
		boolean anonymous = currentUser == null;
		
		List list = listModel.toDomain();
		list.setOwner(anonymous? -1L: currentUser.getKey());
		list.setAnonymousOwner(anonymous? shopper: "");
		
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
	public ResponseEntity<String> updateList(@PathVariable Long listKey,
												@RequestBody JsonList listModel,
												@CurrentUser User currentUser,
												@CookieValue(required=false) String shopper) {
		
		if(listKey == null || listKey <= 0 || listModel == null) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		
		List list = listModel.toDomain();
		
		boolean updated = false;
		
		try {
			updated = listService.update(list);
		} catch (ResourceNotFoundException e) {
			return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
		}
		
		MultiValueMap<String, String> headers = new LinkedMultiValueMap<String, String>();
		headers.add("Location", listKey.toString());
		return new ResponseEntity<String>(String.valueOf(updated), headers, HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<java.util.List<List>> getLists(@RequestParam(required=false) Long owner,
															@RequestParam(required=false) String shopper,
															@CurrentUser User currentUser) {
		
		Long currentUserKey = (currentUser == null)? -1: currentUser.getKey();
		
		java.util.List<List> lists = new ArrayList<List>();
		
		boolean processShopper = false;
		
		java.util.List<List> ownedLists = new ArrayList<List>();
		java.util.List<List> anonLists = new ArrayList<List>();
		
		if(owner != null && owner > 0 && owner == currentUserKey) {
			ownedLists = listService.getByOwner(owner);
			lists.addAll(ownedLists);
		}
		
		if(owner == null || owner == -1) {
			processShopper = true;
		}
		
		if(processShopper && shopper != null && !shopper.isEmpty()) {
			anonLists = listService.getByAnonymousOwner(shopper);
			lists.addAll(anonLists);
		}
		
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
