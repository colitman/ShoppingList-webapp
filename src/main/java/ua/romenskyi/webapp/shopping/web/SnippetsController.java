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

/**
 * @author dmytro.romenskyi - Jul 1, 2016
 *
 */
@Controller
@RequestMapping(path="/snippets", method=RequestMethod.GET)
public class SnippetsController {

	@RequestMapping(path="/{snippetName}")
	public ModelAndView getSnippet(ModelAndView mv, @PathVariable String snippetName) {
		mv.setViewName("snippets/" + snippetName);
		
		return mv;
	}
}
