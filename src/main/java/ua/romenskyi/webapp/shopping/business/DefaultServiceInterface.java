/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.business;

import java.util.List;

import ua.romenskyi.webapp.shopping.domain.EntityInterface;

/**
 * @author dmytro.romenskyi - Jun 30, 2016
 *
 * @param <ENTITY>
 */
public interface DefaultServiceInterface<ENTITY extends EntityInterface> {

	boolean exists(Class<ENTITY> clazz, Long key);

	ENTITY get(Class<ENTITY> clazz, Long key) throws ResourceNotFoundException;

	List<ENTITY> list(Class<ENTITY> clazz);
	
	Long add(ENTITY entity) throws ResourceAlreadyExistsException;

}