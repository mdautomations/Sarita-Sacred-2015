		
$(document).ready(function()
{
    		
});
buildTable();


function buildTable()
{
	 $.ajax({
		         type: 'POST',
		         url: '/getmultitask', 
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
			 						"sTitle" : "Key",
			 						"sWidth" : "20%",
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
			 						"sWidth" : "10%",
			 						"sClass" : "center"
			 					}]
			 				});
			 				dtable.fnClearTable();			

			 				$.ajax({
			 			         type: 'POST',
			 			         url: '/getuserEntry', 
			 			         async : false,
			 			         success: function(data)
			 	       			 {
			 			        	uservar				=	JSON.parse(data);
			 			        	console.log(uservar);
			 	       			 }
			 				});
							var newRow = [];
							for(index in jsonvar)
							{
								newRow[0] = jsonvar[index].user;
								for(indexes in uservar)
								{
									console.log("1 :: "+jsonvar[index].user);
									console.log("2 :: "+uservar[indexes].useremail);
									if(jsonvar[index].user==uservar[indexes].useremail)
									{
										newRow[1]  =  uservar[indexes].key;
									}
								}
								newRow[2] = 	jsonvar[index].queries;
								newRow[3] = 	jsonvar[index].url;
								newRow[4] = 	jsonvar[index].ipaddress;
								newRow[5] = 	jsonvar[index].dwelltime;
								newRow[6] = 	jsonvar[index].date;
								newRow[7] = 	jsonvar[index].bounceRate;
								newRow[8] = 	jsonvar[index].clickthrough;
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
				