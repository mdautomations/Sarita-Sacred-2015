$(document).ready(function()
{
	$( "#login" ).click(function() {
		  login();
		});
	$( "#register" ).click(function() {
		alert("sathya");
		 registerr();
		});
	$('#signups').click(function() {
		window.location.href="/signup.jsp";
	})
});
function login()
{
	var sessionName	= $('#emailid').val();
	var password 	= $('#password').val();
	if(sessionName==null || sessionName=='' || password==null || password== '')
	{
		$('#emailid').css('background-color','rgb(223, 151, 151)');
		$('#emailid').val("Please fill your details");
	}
	else
		{
			var urltocals       = '/checkentry?email='+encodeURIComponent(sessionName)+'&password='+encodeURIComponent(password);
			$('#spinner').show();
			$.ajax({
					type	: 'POST', 
					url		: urltocals ,
					async	: false,
					data	: '',
					success	: function(data)
							  {
									if(data.match("success"))
									{
										setRegistrationUrlCookie(sessionName);
										window.location.href="/index.jsp";
										
									}
									else
										{
											alert("Invalid Username / Password");
										}
							  }
		 			});
		}
}
function registerr()
{
		 var fullname 		=	 $('#fullname').val();
		 var email 			=	 $('#email').val();
		 var address 	=	 $('#address').val();
		 var city		= 	 $('#city').val();
		 var useremail		= 	 $('#useremail').val();
		 var password		= 	 $('#password').val();
		 var mode          =   "user";
//		 var confirmpasswprd		= 	 $('#confirmpasswprd').val();
	     var reg_email		=	/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		 var regnum			=	/^[0-9-+]+$/;
			console.info("fullname ::"+fullname);
		 if((fullname=="") || (email=="") || (address=="") || (city=="") || (useremail=="") || (password=="") )
		  {
			 if(fullname==null || fullname=='')
				{
					$('#firstname').css('background-color','rgb(176, 199, 221)');
	       			$('#firstname').css('color','black');
	       			$('#firstname').val("Invalid Name");
				}
			 if(email==null || email=='')
				{
					$('#email').css('background-color','rgb(176, 199, 221)');
	       			$('#email').css('color','black');
	       			$('#email').val("Invalid Email");
				}
			 if(address==null || address=='')
				{
					$('#address').css('background-color','rgb(176, 199, 221)');
	       			$('#address').css('color','black');
	       			$('#address').val("Invalid address");
				}
			 if(city==null || city=='')
				{
					$('#city').css('background-color','rgb(176, 199, 221)');
	       			$('#city').css('color','black');
	       			$('#city').val("Invalid city");
				}
			 if(useremail==null || useremail=='')
				{
					$('#useremail').css('background-color','rgb(176, 199, 221)');
	       			$('#useremail').css('color','black');
	       			$('#useremail').val("Invalid useremail");
				}
			 if(password==null || password=='')
				{
					$('#password').css('background-color','rgb(176, 199, 221)');
	       			$('#password').css('color','black');
	       			$('#password').val("Invalid password");
				}
		  }
		 	 else
		 	 	{
		 		 alert(useremail);
		 		 	$.ajax({
								type	: 'POST', 
								url		: '/registeration' ,
								async	: false,
								data	: {fullname:fullname,email:email,address:address,city:city,useremail:useremail,password:password,mode:mode},
								success	: function(data)
										  {
												if(String(data).match("failure"))
											    {
													alert("User already exists");
												}
												else
												{
														setRegistrationUrlCookie(useremail);
														alert("Registration Successfull, Your Records Saved");
														window.location.href="/login.jsp";
												}
										  }
		 		 			});
		 	 		}
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