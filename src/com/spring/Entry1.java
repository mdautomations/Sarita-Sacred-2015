package com.spring;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

@PersistenceCapable
public class Entry1{	

		private static final long serialVersionUID = 1L;
		@PrimaryKey
	 	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	 	private String key;	
		@Persistent	 
		private String user;
		@Persistent	 
		private String ID;
		@Persistent	 
		private String queries;
		@Persistent	 
		private String url;	
		@Persistent	 
		private String ipaddress;
		@Persistent	 
		private String dwelltime;
		@Persistent	 
		private String date;
		@Persistent	 
		private String Clickthrough;
		@Persistent	 
		private String bounceRate;
		
		public String getBounceRate() {
			return bounceRate;
		}
		public void setBounceRate(String bounceRate) {
			this.bounceRate = bounceRate;
		}
		public String getClickthrough() {
			return Clickthrough;
		}
		public void setClickthrough(String clickthrough) {
			Clickthrough = clickthrough;
		}
		public String getKey() {
			return key;
		}
		public void setKey(String key) {
			this.key = key;
		}
		public String getID() {
			return ID;
		}
		public void setID(String iD) {
			ID = iD;
		}
		public String getUser() {
			return user;
		}
		public void setUser(String user) {
			this.user = user;
		}
		public String getQueries() {
			return queries;
		}
		public void setQueries(String queries) {
			this.queries = queries;
		}
		public String getUrl() {
			return url;
		}
		public void setUrl(String url) {
			this.url = url;
		}
		public String getIpaddress() {
			return ipaddress;
		}
		public void setIpaddress(String ipaddress) {
			this.ipaddress = ipaddress;
		}
		public String getDwelltime() {
			return dwelltime;
		}
		public void setDwelltime(String dwelltime) {
			this.dwelltime = dwelltime;
		}
		public String getDate() {
			return date;
		}
		public void setDate(String date) {
			this.date = date;
		}
		public static long getSerialversionuid() {
			return serialVersionUID;
		}
	
		
	}

