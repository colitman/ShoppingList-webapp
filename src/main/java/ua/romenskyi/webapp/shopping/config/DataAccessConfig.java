/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.config;

import static org.hibernate.cfg.AvailableSettings.DIALECT;
import static org.hibernate.cfg.AvailableSettings.ENABLE_LAZY_LOAD_NO_TRANS;
import static org.hibernate.cfg.AvailableSettings.HBM2DDL_AUTO;
import static org.hibernate.cfg.AvailableSettings.SHOW_SQL;

import java.beans.PropertyVetoException;
import java.util.Properties;

import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.util.ClassUtils;

import com.mchange.v2.c3p0.ComboPooledDataSource;

import ua.romenskyi.webapp.shopping.Application;

@Configuration
@EnableTransactionManagement
public class DataAccessConfig {
	
	private @Value("${jdbc.host}") String host;
	private @Value("${jdbc.port}") int port;
	private @Value("${jdbc.dbName}") String dbName;
	private @Value("${jdbc.login}") String login;
	private @Value("${jdbc.password}") String password;
	private @Value("${jdbc.driverClassName}") String driverClass;
	private @Value("${jdbc.maxPoolSize}") int maxPoolSize;
	private @Value("${jdbc.minPoolSize}") int minPoolSize;
	private @Value("${jdbc.maxStatements}") int maxStatements; 
	private @Value("${jdbc.testConnection}") boolean testConnectionOnCheckout;
	
	private @Value("${hibernate.dialect}") String dialect;
	private @Value("${hibernate.show_sql}") String showSQL;
	private @Value("${hibernate.hbm2ddl.auto}") String autoDDL;
	private @Value("${hibernate.enable_lazy_load_no_trans}") String lazyLoadNoTrans;
	
	@Bean(destroyMethod="close")
	public DataSource dataSource() throws PropertyVetoException {
		
        String jdbcURL = "jdbc:postgresql://" + host + ':' + port + "/" + dbName;

		ComboPooledDataSource dataSource = new ComboPooledDataSource();
		dataSource.setDriverClass(driverClass);
		dataSource.setJdbcUrl(jdbcURL);
		dataSource.setUser(login);
		dataSource.setPassword(password);
		dataSource.setMaxPoolSize(maxPoolSize);
		dataSource.setMinPoolSize(minPoolSize);
		dataSource.setMaxStatements(maxStatements);
		dataSource.setTestConnectionOnCheckout(testConnectionOnCheckout);
		
		return dataSource;		
	}
	
	@Bean
	@Autowired
	public LocalSessionFactoryBean sessionFactory(DataSource dataSource) {
		
		LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
		sessionFactory.setDataSource(dataSource);
		String entities = ClassUtils.getPackageName(Application.class);
		sessionFactory.setPackagesToScan(entities + ".domain.*");
		
		Properties hibProps = new Properties();
		hibProps.setProperty(DIALECT, dialect);
		hibProps.setProperty(SHOW_SQL, showSQL);
		hibProps.setProperty(HBM2DDL_AUTO, autoDDL);
		hibProps.setProperty(ENABLE_LAZY_LOAD_NO_TRANS, lazyLoadNoTrans);
		
		sessionFactory.setHibernateProperties(hibProps);
		
		return sessionFactory;
	}
	
	@Bean
	@Autowired
	public PlatformTransactionManager transactionManager(SessionFactory sessionFactory) {
		return new HibernateTransactionManager(sessionFactory);
	}
}
