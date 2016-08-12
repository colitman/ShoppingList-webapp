/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import ua.romenskyi.webapp.shopping.config.CurrentUser;
import ua.romenskyi.webapp.shopping.domain.users.User;

/**
 * @author dmytro.romenskyi - Jun 29, 2016
 *
 */
@Controller
@RequestMapping(path="/imports", method=RequestMethod.GET)
public class ImportsController {

	@RequestMapping(path="/{importName}")
	public ModelAndView getImport(@PathVariable String importName,
									@RequestParam(name="pageTitle", required=false) String title,
									@RequestParam(name="root", defaultValue="false") String root,
									ModelAndView mv,
									@CurrentUser User user) {
		mv.addObject("pageTitle", title);
		mv.addObject("root", root);
		mv.addObject("currentUser", user);
		mv.setViewName("imports/" + importName);
		
		return mv;
	}

	@RequestMapping(path="/modals/{modalName}")
	public ModelAndView getModal(@PathVariable String modalName,
								  ModelAndView mv,
								  @CurrentUser User user) {

		mv.addObject("currentUser", user);
		mv.setViewName("imports/modals/" + modalName);

		return mv;
	}
}
