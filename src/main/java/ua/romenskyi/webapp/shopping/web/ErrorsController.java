/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import ua.romenskyi.webapp.shopping.config.CurrentUser;
import ua.romenskyi.webapp.shopping.domain.users.User;

/**
 * @author dmytro.romenskyi - Jun 29, 2016
 *
 */
@Controller
@RequestMapping(path="/errors", method=RequestMethod.GET)
public class ErrorsController {

	@RequestMapping(path="/{error}")
	public ModelAndView getImport(@PathVariable String error, ModelAndView mv, @CurrentUser User user) {
		mv.addObject("currentUser", user);
		mv.setViewName("errors/" + error);
		
		return mv;
	}
}
