package com.spring;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

@PersistenceCapable
public class visitors{	

		private static final long serialVersionUID = 1L;
		@PrimaryKey
	 	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	 	private String key;	
		@Persistent	 
		private String user;
		@Persistent	 
		private String ID;
	
		@Persistent	 
		private String clickthorugh;
		
		public String getKey() {
			return key;
		}
		public void setKey(String key) {
			this.key = key;
		}
		public String getUser() {
			return user;
		}
		public void setUser(String user) {
			this.user = user;
		}
		public String getID() {
			return ID;
		}
		public void setID(String iD) {
			ID = iD;
		}
	
		public String getClickthorugh() {
			return clickthorugh;
		}
		public void setClickthorugh(String clickthorugh) {
			this.clickthorugh = clickthorugh;
		}
		public static long getSerialversionuid() {
			return serialVersionUID;
		}
		
	
		
	}

