	$('#weblogtab').click(function()
    {
			var weblog = checkIsAdmin("weblog.jsp");
    });
    		$('#segmentationtab').click(function()
    				{
    					var weblog = checkIsAdmin("segmentation.jsp");
    			
    				});
    		$('#multitasktab').click(function()
    				{

    					var weblog = checkIsAdmin("multitask.jsp");
    				
    				});
    		$('#interleavetab').click(function()
    				{
    			
    						var weblog = checkIsAdmin("interleave.jsp");
    				});
    		$('#session1tab').click(function()
    				{
    						var weblog = checkIsAdmin("session1.jsp");
    			
    				});
    		$('#session2tab').click(function()
    				{
    						var weblog = checkIsAdmin("session2.jsp");
    				});
    		$('#stattab').click(function()
    		{
    				var weblog = checkIsAdmin("statt.jsp");
    		});

    		
function checkIsAdmin(value)
{
		var isAdmins = getRegistrationUrlCookie();
		alert("isAdmins :: "+isAdmins);
		if(isAdmins==="admin")
		{
			 window.location.href="/"+value;
		}
		else
		{
			 alert("You need an admin access to view the server logs, please log in as admin");
		}
//		 $.ajax({
//	         type: 'POST',
//	         url: '/isAdmin', 
//	         data	: {isAdmin:isAdmins},
//	         async : true,
//	         success: function(data)
//   			 {
//	        	  if(data==="true")
//	        		  
//	        	  else
//	        		 alert("You need an admin access to view the server logs, please log in as admin");
//   			 }
//		 });

}
function setRegistrationUrlCookie(cook)
{
	document.cookie="cookie" + "=" + cook;
}
function getRegistrationUrlCookie()
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	content= "cookie";
	for (i=0;i<ARRcookies.length;i++)
	{
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==content)
	  {
		  return unescape(y);
	  }
	}
}
				