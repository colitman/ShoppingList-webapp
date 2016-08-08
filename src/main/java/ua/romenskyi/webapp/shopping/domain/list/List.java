/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.domain.list;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.Type;
import ua.romenskyi.webapp.shopping.data.AnonymousOwnerColumn;
import ua.romenskyi.webapp.shopping.data.OwnerColumn;
import ua.romenskyi.webapp.shopping.domain.OwnedEntityInterface;
import ua.romenskyi.webapp.shopping.domain.users.User;

import javax.persistence.*;

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
	
	@Column(name="public", nullable=false)
	private boolean publicList;

	@ManyToOne
	@JoinColumn(name="owner")
	@OwnerColumn
	@JsonBackReference
	private User owner;
	
	@Column(name="anon_owner", updatable=false)
	@Type(type="text")
	@AnonymousOwnerColumn
	private String anonymousOwner;
	
	public List() {
		this.key = -1L;
		this.content = "[]";
		this.bought = false;
		this.publicList = false;
		this.owner = null;
		this.anonymousOwner = "";
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

	public boolean isPublicList() {
		return publicList;
	}

	public void setPublicList(boolean publicList) {
		this.publicList = publicList;
	}

	@Override
	public User getOwner() {
		return owner;
	}

	@Override
	public void setOwner(User owner) {
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
