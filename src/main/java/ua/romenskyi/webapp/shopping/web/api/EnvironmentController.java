/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.web.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Hashtable;
import java.util.Map;

/**
 * @author dmytro.romenskyi - Jun 28, 2016
 *
 */
@RestController
@RequestMapping(path="api/")
public class EnvironmentController {
	
	private static final String PROC_ARCH = "PROCESSOR_ARCHITECTURE";
	private static final String PROC_LEVEL = "PROCESSOR_LEVEL";
	private static final String PROC_NUMBER = "NUMBER_OF_PROCESSORS";
	private static final String SYS_DRIVE = "SystemDrive";
	private static final String DNS_DOMAIN = "USERDNSDOMAIN";
	private static final String OS = "OS";
	private static final String COMP_NAME = "COMPUTERNAME";


	@RequestMapping(path="environment", method=RequestMethod.GET)
	public ResponseEntity<Map<String, String>> getEnv() {
		Map<String,String> environment = new Hashtable<String,String>();
		
		/*environment.put(PROC_ARCH, System.getenv(PROC_ARCH));
		environment.put(PROC_LEVEL, System.getenv(PROC_LEVEL));
		environment.put(PROC_NUMBER, System.getenv(PROC_NUMBER));
		environment.put(SYS_DRIVE, System.getenv(SYS_DRIVE));
		environment.put(DNS_DOMAIN, System.getenv(DNS_DOMAIN));
		environment.put(OS, System.getenv(OS));
		environment.put(COMP_NAME, System.getenv(COMP_NAME));*/
		
		ResponseEntity<Map<String, String>> response = new ResponseEntity<Map<String,String>>(environment, HttpStatus.OK);
		return response;
	}
}
