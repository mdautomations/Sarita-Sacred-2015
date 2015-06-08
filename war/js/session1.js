		
$(document).ready(function()
{
    		
});
buildTable();


function buildTable()
{
	 $.ajax({
		         type: 'POST',
		         url: '/getNewDesignAccessList', 
		         async : false,
		         success: function(data)
       			 {
			        	 $('#loaddata').hide();
			        	 $('#dynamic-table').show();
			        	 $('#tables').show();
			 			 jsonvar				=	JSON.parse(data);			 				
			 				
			 			  dtable = $('#dynamic-table').dataTable({
			 					"bDestroy" : true,
			 					"aoColumns" : [ {
			 						"sTitle" : "User",
			 						"sWidth" : "10%",
			 						"sClass" : "center"
			 					},{
			 						"sTitle" : "Queries",
			 						"sWidth" : "10%",
			 						"sClass" : "center"
			 					}, {
			 						"sTitle" : "URL",
			 						"sWidth" : "10%",
			 						"sClass" : "center"
			 					}, {
			 						"sTitle" : "IP Address",
			 						"sWidth" : "10%",
			 						"sClass" : "center"
			 					}, {
			 						"sTitle" : "Dwell Time",
			 						"sWidth" : "10%",
			 						"sClass" : "center"
			 					}, {
			 						"sTitle" : "Date",
			 						"sWidth" : "10%",
			 						"sClass" : "center"
			 					},{
			 						"sTitle" : "Bounce Rate",
			 						"sWidth" : "10%",
			 						"sClass" : "center"
			 					},{
			 						"sTitle" : "Visitation Rate",
			 						"sWidth" : "15%",
			 						"sClass" : "center"
			 					},{
			 						"sTitle" : "Level",
			 						"sWidth" : "15%",
			 						"sClass" : "center"
			 					}]
			 				});
			 				dtable.fnClearTable();			
							
							var newRow = [];
							for(index in jsonvar)
							{
								newRow[0] = jsonvar[index].user;
								newRow[1] = 	jsonvar[index].queries;
								newRow[2] = 	jsonvar[index].url;
								newRow[3] = 	jsonvar[index].ipaddress;
								newRow[4] = 	jsonvar[index].dwelltime;
								newRow[5] = 	jsonvar[index].date;
								newRow[6] = 	jsonvar[index].bounceRate;
								newRow[7] = 	jsonvar[index].clickthrough;
								var clicklevel = jsonvar[index].clickthrough;
								if(clicklevel>10)
								{
									newRow[8] = "Multitasked Query";	
								}
								else
								{
									newRow[8] = "Interleaved Task Query";	
								}
								
								dtable.fnAddData(newRow);
							}
								dtable.fnDraw();
      				  }
			 });
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
				