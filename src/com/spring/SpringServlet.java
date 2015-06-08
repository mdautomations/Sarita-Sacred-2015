package com.spring;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;
import java.util.logging.Level;

import javax.jdo.PersistenceManager;
import javax.servlet.ServletResponse;
import javax.servlet.http.*;

import org.codehaus.jackson.map.ObjectMapper;
import org.mortbay.log.Log;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.Entry;

import javax.jdo.Query;

import com.spring.PMF;
import com.google.appengine.labs.repackaged.org.json.JSONException;

@SuppressWarnings("serial")
@Controller

public class SpringServlet {
		private static final ServletResponse response = null;

@RequestMapping(value="/",method=RequestMethod.GET)	
public String userdefined(HttpServletRequest req, HttpServletResponse resp) throws IOException 
{
	return "login";
}
@RequestMapping(value = "/isAdmin", method = RequestMethod.POST)
public @ResponseBody String isAdmin(HttpServletRequest request,
		@RequestParam(value="isAdmin",required=false)String isAdmin,
		Model model, HttpSession session)
{
	System.out.println("visitng this ");
	String name = "";
	PersistenceManager pm			= null;
	Query queryUserDetails			= null;
	List<Entry> usersInfo			= null;
	String status					=	"";
	try
	{
		pm			= PMF.get().getPersistenceManager();
		queryUserDetails					= 	pm.newQuery(Entry.class,"email == '"+isAdmin+"'");
		usersInfo							= 	(List<Entry>) queryUserDetails.execute();
		for(Entry value:usersInfo)
		{
			System.out.println("the adminmode is this :: "+value.getMode());
			String isAdm = value.getMode();
		    if(isAdm.equalsIgnoreCase("admin"))
			{
				   return "true";
			}
		}
		status								= "false";
	}
	catch (Exception e)
	{
		System.out.println("THE EXCEPTION ARISED IN DATATABLE"+e);
	}
	System.out.println("the status is this :: "+status);
	return status;
}
@RequestMapping(value="/registeration",method=RequestMethod.POST)
public @ResponseBody String registration(
		@RequestParam(value="fullname",required=false)String fullname,
		@RequestParam(value="email",required=false)String email,
		@RequestParam(value="password",required=false)String password,
		@RequestParam(value="address",required=false)String address,
		@RequestParam(value="city",required=false)String city,
		@RequestParam(value="useremail",required=false)String useremail,
		@RequestParam(value="mode",required=false)String mode,
		HttpServletResponse response,HttpSession session)throws IOException, JSONException
{
	System.out.println(" name  " +fullname);
	System.out.println(" email :: " +email);
	System.out.println(" pssword :: " +password);
	System.out.println(" city :: " +city);
	System.out.println(" email :: " +useremail);
	System.out.println(" address :: " +address);
	DateFormat dateFormat   = 	new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
	PersistenceManager  pm         = PMF.get().getPersistenceManager();
	
	System.out.println("the visit comes here");
	try
	{
	Entry enter =  new Entry();
//	Query queryUserDetails =	pm.newQuery(Entry.class," useremail=="+useremail);
	Query	queryUserDetails1					= 	pm.newQuery(Entry.class,"useremail == '"+useremail+"'");
	  List<Entry> usersInfo1 = (List<Entry>)queryUserDetails1.execute();
	  System.out.println("list count is :: "+usersInfo1.size());
	  if(usersInfo1.size()!=0)
	  {
		  return "failure";
	  }
	  else
	  {
		  UUID uniqueKey	= UUID.randomUUID();
			enter.setName(fullname);
			enter.setCity(city);
			enter.setAddress(address);
				enter.setEmail(useremail);
				enter.setUseremail(useremail);
				enter.setKey(uniqueKey.toString());
				enter.setPassword(password);
				enter.setMode(mode);
			pm.currentTransaction().begin();
			pm.makePersistent(enter);
			pm.currentTransaction().commit();
	  }
	}
	catch(Exception e)
	{
			e.getStackTrace();
			System.out.println("the exception is this :: "+e);
			return "failure";
	}
	finally
	{
			pm.close();
	}
	return "success";
}
@RequestMapping(value="/checkentry",method=RequestMethod.POST)
public @ResponseBody String checkentry(HttpServletResponse response,HttpServletRequest request,HttpSession session)throws IOException, JSONException
{
	System.out.println("the visit comes here");
	PersistenceManager  pm         = PMF.get().getPersistenceManager();
	Entry enter =  new Entry();
	String keyword			=   request.getParameter("email");
	String password			=   request.getParameter("password");
	System.out.println("name is this:: "+keyword);
	System.out.println("password is this:: "+password);
	Query queryUserDetails1 =	pm.newQuery(Entry.class," useremail == '"+keyword+"' && password == '"+password+"'");
	  List<Entry> usersInfo1 = (List<Entry>)queryUserDetails1.execute();
	  System.out.println("list count is :: "+usersInfo1.size());
	  if(usersInfo1.size()!=0)
	  {
		  return "success";
	  }
	  else
	  {
		  return "failure";
	  }
}
@RequestMapping(value = "/insertOrUpdateAccess", method = RequestMethod.POST)
public void disableStatus(HttpServletRequest request,
		@RequestParam(value="id",required=false)String id, 
		@RequestParam(value="user",required=false)String user,
		Model model, HttpSession session)
{
	System.out.println("checks for visitors table entry to increment the visit count");
	 PersistenceManager      pm			= 		null;
	 PersistenceManager      pmfs			= 		null;
	 Query QueryLists  				   			=		null;
	 Query linkLists  				   			=		null;
	 List<visitors> listEntry 						=		null;
	 List<links> linkentry 						=		null;
	 try
	 {
		 System.out.println("ID is this :: "+id);
		 pm     	    		=  		PMF.get().getPersistenceManager();
		 QueryLists  =	pm.newQuery(visitors.class," ID == '"+id+"a"+"' && user == '"+user+"'");
		 listEntry 			= 			(List<visitors>)QueryLists.execute();
		 if( listEntry != null && !listEntry.isEmpty() )
 		 {
 			 for( visitors value:listEntry )
 			 {
 				 String username = value.getUser();
 				 if(username.equalsIgnoreCase(user))
 				 {
 					System.out.println("Queries the visitors table to increment the count");
 	 				 String clickthorugh = value.getClickthorugh();
 	 				
 	 				 if(clickthorugh!=null)
 	 				 {
 	 					 System.out.println("the current click rate ::"+clickthorugh);
 	 					 int clicks = Integer.parseInt(clickthorugh);
 	 					 clicks = clicks+1;
 	 					 String str = String.valueOf(clicks);
 	 					 value.setClickthorugh(str);
 	 					 System.out.println("The new click through rate set is "+str);
 	 					pm.currentTransaction().begin();
 	 					 pm.makePersistent(value);
 	 					 pm.currentTransaction().commit();
 	 				 }
 	 				 else
 	 				 {
 	 					 System.out.println("The visitors table has entries, but the click through value found to be null so add 1 manually ");
 	 					 int clicks =1;
 	 					 String str = String.valueOf(clicks);
 	 					 value.setClickthorugh(str);
 	 					pm.currentTransaction().begin();
	 					 pm.makePersistent(value);
	 					 pm.currentTransaction().commit();
 	 				 }
 				 }
 				 else
 				 {
 					System.out.println("The vistitors table itself found to be null");
 		 			 visitors newCWAAccessObj	=		new visitors();
 		 			 UUID uniqueKey	= UUID.randomUUID();
 		 			 newCWAAccessObj.setKey(uniqueKey.toString());
 		 			 newCWAAccessObj.setID(id+"a");
 		 			newCWAAccessObj.setUser(user);
 		 			 int clicks =1;
 		 			 String str = String.valueOf(clicks);
 					 newCWAAccessObj.setClickthorugh(str);
 					 pm.currentTransaction().begin();
 					 pm.makePersistent(newCWAAccessObj);
 					 pm.currentTransaction().commit();
 		 			 System.out.println("the new valus has been wrote to visitors table :: "+uniqueKey.toString() +"Click rate set to "+str +"  for ::  "+  id+"a");
 				 }
 			 }
 		 }
 		 else
 		 {
	 			 System.out.println("The vistitors table itself found to be null");
	 			 visitors newCWAAccessObj	=		new visitors();
	 			 UUID uniqueKey	= UUID.randomUUID();
	 			 newCWAAccessObj.setKey(uniqueKey.toString());
	 			 newCWAAccessObj.setID(id+"a");
	 			 newCWAAccessObj.setUser(user);
	 			 int clicks =1;
	 			 String str = String.valueOf(clicks);
				 newCWAAccessObj.setClickthorugh(str);
				 pm.currentTransaction().begin();
				 pm.makePersistent(newCWAAccessObj);
				 pm.currentTransaction().commit();
	 			 System.out.println("the new valus has been wrote to visitors table :: "+uniqueKey.toString() +"Click rate set to "+str +"  for ::  "+  id+"a");
 		 }
		
		 pmfs     	    		=  		PMF.get().getPersistenceManager();
		 linkLists       		= 		pmfs.newQuery(links.class,"ID == '"+id+"a"+"'");
		 linkentry 			= 			(List<links>)linkLists.execute();
		 links newlink			=		new links();
		 if( linkentry != null && !linkentry.isEmpty() )
 		 {
			 System.out.println("Entery is there on links");
 			 for( links value:linkentry )
 			 {
 				 	System.out.println("Iterating");
 					int clickcount = Integer.parseInt(value.getTimes());
 					clickcount = clickcount+1;
 					value.setTimes(String.valueOf(clickcount));
 					pmfs.currentTransaction().begin();
 					 pmfs.makePersistent(value);
 					 pmfs.currentTransaction().commit();
 			 }
 		 }
		 else
		 {
			 System.out.println("new Entry Iterating");
			 UUID uniqueKey			= 		UUID.randomUUID();
			 int clickcount = 1;
			 newlink.setKey(uniqueKey.toString());
			 newlink.setID(id+"a");
			 newlink.setTimes(String.valueOf(clickcount));
			 pmfs.currentTransaction().begin();
			 pmfs.makePersistent(newlink);
			 pmfs.currentTransaction().commit();
		 }
	 }
	 catch(Exception e)
	 {
		 		System.out.println("Exception Occured while writing values to visitors :: "+e);
	 }
	 finally
	 {
		 if(pm!=null)
			 pm.close();
		 pmfs.close();
		 
	 }
}
@RequestMapping(value="/storedetails",method=RequestMethod.POST)
public void storedetails(
		@RequestParam(value="user",required=false)String user,
		@RequestParam(value="queries",required=false)String queries,
		@RequestParam(value="url",required=false)String url,
		@RequestParam(value="date",required=false)String date,
		@RequestParam(value="id",required=false)String id,
		HttpServletResponse response,HttpSession session,HttpServletRequest request)throws IOException, JSONException
{
	System.out.println(" user  " +user);
	System.out.println(" queries :: " +queries);
	System.out.println(" url :: " +url);
	System.out.println(" date :: " +date);
	System.out.println(" id :: " +id);
	String 		ipAddress 							= 			(String)request.getRemoteHost();
	String 		clickthorughs  						= 			" ";
	PersistenceManager  pm         					=	 		PMF.get().getPersistenceManager();
	
		 try
			{
			    Entry1 enter    								=  			new Entry1();
				UUID uniqueKey									=			UUID.randomUUID();
				Query 			QueryLists  				   	=			null;
				Query 			QueryListsentry  				=			null;
				 List<visitors>    listEntrys 					=			null;
				 List<Entry1>    listEntryentry					=			null;
				 pm     	   									=  			PMF.get().getPersistenceManager();
				 QueryLists     								= 			pm.newQuery(visitors.class,"ID == '"+id+"a"+"'");
				 QueryListsentry  								=			pm.newQuery(Entry1.class," ID == '"+id+"a"+"' && user == '"+user+"'");
//				 QueryListsentry     							= 			pm.newQuery(Entry1.class,"ID == '"+id+"a"+"'");
				 listEntrys 									= 			(List<visitors>)QueryLists.execute();
				 listEntryentry 								= 			(List<Entry1>)QueryListsentry.execute();
				 
				 if( listEntryentry != null && !listEntryentry.isEmpty() )
				 {
					 for( Entry1 value:listEntryentry )
		 			 {
		 				 String userlog = value.getUser();
		 				 if(userlog.equalsIgnoreCase(user))
		 				 {
		 					for( visitors values:listEntrys )
				 			 {
				 					 clickthorughs = values.getClickthorugh();
				 					value.setClickthrough(clickthorughs);
				 					pm.currentTransaction().begin();
									pm.makePersistent(values);
									pm.currentTransaction().commit();
				 			 }
		 				 }
		 				 else
						 {
							   clickthorughs = "1";
							    enter.setID(id+"a");
								enter.setDate(date);
								enter.setDwelltime(" ");
								enter.setIpaddress(ipAddress);
								enter.setKey(uniqueKey.toString());
								enter.setQueries(queries);
								enter.setUrl(url);
								enter.setUser(user);
								enter.setBounceRate(" ");
								enter.setClickthrough(clickthorughs);
								pm.currentTransaction().begin();
								pm.makePersistent(enter);
								pm.currentTransaction().commit();
						 }
		 			 }
				 }
				 else
				 {
					 	clickthorughs = "1";
					    enter.setID(id+"a");
						enter.setDate(date);
						enter.setDwelltime(" ");
						enter.setIpaddress(ipAddress);
						enter.setKey(uniqueKey.toString());
						enter.setQueries(queries);
						enter.setUrl(url);
						enter.setUser(user);
						enter.setBounceRate(" ");
						enter.setClickthrough(clickthorughs);
						pm.currentTransaction().begin();
						pm.makePersistent(enter);
						pm.currentTransaction().commit();
						pm.close();
				 }
				 System.out.println("going to set :: "+clickthorughs);
			}
			catch(Exception e)
			{
				e.getStackTrace();
				System.out.println("the exception is this :: "+e);
			}
}
@RequestMapping(value = "/updatedwell", method = RequestMethod.POST)
public void updatedwell(HttpServletRequest request,
		@RequestParam(value="updatedwellid",required=false)String updatedwellid,
		@RequestParam(value="dwelltime",required=false)String dwelltime,
		@RequestParam(value="bouncerate",required=false)String bouncerate,
		@RequestParam(value="userlogin",required=false)String userlogin,
		Model model, HttpSession session)
{
	System.out.println("hello updatedwell");
	 PersistenceManager      pm			= 	null;
	 Query QueryLists  				   	=	null;
	 List<Entry1> listEntry 		=	null;
	 String status 						= 	"";
	 try
	 {
		 pm     	    =  	PMF.get().getPersistenceManager();
//		 QueryLists     = 	pm.newQuery(Entry1.class,"ID == '"+updatedwellid+"a"+"'");
		 QueryLists  	=	pm.newQuery(Entry1.class," ID == '"+updatedwellid+"a"+"' && user == '"+userlogin+"'");
		 listEntry 		= 	(List<Entry1>)QueryLists.execute();
		 if( listEntry != null && !listEntry.isEmpty() )
 		 {
 			 for( Entry1 value:listEntry )
 			 {
 				 System.out.println("inert or updare");
 				 
 				 String user = value.getUser();
 				 if(user.equalsIgnoreCase(userlogin))
 				 {
 					 if(value.getDwelltime()!=null && value.getDwelltime()!=" ")
 					 {
 						int dwells = Integer.parseInt(value.getDwelltime());
 						dwells  = dwells+Integer.parseInt(dwelltime);
 						dwelltime = String.valueOf(dwells);
 						if(dwells>30)
 						{
 							bouncerate = String.valueOf(1);
 						}
 					 }
 					value.setBounceRate(bouncerate);
 					value.setDwelltime(String.valueOf(dwelltime));
 					pm.currentTransaction().begin();
					 pm.makePersistent(value);
					 pm.currentTransaction().commit();
 					 break;
 				 }
 			 }
 		 }
		 else
		 {
			 
			 
		 }
// 		 else
// 		 {
//	 			 System.out.println("else part");
//	 			 visitors newCWAAccessObj	=		new visitors();
//	 			 UUID uniqueKey	= UUID.randomUUID();
//	 			 newCWAAccessObj.setKey(uniqueKey.toString());
//	 			 newCWAAccessObj.setID(id+"a");
//	 			 int clicks =1;
//	 			 String str = String.valueOf(clicks);
//				 newCWAAccessObj.setClickthorugh(str);
//	 			 pm.makePersistent(newCWAAccessObj);
//	 			 System.out.println("else part out");
// 		 }
	 }
	 catch(Exception e)
	 {
		 System.out.println("error occured :: "+e);
	 }
	 finally
	 {
		 if(pm!=null)
			 pm.close();
	 }
}
@RequestMapping(value="/getData",method=RequestMethod.POST)
public @ResponseBody String getData(HttpServletResponse response,HttpServletRequest request,HttpSession session)throws IOException, JSONException
{
	System.out.println("visitng this mining controller");
	PersistenceManager pm			= 			null;
	Query queryUserDetails				= 			null;
	List<Entry1> usersInfo					= 			null;
	String status								=	"";
	
	try
	{
		pm			= PMF.get().getPersistenceManager();
		
		HashMap<String, Entry1> tableEntry = new HashMap<String,Entry1>();
		queryUserDetails					= 	pm.newQuery(Entry1.class);
		usersInfo							= 	(List<Entry1>) queryUserDetails.execute();
		for(Entry1 value:usersInfo)
		{
			tableEntry.put(value.getKey().toString(),value);
		}
		status								= new ObjectMapper().writeValueAsString(tableEntry);
	}
	catch (Exception e)
	{
		System.out.println("THE EXCEPTION ARISED IN DATATABLE"+e);
	}
	return status;
}

@RequestMapping(value = "/getNewDesignAccessList", method = RequestMethod.POST)
public @ResponseBody String fetchtable(HttpServletRequest request, Model model, HttpSession session)
{
	   String status 							= 		null;
	   PersistenceManager pm 					= 		null;
	   Query queryUserDetails					=		null;
	   List<Entry1> usersInfo					=		null;
	   
	   try
	   {
	        pm             								   =      PMF.get().getPersistenceManager();
	        HashMap<String, Entry1> tableEntry 	   		   =      new HashMap<String,  Entry1>();
	        queryUserDetails        				   	   =  	  pm.newQuery(Entry1.class);
	        usersInfo           					   	   =      (List<Entry1>) queryUserDetails.execute();
	      
	        for( Entry1 value:usersInfo )
	        {
	        	tableEntry.put( value.getKey().toString(), value );
	        }  
	        
	        status               						   =   	  new ObjectMapper().writeValueAsString(tableEntry);
	   }
	   catch(Exception e)
	   {
	   }
	return status;
}
@RequestMapping(value = "/getuserEntry", method = RequestMethod.POST)
public @ResponseBody String getuserEntry(HttpServletRequest request, Model model, HttpSession session)
{
	   String status 							= 		null;
	   PersistenceManager pm 					= 		null;
	   Query queryUserDetails					=		null;
	   List<Entry> usersInfo				=		null;
	   
	   try
	   {
	        pm             								   =      PMF.get().getPersistenceManager();
	        HashMap<String, Entry> tableEntry 	   		   =      new HashMap<String,  Entry>();
	        queryUserDetails        				   	   =  	  pm.newQuery(Entry.class);
	        usersInfo           					   	   =      (List<Entry>) queryUserDetails.execute();
	      
	        for( Entry value:usersInfo )
	        {
	        	tableEntry.put( value.getKey().toString(), value );
	        }  
	        
	        status               						   =   	  new ObjectMapper().writeValueAsString(tableEntry);
	   }
	   catch(Exception e)
	   {
	   }
	return status;
}
@RequestMapping(value = "/getmultitask", method = RequestMethod.POST)
public @ResponseBody String getmultitask(HttpServletRequest request, Model model, HttpSession session)
{
	   String status 							= 		null;
	   PersistenceManager pm 					= 		null;
	   Query queryUserDetails					=		null;
	   List<Entry1> usersInfo				=		null;
	   System.out.println("comes here sdfjdsbjhbfhbdjs");
	   try
	   {
	        pm             								   =      PMF.get().getPersistenceManager();
	        HashMap<String, Entry1> tableEntry 	   		   =      new HashMap<String,  Entry1>();
	        queryUserDetails        				   	   =  	  pm.newQuery(Entry1.class);
	        usersInfo           					   	   =      (List<Entry1>) queryUserDetails.execute();
	       
	        for( Entry1 value:usersInfo )
	        {
	        	String Clickings = value.getClickthrough();
	        	if(Clickings.trim().length()>0)
	        	{
	        		int clicks = Integer.parseInt(value.getClickthrough());
		        	System.out.println("dfkjndjknfjdknv"+clicks);
		        	if(clicks>10)
		        	{
		        		tableEntry.put( value.getKey().toString(), value );
		        	}
	        	}
	        }  
	        status               						   =   	  new ObjectMapper().writeValueAsString(tableEntry);
	   }
	   catch(Exception e)
	   {
		   System.out.println("Exception arised is this ::"+e);
	   }
	return status;
}
@RequestMapping(value = "/interleavetask", method = RequestMethod.POST)
public @ResponseBody String interleavetask(HttpServletRequest request, Model model, HttpSession session)
{
	   String status 							= 		null;
	   PersistenceManager pm 					= 		null;
	   Query queryUserDetails					=		null;
	   List<Entry1> usersInfo				=		null;
	   System.out.println("comes here sdfjdsbjhbfhbdjs");
	   try
	   {
	        pm             								   =      PMF.get().getPersistenceManager();
	        HashMap<String, Entry1> tableEntry 	   =      new HashMap<String,  Entry1>();
	        queryUserDetails        				   	   =  	  pm.newQuery(Entry1.class);
	        usersInfo           					   	   =      (List<Entry1>) queryUserDetails.execute();
	       
	        for( Entry1 value:usersInfo )
	        {
	        	String Clickings = value.getClickthrough();
	        	if(Clickings.trim().length()>0)
	        	{
	        		int clicks = Integer.parseInt(value.getClickthrough());
		        	System.out.println("dfkjndjknfjdknv"+clicks);
		        	if(clicks<10)
		        	{
		        		tableEntry.put( value.getKey().toString(), value );
		        	}
	        	}
	        }  
	        status               						   =   	  new ObjectMapper().writeValueAsString(tableEntry);
	   }
	   catch(Exception e)
	   {
		   System.out.println("Exception arised is this ::"+e);
	   }
	return status;
}
@RequestMapping(value = "/session1", method = RequestMethod.POST)
public @ResponseBody String session(HttpServletRequest request, Model model, HttpSession session)
{
	   String status 							= 		null;
	   PersistenceManager pm 					= 		null;
	   Query queryUserDetails					=		null;
	   List<Entry1> usersInfo					=		null;
	   try
	   {
	        pm             								   =      PMF.get().getPersistenceManager();
	        HashMap<String, Entry1> tableEntry 	   		   =      new HashMap<String,  Entry1>();
	        queryUserDetails        				   	   =  	  pm.newQuery(Entry1.class);
	        usersInfo           					   	   =      (List<Entry1>) queryUserDetails.execute();
	       int count = 0;
	        for( Entry1 value:usersInfo )
	        {
	        	if(count<50)
	        	{
			        		tableEntry.put( value.getKey().toString(), value );
	        	}
	        	else
	        	{
	        		break;
	        	}
	        	count++;
	        }  
	        status               						   =   	  new ObjectMapper().writeValueAsString(tableEntry);
	   }
	   catch(Exception e)
	   {
		   System.out.println("Exception arised is this ::"+e);
	   }
	return status;
}
@RequestMapping(value = "/session2", method = RequestMethod.POST)
public @ResponseBody String session2(HttpServletRequest request, Model model, HttpSession session)
{
	   String status 							= 		null;
	   PersistenceManager pm 					= 		null;
	   Query queryUserDetails					=		null;
	   List<Entry1> usersInfo				=		null;
	   try
	   {
	        pm             								   =      PMF.get().getPersistenceManager();
	        HashMap<String, Entry1> tableEntry 	   =      new HashMap<String,  Entry1>();
	        queryUserDetails        				   	   =  	  pm.newQuery(Entry1.class);
	        usersInfo           					   	   =      (List<Entry1>) queryUserDetails.execute();
	       int count = 0;
	        for( Entry1 value:usersInfo )
	        {
	        	if(count>50)
	        	{
			        		tableEntry.put( value.getKey().toString(), value );
	        	}
	        	else
	        	{
	        		count++;
	        	}
	        }  
	        status               						   =   	  new ObjectMapper().writeValueAsString(tableEntry);
	   }
	   catch(Exception e)
	   {
		   System.out.println("Exception arised is this ::"+e);
	   }
	return status;
}
@RequestMapping(value = "/getlink", method = RequestMethod.POST)
public @ResponseBody String getlink(HttpServletRequest request, Model model, HttpSession session)
{
	   String status 							= 		null;
	   PersistenceManager pm 					= 		null;
	   Query queryUserDetails					=		null;
	   List<links> usersInfo				=		null;
	   try
	   {
	        pm             								   =      PMF.get().getPersistenceManager();
	        HashMap<String, links> tableEntry 	   =      new HashMap<String,  links>();
	        queryUserDetails        				   	   =  	  pm.newQuery(links.class);
	        usersInfo           					   	   =      (List<links>) queryUserDetails.execute();
	       int count = 0;
	        for( links value:usersInfo )
	        {
			        		tableEntry.put( value.getKey().toString(), value );
	        }  
	        status               						   =   	  new ObjectMapper().writeValueAsString(tableEntry);
	   }
	   catch(Exception e)
	   {
		   System.out.println("Exception arised is this ::"+e);
	   }
	return status;
}
@RequestMapping(value = "/getsortedlist", method = RequestMethod.POST)
public @ResponseBody String getsortedlist(HttpServletRequest request, @RequestParam(value="user",required=false)String user)
{
	   String status 							= 		null;
	   PersistenceManager pm 					= 		null;
	   Query queryUserDetails					=		null;
	   List<visitors> usersInfo					=		null;
	   try
	   {
	        pm             								   =      PMF.get().getPersistenceManager();
	        HashMap<String, visitors> tableEntry 	   	   =      new HashMap<String,  visitors>();
	        queryUserDetails     						   = 	  pm.newQuery(visitors.class,"user == '"+user+"'");
	        usersInfo           					   	   =      (List<visitors>) queryUserDetails.execute();
	        int count = 0;
	        for( visitors value:usersInfo )
	        {
			        		tableEntry.put( value.getKey().toString(), value );
	        }  
	        status               						   =   	  new ObjectMapper().writeValueAsString(tableEntry);
	   }
	   catch(Exception e)
	   {
		   System.out.println("Exception arised is this ::"+e);
	   }
	return status;
}
}

