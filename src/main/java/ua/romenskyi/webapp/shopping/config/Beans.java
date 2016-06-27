package ua.romenskyi.webapp.shopping.config;

import org.jasypt.springsecurity3.authentication.encoding.PasswordEncoder;
import org.jasypt.util.password.PasswordEncryptor;
import org.jasypt.util.password.StrongPasswordEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

@Configuration
@PropertySource("classpath:application.properties")
public class Beans {
	
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
		//properties.setLocation(new ClassPathResource("application.properties"));
		
		return properties;
	}
}
