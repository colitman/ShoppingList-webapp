/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.data;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

import javax.persistence.Id;

import ua.romenskyi.webapp.shopping.domain.EntityConfigurationException;
import ua.romenskyi.webapp.shopping.domain.IdentifiedEntityInterface;
import ua.romenskyi.webapp.shopping.domain.NamedEntityInterface;
import ua.romenskyi.webapp.shopping.domain.OwnedEntityInterface;

/**
 * @author dmytro.romenskyi - Jun 28, 2016
 *
 */
public class Utils {
	
	static String resolveNameColumnAlias(Class<? extends NamedEntityInterface> clazz) {
		boolean fieldFound = false;
		boolean methodFound = false;
		
		Field field = null;
		Method method = null;
		
		String alias = null; 
		
		for(Field f:clazz.getDeclaredFields()) {
			if(f.isAnnotationPresent(NameColumn.class)) {
				field = f;
				fieldFound = true;
				break;
			}
		}
		
		if(fieldFound) {
			alias = field.getName();
			return alias;
		}
		
		for(Method m:clazz.getDeclaredMethods()) {
			if(m.isAnnotationPresent(NameColumn.class)) {
				method = m;
				methodFound = true;
				break;
			}
		}
		
		if(methodFound) {
			//alias = method.getAnnotation(Column.class).name();
			alias = method.getName();
			return alias;
		}
		
		throw new EntityConfigurationException(clazz.getSimpleName() + " does not have the NAME property marked.");
	}

	static String resolveKeyColumnAlias(Class<? extends IdentifiedEntityInterface> clazz) {
		boolean fieldFound = false;
		boolean methodFound = false;
		
		Field field = null;
		Method method = null;
		
		String alias = null; 
		
		for(Field f:clazz.getDeclaredFields()) {
			if(f.isAnnotationPresent(Id.class)) {
				field = f;
				fieldFound = true;
				break;
			}
		}
		
		if(fieldFound) {
			alias = field.getName();
			return alias;
		}
		
		for(Method m:clazz.getDeclaredMethods()) {
			if(m.isAnnotationPresent(Id.class)) {
				method = m;
				methodFound = true;
				break;
			}
		}
		
		if(methodFound) {
			//alias = method.getAnnotation(Column.class).name();
			alias = method.getName();
			return alias;
		}
		
		throw new EntityConfigurationException(clazz.getSimpleName() + " does not have the ID property marked.");
	}
	
	static String resolveOwnerColumnAlias(Class<? extends OwnedEntityInterface> clazz) {
		boolean fieldFound = false;
		boolean methodFound = false;
		
		Field field = null;
		Method method = null;
		
		String alias = null; 
		
		for(Field f:clazz.getDeclaredFields()) {
			if(f.isAnnotationPresent(OwnerColumn.class)) {
				field = f;
				fieldFound = true;
				break;
			}
		}
		
		if(fieldFound) {
			alias = field.getName();
			return alias;
		}
		
		for(Method m:clazz.getDeclaredMethods()) {
			if(m.isAnnotationPresent(OwnerColumn.class)) {
				method = m;
				methodFound = true;
				break;
			}
		}
		
		if(methodFound) {
			//alias = method.getAnnotation(Column.class).name();
			alias = method.getName();
			return alias;
		}
		
		throw new EntityConfigurationException(clazz.getSimpleName() + " does not have the owner property marked.");
	}
	
	static String resolveAnonymousOwnerColumnAlias(Class<? extends OwnedEntityInterface> clazz) {
		boolean fieldFound = false;
		boolean methodFound = false;
		
		Field field = null;
		Method method = null;
		
		String alias = null; 
		
		for(Field f:clazz.getDeclaredFields()) {
			if(f.isAnnotationPresent(AnonymousOwnerColumn.class)) {
				field = f;
				fieldFound = true;
				break;
			}
		}
		
		if(fieldFound) {
			alias = field.getName();
			return alias;
		}
		
		for(Method m:clazz.getDeclaredMethods()) {
			if(m.isAnnotationPresent(AnonymousOwnerColumn.class)) {
				method = m;
				methodFound = true;
				break;
			}
		}
		
		if(methodFound) {
			//alias = method.getAnnotation(Column.class).name();
			alias = method.getName();
			return alias;
		}
		
		throw new EntityConfigurationException(clazz.getSimpleName() + " does not have the anonymous owner property marked.");
	}
}
