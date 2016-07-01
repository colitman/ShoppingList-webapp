/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.web;

import java.util.Date;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import ua.romenskyi.webapp.shopping.business.lists.ListServiceInterface;
import ua.romenskyi.webapp.shopping.config.CurrentUser;
import ua.romenskyi.webapp.shopping.domain.list.List;
import ua.romenskyi.webapp.shopping.domain.users.User;

/**
 * @author dmytro.romenskyi - Jun 29, 2016
 *
 */
@Controller
@RequestMapping(method=RequestMethod.GET)
public class BaseRouterController {
	
	@Autowired
	private ListServiceInterface listService;

	@RequestMapping(path="/")
	public ModelAndView root(ModelAndView mv,
							@CurrentUser User user,
							@CookieValue(required=false) String shopper,
							HttpServletRequest req,
							HttpServletResponse resp) {
		
		if(shopper == null || shopper.trim().equals("")) {
			String cookie = String.valueOf(new Date().getTime()) + req.getRemoteAddr();
			cookie = String.valueOf(cookie.hashCode());
			resp.addCookie(new Cookie("shopper", cookie));
		} else {
			java.util.List<List> anonLists = listService.getByAnonymousOwner(shopper);
			mv.addObject("anonLists", anonLists);
		}
		
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
