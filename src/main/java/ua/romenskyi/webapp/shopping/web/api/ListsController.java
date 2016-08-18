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
import org.springframework.web.bind.annotation.*;
import ua.romenskyi.webapp.shopping.business.ResourceAlreadyExistsException;
import ua.romenskyi.webapp.shopping.business.ResourceNotFoundException;
import ua.romenskyi.webapp.shopping.business.lists.ListServiceInterface;
import ua.romenskyi.webapp.shopping.business.users.UserServiceInterface;
import ua.romenskyi.webapp.shopping.config.CurrentUser;
import ua.romenskyi.webapp.shopping.domain.list.List;
import ua.romenskyi.webapp.shopping.domain.users.User;
import ua.romenskyi.webapp.shopping.models.json.JsonList;

import java.util.ArrayList;

/**
 * @author dmytro.romenskyi - Jul 1, 2016
 *
 */
@RestController
@RequestMapping(path="api/lists")
public class ListsController {
	
	@Autowired
	private ListServiceInterface listService;
    @Autowired
    private UserServiceInterface userService;
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<String> postNewList(@RequestBody JsonList listModel,
												@CurrentUser User currentUser,
												@CookieValue(required=false) String shopper) {
		
		if(listModel == null) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		
		boolean anonymous = currentUser == null;
		
		List list = listModel.toDomain();
		list.setOwner(anonymous? null: currentUser);
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
	public ResponseEntity<java.util.List<JsonList>> getLists(@RequestParam(required=false) Long owner,
														 @RequestParam(required=false) String shopper,
														 @RequestParam(required=false) String statuses,
														 @RequestParam(required=false) String ignoredStatuses,
														 @CurrentUser User currentUser) {
		
		Long currentUserKey = (currentUser == null)? -1: currentUser.getKey();
		
		java.util.List<List> lists = new ArrayList<List>();
		java.util.List<List> filteredLists = new ArrayList<List>();
		
		boolean processShopper = false;
		boolean processIgnoredStatuses = statuses == null || statuses.isEmpty();
		
		if(owner != null && owner > 0 && owner == currentUserKey) {
			lists = listService.getByOwner(currentUser);
		}
		
		if(owner == null || owner == -1) {
			processShopper = true;
		}

		// TODO: what if owner is not current user?
		
		if(processShopper && shopper != null && !shopper.isEmpty()) {
			lists = listService.getByAnonymousOwner(shopper);
		}

		// TODO what if owner and shopper are null?

		if(!processIgnoredStatuses) {
			for (List list:lists) {
				String listStatus = list.getStatus().toLowerCase();
				String[] statusArray = statuses.split(",");

				for(String status:statusArray) {
					if(listStatus.equalsIgnoreCase(status)) {
						filteredLists.add(list);
						break;
					}
				}
			}
		} else {
			for (List list:lists) {
				String listStatus = list.getStatus().toLowerCase();
				String[] statusArray = ignoredStatuses.split(",");

				boolean found = false;
				for(String status:statusArray) {
					if(listStatus.equalsIgnoreCase(status)) {
						found = true;
						break;
					}
				}

				if(!found) {
					filteredLists.add(list);
				}
			}
		}

		java.util.List<JsonList> returnedLists = new java.util.ArrayList<JsonList>();

		for(List l:filteredLists) {
			returnedLists.add(new JsonList(l));
		}
		
		return new ResponseEntity<java.util.List<JsonList>>(returnedLists, HttpStatus.OK);
	}
	
	@RequestMapping(path="/{listKey}", method=RequestMethod.GET)
	public ResponseEntity<JsonList> getListByKey(@PathVariable Long listKey,
												@CurrentUser User currentUser) {
		if(listKey == null) {
			return new ResponseEntity<JsonList>(HttpStatus.BAD_REQUEST);
		}
		
		List list = null;
		
		try {
			list = listService.get(listKey);
		} catch (ResourceNotFoundException e) {
			return new ResponseEntity<JsonList>(HttpStatus.NOT_FOUND);
		}
		
		if(list.getOwner() != null && (currentUser == null || currentUser.getKey() != list.getOwner().getKey()) && !list.isPublicList()) {
			return new ResponseEntity<JsonList>(HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<JsonList>(new JsonList(list), HttpStatus.OK);
	}
}
