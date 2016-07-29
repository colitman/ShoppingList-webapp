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
@RequestMapping(path="/lists", method=RequestMethod.GET)
public class ListsRouterController {

	@RequestMapping(path="/{listKey}")
	public ModelAndView getList(@PathVariable String listKey,
								ModelAndView mv,
								@CurrentUser User user) {
		
		mv.addObject("listId", listKey);
		mv.addObject("currentUser", user);
		mv.setViewName("list");
		
		return mv;
	}
}
