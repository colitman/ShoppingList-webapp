/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.business.lists;

import java.util.ArrayList;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ua.romenskyi.webapp.shopping.business.DefaultService;
import ua.romenskyi.webapp.shopping.business.ResourceNotFoundException;
import ua.romenskyi.webapp.shopping.domain.list.List;

/**
 * @author dmytro.romenskyi - Jun 28, 2016
 *
 */
@Service
public class ListService 
					extends DefaultService<List>
					implements ListServiceInterface {

	@Override
	@Transactional
	public boolean exists(Long key) {
		return super.exists(List.class, key);
	}

	@Override
	@Transactional
	public List get(Long key) throws ResourceNotFoundException {
		return super.get(List.class, key);
	}
	
	@Override
	@Transactional
	public java.util.List<List> getByOwner(Long owner) {
		java.util.List<Long> keys = getDAO().getKeysByOwner(List.class, owner);
		
		java.util.List<List> lists = new ArrayList<List>();
		
		for(Long key:keys) {
			List list = null;
			
			try {
				list = get(key);
			} catch (ResourceNotFoundException e) {
				// TODO Add logging
				continue;
			}
			
			lists.add(list);
		}
		
		return lists;
	}
	
	@Override
	@Transactional
	public java.util.List<List> getByAnonymousOwner(String owner) {
		java.util.List<Long> keys = getDAO().getKeysByAnonymousOwner(List.class, owner);
		
		java.util.List<List> lists = new ArrayList<List>();
		
		for(Long key:keys) {
			List list = null;
			
			try {
				list = get(key);
			} catch (ResourceNotFoundException e) {
				// TODO Add logging
				continue;
			}
			
			lists.add(list);
		}
		
		return lists;
	}

	@Override
	@Transactional
	public java.util.List<List> list() {
		return super.list(List.class);
	}
}
