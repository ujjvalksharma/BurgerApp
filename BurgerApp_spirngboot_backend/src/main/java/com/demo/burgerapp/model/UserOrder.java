package com.demo.burgerapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity(name = "User_Order")
@Table(name = "User_Order")
@AllArgsConstructor
@NoArgsConstructor
public class UserOrder { //table name cannot be order as Order is a keyword in java

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
		@Column(name="order_id")
	private	int orderId;
	private	int tomato;
	private	int lettuse;
	private	int meat;
	private	int cheese;
	private	String street1;
	private	String street2;
	private	String city;
	private	String zipcode;
	private	String state;
	private	String status;
	private int totalAmount;
		@ManyToOne
		@JoinColumn(name = "user_id")
		@JsonIgnore
	private	User user;
		public int getOrderId() {
			return orderId;
		}
		public void setOrderId(int orderId) {
			this.orderId = orderId;
		}
		public int getTomato() {
			return tomato;
		}
		public void setTomato(int tomato) {
			this.tomato = tomato;
		}
		public int getLettuse() {
			return lettuse;
		}
		public void setLettuse(int lettuse) {
			this.lettuse = lettuse;
		}
		public int getMeat() {
			return meat;
		}
		public void setMeat(int meat) {
			this.meat = meat;
		}
		public int getCheese() {
			return cheese;
		}
		public void setCheese(int cheese) {
			this.cheese = cheese;
		}
		public String getStreet1() {
			return street1;
		}
		public void setStreet1(String street1) {
			this.street1 = street1;
		}
		public String getStreet2() {
			return street2;
		}
		public void setStreet2(String street2) {
			this.street2 = street2;
		}
		public String getCity() {
			return city;
		}
		public void setCity(String city) {
			this.city = city;
		}
		public String getZipcode() {
			return zipcode;
		}
		public void setZipcode(String zipcode) {
			this.zipcode = zipcode;
		}
		public String getState() {
			return state;
		}
		public void setState(String state) {
			this.state = state;
		}
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		public User getUser() {
			return user;
		}
		public void setUser(User user) {
			this.user = user;
		}
		
		
		public int getTotalAmount() {
			return totalAmount;
		}
		public void setTotalAmount(int totalAmount) {
			this.totalAmount = totalAmount;
		}
		@Override
		public String toString() {
			return "UserOrder [orderId=" + orderId + ", tomato=" + tomato + ", lettuse=" + lettuse + ", meat=" + meat
					+ ", cheese=" + cheese + ", street1=" + street1 + ", street2=" + street2 + ", city=" + city
					+ ", zipcode=" + zipcode + ", state=" + state + ", status=" + status + ", totalAmount="
					+ totalAmount + ", user=" + user + "]";
		}
	
		
		
		
}
