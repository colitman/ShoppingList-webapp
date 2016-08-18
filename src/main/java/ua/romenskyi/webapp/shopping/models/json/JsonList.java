/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.models.json;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ua.romenskyi.webapp.shopping.domain.list.List;

import java.io.IOException;
import java.util.ArrayList;

/**
 * @author dmytro.romenskyi - Jul 19, 2016
 *
 */
public class JsonList implements JsonModel {
	
	private long key;
	private JsonProduct[] content;
	private String status;
	private boolean publicList;

	public JsonList() {
		this.key = -1L;
		this.content = new JsonProduct[0];
		this.status = List.Status.DRAFT.name().toLowerCase();
		this.publicList = false;
	}

	public JsonList(List list) {
		this.key = list.getKey();
		this.content = parseProducts(list.getContent());
		this.status = list.getStatus().toLowerCase();
		this.publicList = list.isPublicList();
	}
	
	public List toDomain() {
		List domainList = new List();
		
		domainList.setKey(getKey());
		domainList.setContent(getStringContent());
		domainList.setStatus(getStatus());
		domainList.setPublicList(isPublicList());
		
		return domainList;
	}

	private JsonProduct[] parseProducts(String expression) {
		ObjectMapper mapper = new ObjectMapper();
		java.util.List<JsonProduct> products = new ArrayList<JsonProduct>();
		try {
			products = mapper.readValue(expression, new TypeReference<java.util.List<JsonProduct>>(){});
		} catch (JsonParseException jpe) {
			//TODO addlogging
		} catch (JsonMappingException jme) {
			//TODO add logging
		} catch (IOException e) {
			//TODO add logging
		}
		return products.toArray(new JsonProduct[0]);
	}
	
	private String getStringContent() {
		String data = "";

		ObjectMapper mapper = new ObjectMapper();
		try {
			data = mapper.writeValueAsString(getContent());
		} catch (JsonProcessingException jpe) {
			//TODO addlogging
		}
		
		return data;
	}

	public long getKey() {
		return key;
	}

	public void setKey(long key) {
		this.key = key;
	}

	public JsonProduct[] getContent() {
		return content;
	}

	public void setContent(JsonProduct[] content) {
		this.content = content;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public boolean isPublicList() {
		return publicList;
	}

	public void setPublicList(boolean publicList) {
		this.publicList = publicList;
	}
}
