/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.ClassUtils;
import org.springframework.web.bind.annotation.CookieValue;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import ua.romenskyi.webapp.shopping.Application;

/**
 * @author dmytro.romenskyi - Jun 28, 2016
 *
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	@Bean
	public Docket api() {
		String apiBasePackage = ClassUtils.getPackageName(Application.class) + ".web.api";
		
		Docket docket = new Docket(DocumentationType.SWAGGER_2);
		docket
			.select()
				.apis(RequestHandlerSelectors.basePackage(apiBasePackage))
				.paths(PathSelectors.ant("/api/**"))
				.build()
			.apiInfo(apiInfo())
			.ignoredParameterTypes(CurrentUser.class,
									CookieValue.class);
		
		return docket;
	}
	
	private ApiInfo apiInfo() {
		ApiInfo apiInfo = new ApiInfo(
				"ShoppingList API",
				"API for public use and integration",
				"1.0",
				"urn:tos",
				new Contact("Dmytro Romenskyi", "https://ua.linkedin.com/in/dmytro-romenskyi-87035524", "d.romenskyi@gmail.com"),
				"This software is licensed under the terms of the MIT license.",
				"https://github.com/colitman/ShoppingList-webapp/blob/master/LICENSE.md");
		return apiInfo;
		
	}
}
