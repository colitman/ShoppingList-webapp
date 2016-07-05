/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.domain.list;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Type;

import ua.romenskyi.webapp.shopping.data.AnonymousOwnerColumn;
import ua.romenskyi.webapp.shopping.data.OwnerColumn;
import ua.romenskyi.webapp.shopping.domain.OwnedEntityInterface;

/**
 * @author dmytro.romenskyi - Jun 29, 2016
 *
 */
@Entity
@Table(name="lists")
public class List implements OwnedEntityInterface {

	@Id
	@Column(name="key")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long key;
	
	@Column(name="content")
	@Type(type = "text")
	private String content;
	
	@Column(name="owner")
	@OwnerColumn
	private Long owner;
	
	@Column(name="anonymousOwner")
	@Type(type="text")
	@AnonymousOwnerColumn
	private String anonymousOwner;

	@Override
	public Long getKey() {
		return key;
	}

	@Override
	public void setKey(Long key) {
		this.key = key;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public Long getOwner() {
		return owner;
	}

	@Override
	public void setOwner(Long owner) {
		this.owner = owner;
	}

	@Override
	public String getAnonymousOwner() {
		return anonymousOwner;
	}

	@Override
	public void setAnonymousOwner(String anonymousOwner) {
		this.anonymousOwner = anonymousOwner;
	}

}
