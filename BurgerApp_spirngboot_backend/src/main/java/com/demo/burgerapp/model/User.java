package com.demo.burgerapp.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity(name = "User")
@Table(name = "User")
@AllArgsConstructor
@NoArgsConstructor
public class User {
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id")
	private int user_id;
	//@Column(unique =true)
	private String email;
	private String firstName;
	private String lastName;
	private String password;
	
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL,targetEntity = UserOrder.class)
	@NotFound(action=NotFoundAction.IGNORE)
	Set<UserOrder> userOrder=new HashSet<>();

	public Set<UserOrder> getUserOrder() {
		return userOrder;
	}

	
	public int getUser_id() {
		return user_id;
	}


	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public void setUserOrder(Set<UserOrder> userOrder) {
		this.userOrder = userOrder;
	}


	public void addUserOrder(UserOrder order) {
		userOrder.add(order);
	}


	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", email=" + email + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", password=" + password + ", userOrder=" + userOrder + "]";
	}
	
	

}
