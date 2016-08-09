/**
 * This software is licensed under the terms of the MIT license.
 * Copyright (C) 2016 Dmytro Romenskyi
 */
package ua.romenskyi.webapp.shopping.domain.users;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.Type;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import ua.romenskyi.webapp.shopping.data.NameColumn;
import ua.romenskyi.webapp.shopping.domain.UniqueNamedEntityInterface;
import ua.romenskyi.webapp.shopping.domain.list.List;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name="users")
public class User implements UniqueNamedEntityInterface, UserDetails {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="key")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long key;
	
	@Column(name="username", nullable=false, unique=true)
	@NameColumn
	@Type(type="text")
	private String username;
	
	@Column(name="password", nullable=false)
	@Type(type="text")
	private String password;
	
	@ManyToMany(mappedBy="users")
	@JsonManagedReference
	private Collection<Group> groups;

	@OneToMany(mappedBy = "owner", cascade = CascadeType.ALL)
	@JsonManagedReference
	private Collection<List> lists;

	public User() {
		this.key = -1L;
		this.username = "";
		this.password = "";
		this.groups = new ArrayList<Group>();
		this.lists = new ArrayList<List>();
	}

	@Override
	public Long getKey() {
		return key;
	}

	@Override
	public void setKey(Long key) {
		this.key = key;
	}

	@Override
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	@Transient
	public String getName() {
		return getUsername();
	}

	@Override
	public void setName(String name) {
		setUsername(name);
	}

	@Override
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Collection<Group> getGroups() {
		return groups;
	}

	public void setGroups(Collection<Group> groups) {
		this.groups = groups;
	}

	public Collection<List> getLists() {
		return lists;
	}

	public void setLists(Collection<List> lists) {
		this.lists = lists;
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
		User other = (User) obj;
		if (key == null) {
			if (other.key != null)
				return false;
		} else if (!key.equals(other.key))
			return false;
		return true;
	}

	@Override
	@Transient
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return AuthorityUtils.NO_AUTHORITIES;
	}

	@Override
	@Transient
	public boolean isEnabled() {
		return true;
	}

	@Override
	@Transient
	public boolean isAccountNonExpired() {
		return isEnabled();
	}

	@Override
	@Transient
	public boolean isAccountNonLocked() {
		return isEnabled();
	}

	@Override
	@Transient
	public boolean isCredentialsNonExpired() {
		return isEnabled();
	}
}
