/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.config;

import org.jasypt.springsecurity3.authentication.encoding.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.web.filter.CharacterEncodingFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true, securedEnabled=true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AccessDeniedHandler accessDeniedHandler;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		CharacterEncodingFilter filter = new CharacterEncodingFilter();
        filter.setEncoding("UTF-8");
        filter.setForceEncoding(true);
        http.addFilterBefore(filter,CsrfFilter.class);
		
		http
			.csrf().disable()
			.requiresChannel()
				.antMatchers("/signin*").requiresSecure()
				.and()
			.authorizeRequests()
				.antMatchers(HttpMethod.GET, "/signup", "/favicon.ico" , WebMvcConfig.RESOURCES_BASE_URL).permitAll()
				.and()
			.formLogin()
				.loginPage("/signin").permitAll()
				.loginProcessingUrl("/signin")
				.usernameParameter("username")
				.passwordParameter("password")
				.defaultSuccessUrl("/", false)
				.failureUrl("/signin?error")
				.and()
			.logout()
				.logoutUrl("/signout")
				.logoutSuccessUrl("/signin")
				.invalidateHttpSession(true)
				.and()
			.exceptionHandling()
				.accessDeniedHandler(accessDeniedHandler);
	}
	
	@Override
	@Autowired
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth
			.userDetailsService(userDetailsService)
			.passwordEncoder(passwordEncoder);
	}
}
