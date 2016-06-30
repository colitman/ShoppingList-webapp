/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.data;

import java.util.Collections;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ua.romenskyi.webapp.shopping.domain.EntityInterface;
import ua.romenskyi.webapp.shopping.domain.NamedEntityInterface;
import ua.romenskyi.webapp.shopping.domain.UniqueNamedEntityInterface;

/**
 * @author dmytro.romenskyi - Jun 28, 2016
 *
 */
@Repository
public class DefaultDAO {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	protected Session getSession() {
		return sessionFactory.getCurrentSession();
	}
	
	public <ENTITY> boolean exists(Class<ENTITY> clazz, Long key) {
		
		if(key == null) {
			return false;
		}
		
		Session session = getSession();
		
		ENTITY entity = session.get(clazz, key);
		
		if(entity == null) {
			return false;
		}
		return true;
	}
	
	public <ENTITY extends UniqueNamedEntityInterface> Long getKeyByName(Class<ENTITY> clazz, String name) throws ObjectNotExistsException {
		if (name == null) {
			throw new IllegalArgumentException(
					"Invalid entity name value provided.",
					new NullPointerException("Entity name provided is NULL."));
		}
		
		String nameColumnAlias = Utils.resolveNameColumnAlias(clazz);
		String keyColumnAlias = Utils.resolveKeyColumnAlias(clazz);
		
		Session session = getSession();
		Long id = (Long) session.createCriteria(clazz)
							.add(Restrictions.eq(nameColumnAlias, name))
							.setProjection(Projections.property(keyColumnAlias))
							.uniqueResult();
		
		if(id == null) {
			throw new ObjectNotExistsException(clazz.getSimpleName() + " entity with requested name does not exist: " + name);
		}
		
		return id;
	}
	
	public <ENTITY extends NamedEntityInterface> List<Long> getKeysByName(Class<ENTITY> clazz, String name) throws ObjectNotExistsException {
		if (name == null) {
			throw new IllegalArgumentException(
					"Invalid entity name value provided.",
					new NullPointerException("Entity name provided is NULL."));
		}
		
		String nameColumnAlias = Utils.resolveNameColumnAlias(clazz);
		String keyColumnAlias = Utils.resolveKeyColumnAlias(clazz);
		
		Session session = getSession();
		@SuppressWarnings("unchecked")
		List<Long> ids = session.createCriteria(clazz)
									.add(Restrictions.eq(nameColumnAlias, name))
									.setProjection(Projections.property(keyColumnAlias))
									.list();
		
		if(ids == null) {
			ids = Collections.emptyList();
		}
		
		return ids;
	}
	
	public <ENTITY> ENTITY getByKey(Class<ENTITY> clazz, Long key) throws ObjectNotExistsException {
		if (key == null) {
			throw new IllegalArgumentException(
					"Invalid entity key value provided.",
					new NullPointerException("Entity key provided is NULL."));
		}
		
		if(!exists(clazz, key)) {
			throw new ObjectNotExistsException(clazz.getSimpleName() + " entity with requested key does not exist: " + key.toString());
		}
		
		Session session = getSession();
		
		ENTITY entity = session.load(clazz, key);
		return entity;
	}
	
	public <ENTITY extends EntityInterface> List<ENTITY> getAll(Class<ENTITY> clazz) {
		Session session = getSession();
		
		@SuppressWarnings("unchecked")
		List<ENTITY> entities = session.createCriteria(clazz).list();
		
		if(entities == null) {
			entities = Collections.emptyList();
		}
		
		return entities;
	}
	
	public <ENTITY extends EntityInterface> Long create(ENTITY entity) {
		Session session = getSession();
		
		return (Long) session.save(entity);
	}
}
