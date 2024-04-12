package com.model;

import javax.persistence.*;

@Entity
@Table(name="Feedback")
public class Feedback {
    @Id
    String username;
	String email;
	String comment;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}	
}