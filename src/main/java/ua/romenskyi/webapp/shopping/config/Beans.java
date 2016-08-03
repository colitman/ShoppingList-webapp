/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.config;

import liquibase.integration.spring.SpringLiquibase;
import org.jasypt.springsecurity3.authentication.encoding.PasswordEncoder;
import org.jasypt.util.password.PasswordEncryptor;
import org.jasypt.util.password.StrongPasswordEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

import javax.sql.DataSource;

@Configuration
@PropertySource("classpath:application.properties")
public class Beans {

	@Bean
	@Autowired
	public SpringLiquibase springLiquibase(DataSource dataSource) {
		SpringLiquibase bean = new SpringLiquibase();

		bean.setDataSource(dataSource);
		bean.setChangeLog("classpath:master.xml");

		return bean;
	}

	@Bean
	public PasswordEncryptor passwordEncryptor() {
		
		PasswordEncryptor passwordEncryptor = new StrongPasswordEncryptor();
		
		return passwordEncryptor;
	}
	
	@Bean
	@Autowired
	public PasswordEncoder  passwordEncoder(PasswordEncryptor passwordEncryptor) {
		
		PasswordEncoder passwordEncoder = new PasswordEncoder();
		passwordEncoder.setPasswordEncryptor(passwordEncryptor);
		
		return passwordEncoder;
	}
	
	@Bean
	public PropertySourcesPlaceholderConfigurer properties() {
		
		PropertySourcesPlaceholderConfigurer properties = new PropertySourcesPlaceholderConfigurer();
		
		return properties;
	}
}
