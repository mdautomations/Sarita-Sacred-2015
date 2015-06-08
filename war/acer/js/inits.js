		
$(document).ready(function()
{
	$('#image').click(function()
	{
			$('#filters').hide();
			$('#images').show();
	});
	$('#webs').click(function()
	{
			$('#filters').show();
			$('#images').hide();
	});
	$('#go').click(function()
	{
			 var searches = $('#searchtext').val();
	  		window.location.href='/results.jsp?'+searches;
	});
});


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
				