/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

@Configuration
@EnableWebMvc
@ComponentScan({"ua.romenskyi.webapp.shopping.*"})
public class WebMvcConfig extends WebMvcConfigurerAdapter {
	
	public static final String RESOURCES_BASE_URL = "/res/**";
	
	private static final String VIEWS = "/WEB-INF/view/";
	private static final String RESOURCES_LOCATION = "/WEB-INF/res/";
	
	@Bean
	public InternalResourceViewResolver viewResolver() {
		
		InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
		viewResolver.setViewClass(JstlView.class);
		viewResolver.setPrefix(VIEWS);
		viewResolver.setSuffix(".jsp");
		
		return viewResolver;
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		
		registry
			.addResourceHandler(RESOURCES_BASE_URL)
			.addResourceLocations(RESOURCES_LOCATION);
		
		registry
			.addResourceHandler("swagger-ui.html")
			.addResourceLocations("classpath:/META-INF/resources/");
	 
	    registry
	    	.addResourceHandler("/webjars/**")
	    	.addResourceLocations("classpath:/META-INF/resources/webjars/");
	}
	
	@Override
	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
		configurer.enable();
	}
}
