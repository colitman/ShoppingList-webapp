/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.domain.users;

import org.hibernate.annotations.Type;
import ua.romenskyi.webapp.shopping.data.NameColumn;
import ua.romenskyi.webapp.shopping.domain.NamedEntityInterface;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

/**
 * @author dmytro.romenskyi - Jun 28, 2016
 *
 */
@Entity
@Table(name="groups")
public class Group implements NamedEntityInterface {

	@Id
	@Column(name="key")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long key;
	
	@Column(name="name", nullable=false)
	@NameColumn
	@Type(type="text")
	private String name;
	
	@ManyToMany(cascade={CascadeType.PERSIST, CascadeType.MERGE})
	private Collection<User> users;

	public Group() {
		this.key = -1L;
		this.name = "New group";
		this.users = new ArrayList<User>();
	}

	@Override
	public Long getKey() {
		return key;
	}

	public void setKey(Long key) {
		this.key = key;
	}

	@Override
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public Collection<User> getUsers() {
		return users;
	}

	public void setUsers(Collection<User> users) {
		this.users = users;
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
		Group other = (Group) obj;
		if (key == null) {
			if (other.key != null)
				return false;
		} else if (!key.equals(other.key))
			return false;
		return true;
	}

}
