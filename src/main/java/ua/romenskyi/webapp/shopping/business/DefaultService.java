/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ua.romenskyi.webapp.shopping.data.DefaultDAO;
import ua.romenskyi.webapp.shopping.data.ObjectNotExistsException;
import ua.romenskyi.webapp.shopping.domain.EntityInterface;
import ua.romenskyi.webapp.shopping.domain.UniqueNamedEntityInterface;

/**
 * @author dmytro.romenskyi - Jun 28, 2016
 *
 */
@Service
public class DefaultService<ENTITY extends EntityInterface> implements DefaultServiceInterface<ENTITY> {
	
	@Autowired
	private DefaultDAO dao;
	
	protected DefaultDAO getDAO() {
		return dao;
	}
	
	@Override
	@Transactional
	public boolean exists(Class<ENTITY> clazz, Long key) {
		return getDAO().exists(clazz, key);
	}
	
	@Override
	@Transactional
	public ENTITY get(Class<ENTITY> clazz, Long key) throws ResourceNotFoundException {
		ENTITY entity = null;
		try {
			entity = getDAO().getByKey(clazz, key);
		} catch (ObjectNotExistsException one) {
			throw new ResourceNotFoundException(one.getMessage(), one);
		}
		
		return entity;
	}

	@Override
	@Transactional
	public List<ENTITY> list(Class<ENTITY> clazz) {
		return getDAO().getAll(clazz);
	}
	
	@Override
	@Transactional
	public Long add(ENTITY entity) throws ResourceAlreadyExistsException {
		
		if(entity instanceof UniqueNamedEntityInterface) {
			UniqueNamedEntityInterface unei = (UniqueNamedEntityInterface) entity;
			try {
				getDAO().getKeyByName(unei.getClass(), unei.getName());
			} catch (ObjectNotExistsException e) {
				return getDAO().create(entity);
			}
			
			throw new ResourceAlreadyExistsException(entity.getClass().getSimpleName() + " entity with provided name already exists: " + unei.getName());
		}
		
		return getDAO().create(entity);
	}
}
