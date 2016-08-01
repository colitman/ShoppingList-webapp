/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.models.json;

import ua.romenskyi.webapp.shopping.domain.list.List;

/**
 * @author dmytro.romenskyi - Jul 19, 2016
 *
 */
public class JsonList implements JsonModel {
	
	private long key;
	private JsonProduct[] content;
	private boolean bought;
	private boolean publicList;
	private String anonymousOwner;
	private long owner;

	public JsonList() {
		this.key = -1L;
		this.content = new JsonProduct[0];
		this.bought = false;
		this.publicList = false;
		this.anonymousOwner = "";
		this.owner = -1L;
	}
	
	public List toDomain() {
		List domainList = new List();
		
		domainList.setKey(getKey());
		domainList.setContent(getStringContent());
		domainList.setBought(isBought());
		domainList.setPublicList(isPublicList());
		domainList.setOwner(getOwner());
		domainList.setAnonymousOwner(getAnonymousOwner());
		
		return domainList;
	}
	
	private String getStringContent() {
		String data = ""; 
		
		for(int i = 0; i < getContent().length; i++) {
			if(i == 0) {
				data += "[";
			}
			
			JsonProduct p = getContent()[i];
			
			data += "{\"key\": \"" + p.getKey() + "\", \"name\": \"" + p.getName() + "\", \"bought\": " + String.valueOf(p.isBought()) + "}";
			
			if(i != getContent().length - 1) {
				data += ", ";
			}
			
			if(i == getContent().length - 1) {
				data += "]";
			}
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

	public boolean isBought() {
		return bought;
	}

	public void setBought(boolean bought) {
		this.bought = bought;
	}

	public boolean isPublicList() {
		return publicList;
	}

	public void setPublicList(boolean publicList) {
		this.publicList = publicList;
	}

	public String getAnonymousOwner() {
		return anonymousOwner;
	}

	public void setAnonymousOwner(String anonymousOwner) {
		this.anonymousOwner = anonymousOwner;
	}

	public long getOwner() {
		return owner;
	}

	public void setOwner(long owner) {
		this.owner = owner;
	}
}
