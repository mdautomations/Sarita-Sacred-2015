package com.spring;

import java.util.UUID;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

@PersistenceCapable
public class Entry{	

		private static final long serialVersionUID = 1L;
		@PrimaryKey
	 	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	 	private String key;	
		@Persistent	 
		private String email;
		@Persistent	 
		private String name;	
		@Persistent	 
		private String password;
		
		@Persistent	 
	    private String city;	   
	    
	    @Persistent	 
	    private String address;	   

	    @Persistent	 
	    private String useremail;	
	    
	    @Persistent	 
	    private String mode;
	    
	    public String getMode() {
			return mode;
		}

		public void setMode(String mode) {
			this.mode = mode;
		}

		public String getKey() {
			return key;
		}

		public void setKey(String string) {
			this.key = string;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getCity() {
			return city;
		}
		
		
		public void setCity(String city) {
			this.city = city;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getUseremail() {
			return useremail;
		}

		public void setUseremail(String useremail) {
			this.useremail = useremail;
		}

		public static long getSerialversionuid() {
			return serialVersionUID;
		}

		
		   
	    
		
		}
	

