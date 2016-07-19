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
	
	@Column(name="content", nullable=false)
	@Type(type = "text")
	private String content;
	
	@Column(name="bought", nullable=false)
	private boolean bought;
	
	@Column(name="owner")
	@OwnerColumn
	private Long owner;
	
	@Column(name="anon_owner")
	@Type(type="text")
	@AnonymousOwnerColumn
	private String anonymousOwner;
	
	public List() {
		this.content = "";
		this.bought = false;
	}

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

	public boolean isBought() {
		return bought;
	}

	public void setBought(boolean bought) {
		this.bought = bought;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 17;
		result = prime * result + ((key == null) ? 0 : key.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		List other = (List) obj;
		if (key == null) {
			if (other.key != null)
				return false;
		} else if (!key.equals(other.key))
			return false;
		return true;
	}

}
