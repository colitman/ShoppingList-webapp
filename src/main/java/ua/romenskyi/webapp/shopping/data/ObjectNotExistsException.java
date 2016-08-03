/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.data;

/**
 * @author dmytro.romenskyi - Jun 28, 2016
 *
 */
public class ObjectNotExistsException extends Exception {

	private static final long serialVersionUID = 1L;
	/**
	 * @param message - exception message
	 */
	public ObjectNotExistsException(String message) {
		super(message);
	}
}
