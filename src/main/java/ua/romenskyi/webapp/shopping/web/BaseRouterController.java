/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.web;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
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
@RequestMapping(method=RequestMethod.GET)
public class BaseRouterController {

	@RequestMapping(path="/")
	public ModelAndView root(ModelAndView mv, @CurrentUser User user) {
		mv.addObject("currentUser", user);
		mv.setViewName("main");
		
		return mv;
	}
	
	@RequestMapping(path="/signin")
	public ModelAndView getSignIn(ModelAndView mv,
									@RequestParam(required=false) String username,
									Authentication auth) {
		if(auth != null && auth.isAuthenticated()) {
			mv.setViewName("redirect:/");
		} else {
			mv.addObject("username", username);
			mv.setViewName("signin");
		}
		
		return mv;
	}
	
	@RequestMapping(path="/signup")
	public ModelAndView getSignUp(ModelAndView mv, Authentication auth) {
		if(auth != null && auth.isAuthenticated()) {
			mv.setViewName("redirect:/");
		} else {
			mv.setViewName("signup");
		}
		
		return mv;
	}
}
