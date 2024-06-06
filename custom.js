function signup()
{
	$("#loading").show();
	var email = $('#email').val();
	var password = $('#password').val();
	var username = $("#username").val();
    var vcode = $("#vcode").val();
    var faun = $("#faun").val();
	var surname = $("#surname").val();
    var birthday = $("#birthday").val();
	var address = $("#address").val();
	var mobile = $("#mobile").val();
	var gender=$('input[name="gender"]:checked').val();
	var tradio=$('input[name="tradio"]:checked').val();
	var postcode = $("#postcode").val();
	//var city = $("#city").val();
//alert(city);
	if((email!='')&& (password!='')  && (username!='') && (vcode!='')&& (faun!='') && (surname!='') && (address!='')&& (mobile!='')&& (gender!=''))
	{
	var UrlToPass = 'action=register&email='+email+'&password='+password+'&username='+username+'&vcode='+vcode+
	'&faun='+faun+'&surname='+surname+'&birthday='+birthday+'&address='+address+'&postcode='+postcode+'&mobile='+mobile+'&gender='+gender+'&tradio='+tradio+'&postcode='+postcode;
	$.ajax({ 
			type : 'POST', 
			data : UrlToPass, 
			url  : 'process/process.php',
			success: function(status){ 
			$("#loading").hide();  
			var status=$.trim(status); 
			if(status=='1')
			{
//alert('registration successfully');
				$("#AllError").html('Success!');
				$('#alart_meneg').html("You have registered successfully!");
				$('#alart_meneg').show(); 
				$(".position_relative_validation").html("<h3>Welcome</h3><p>Your Account Has Been Done Successfully.</p><p><a href='Afterlogin.php' class='btn btn-success'>Back</a></p>");
				$('.signup_popup_validation').show(); 
			 
			}
			else
			{
		
					$("#AllError").html('Email Already Exit!');
$(".alart_meneg").show();
				return false; 
					
				
			}
			}
	    });
	}
	else
	{

	$("#loading").hide();  
	$("#AllError").html('Need to complete all required(*) fields!');
	$(".alart_meneg").show(); 
	return false;  	
		
	}
	
}

function signupEntrepreneurs()
{
	//alert('fdsf');
	$("#loading").show();
	var email = $('#email').val();
	var password = $('#password').val();
	var username = $("#username").val();
  
    var faunn = $("#faunn").val();
	var surnamee = $("#surnamee").val();
    var birthday = $("#birthday").val();
	var addresss = $("#addresss").val();
	var mobilee = $("#mobilee").val();
	var gender=$('input[name="genderr"]:checked').val();
	var tradio=$('input[name="tradio"]:checked').val();
	var postcode = $("#postcode").val();
		var selectcontry = $("#selectcontry").val();
	var namee = $("#namee").val();
	var jtitlee = $("#jtitlee").val();
	var cname = $("#cname").val();
	var citye = $("#citye").val();
	  var zpost = $("#zpost").val();
	  var agree=$('input[name="agree"]:checked').val();
	  
//alert(agree);
	if((email!='')&& (password!='')  && (username!='') && (faunn!='') && (surnamee!='') && (addresss!='')&&
	(mobilee!='')&& (genderr!='') && (selectcontry!='')&& (namee!='')&& (jtitlee!='') && (citye!='') && (agree=='1')&& (cname!=''))
/* 	 if((email!='')&& (password!='')  && (username!='') && (faun!='') && (surname!='') && (address!='')&& (mobile!='')&& (gender!='')
		
	 (selectcontry!='')&& (name!='')&& (jtitle!='') && (city!='')) */
	{
	var UrlToPass = 'action=registerEntrepreneurs&email='+email+'&password='+password+'&username='+username+'&faun='+faun+'&surname='+surname+
	'&birthday='+birthday+'&address='+address+'&postcode='+postcode+'&mobilee='+mobilee+'&gender='+gender+
	'&tradio='+tradio+'&selectcontry='+selectcontry+'&name='+name+'&jtitlee='+jtitlee+'&cname='+cname+
	'&city='+city+'&zpost='+zpost+'&agree='+agree+'&citye='+citye+'&namee='+namee;
	$.ajax({ 
			type : 'POST', 
			data : UrlToPass, 
			url  : 'process/process.php',
			success: function(status){ 
			$("#loading").hide();  
			var status=$.trim(status); 
			if(status=='1')
			{
				$("#AllError").html('Success!');
				$('#alart_meneg').html("You have registered successfully!");
				$('#alart_meneg').show(); 
				$(".position_relative_validation_Entrepreneurs").html("<h3>Welcome</h3><p>Your Account Has Been Done Successfully.</p><p><a href='RegisteredEntrepreneurs.php' class='btn btn-success'>Go To Next Step</a></p>");
				$('.signup_popup_validation_Entrepreneurs').show(); 
			 
			}
			else
			{
		
					$("#AllError").html('Email Already Exit!');
$(".alart_meneg").show();
				return false; 
					
				
			}
			}
	    });
	}
	else
	{

	$("#loading").hide();  
	$("#AllError").html('Need to complete all required(*) fields!');
	$(".alart_meneg").show(); 
	return false;  	
		
	}
	
}


function signupPublicBodies()
{
	//alert('fdsf');
	$("#loading").show();
	var email = $('#email').val();
	var password = $('#password').val();
	var username = $("#username").val();
  
    var faunpb = $("#faunpb").val();
	var surnamepb = $("#surnamepb").val();
    var birthdaypb = $("#birthdaypb").val();
	var addresspb = $("#addresspb").val();
	var mobilepb = $("#mobilepb").val();
	var genderpb=$('input[name="genderpb"]:checked').val();
	var tradio=$('input[name="tradio"]:checked').val();
	var postcodepb = $("#postcodepb").val();
		var selectcontrypb = $("#selectcontrypb").val();
	var namepb = $("#namepb").val();
	var jtitlepb = $("#jtitlepb").val();
	var cnamepb = $("#cnamepb").val();
	var citypb = $("#citypb").val();
	  var zpostpb = $("#zpostpb").val();
	  var agreepb=$('input[name="agreepb"]:checked').val();
	  
//alert(agree);
	if((email!='')&& (password!='')  && (username!='') && (faunpb!='') && (surnamee!='') && (addresss!='')&&
	(mobilepb!='')&& (genderpb!='') && (selectcontrypb!='')&& (namepb!='')&& (jtitlepb!='') && (citypb!='') && (agreepb=='1'))
/* 	 if((email!='')&& (password!='')  && (username!='') && (faun!='') && (surname!='') && (address!='')&& (mobile!='')&& (gender!='')
		
	 (selectcontry!='')&& (name!='')&& (jtitle!='') && (city!='')) */
	{
	var UrlToPass = 'action=registerPublicBodies&email='+email+'&password='+password+'&username='+username+'&faunpb='+faunpb+'&surnamepb='+surnamepb+
	'&birthdaypb='+birthdaypb+'&addresspb='+addresspb+'&postcodepb='+postcodepb+'&mobilepb='+mobilepb+'&genderpb='+genderpb+
	'&tradio='+tradio+'&selectcontrypb='+selectcontrypb+'&namepb='+namepb+'&jtitlepb='+jtitlepb+'&cnamepb='+cnamepb+
	'&citypb='+citypb+'&zpostpb='+zpostpb+'&agreepb='+agreepb;
	$.ajax({ 
			type : 'POST', 
			data : UrlToPass, 
			url  : 'process/process.php',
			success: function(status){ 
			$("#loading").hide();  
			var status=$.trim(status); 
			if(status=='1')
			{

	$("#AllError").html('Success!');
				$('#alart_meneg').html("You have registered successfully!");
				$('#alart_meneg').show(); 
				$(".position_relative_validation_PublicBodie").html("<h3>Welcome</h3><p>Your Account Has Been Done Successfully.</p><p><a href='emailcompany.php' class='btn btn-success'>Go To Next Step</a></p>");
				$('.signup_popup_validation_PublicBodie').show(); 
			 
			}
			else
			{
		
					$("#AllError").html('Email Already Exit!');
$(".alart_meneg").show();
				return false; 
					
				
			}
			}
	    });
	}
	else
	{

	$("#loading").hide();  
	$("#AllError").html('Need to complete all required(*) fields!');
	$(".alart_meneg").show(); 
	return false;  	
		
	}
	
}


function check_login()
{
	//alert('fdsf');
	$("#loading").show();
	var email = $("#emaill").val();
	var password = $("#passwords").val();
	
	if((email!='') && (password!=''))
	{
	var UrlToPass = 'action=check_login&email='+email+'&password='+password;
	$.ajax({ 
			type : 'POST', 
			data : UrlToPass, 
			url  : 'process/process.php',
			success: function(status){ 
			$("#loading").hide();  
			var status=$.trim(status); 
			if(status=='error')
			{
				$("#Error").html('Invalid Login Details!');
				$("#email").val('');
				$("#password").val('');
				$(".alart_meneg").show();  
				return false;  
			}
			else 
			{
				//alert(status);
				$("#Error").html('Success!');
				$('body').fadeOut(400, function(){
				document.location.href = "Afterlogin.php";
				});
				return false;
			}
			}
	    });
	}
	else
	{
	$("#loading").hide();  
	$("#Error").html('Need to complete all fields!');
	$(".alart_meneg").show(); 
	return false;  	
		
	}
}
function check_email(x)
 {
	if(x!='')
	{
		var atpos=x.indexOf("@");
		var dotpos=x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		{
			$('#email_error').html("Please enter valid email!");
			document.getElementById("email").value = "";
			$("#email-error").hide();
			return false;
		}
		else
		{ 
			$.ajax({
					type: "POST",
					url:'process/process.php?email='+x+'&action=check_mail',
					beforeSend: function (data) {
						$('#fadediv').show();
					},
					success: function (data) {	
					$('#fadediv').hide();
					var temp = $.trim(data);
					if(temp=='1')
					{ 
						$('#email_error').html("Email already exist!");
						document.getElementById("email").value = "";
									$("#email-error").hide();

					}
					else
					{
						$('#email_error').html("");

					}	
					}
				});
		}
	}
 }
function checkconfirm()
{
	var newpass = $("#password").val();
	var newconfrim  = $("#cpassword").val();
	if(newpass != newconfrim)
	{
		$("#cpass_avail_result").html("Password does not matched!");
		$("#cpassword").val('');
		$("#cpassword").focus();
		return false;  
	}
	else
	{
		$("#cpass_avail_result").html("");
		return true;  
	}
	
}
function recoverpassword() {	
 //alert('dg');
	var x=$('#emaill').val();	
		var type=$('#type').val();
		
	if(x!='')	{	
	var atpos=x.indexOf("@");	
	var dotpos=x.lastIndexOf(".");	
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)	
		{			$('#email_error').html("Please enter valid email!");	
	$('#email_error').show();	
	$('#all_error').hide();			document.getElementById("emaill").value = "";	
						$('#email_error').show();			
					$('#all_Enter').hide();	
					$('#exist_error').hide();	

						$('#all_success').hide();	
						
						

	return false; 	
	}	
	else		{ 	
	$('#email_error').html("");	
	$.ajax({				
	type: "POST",			
	url:'process/process.php?email='+x+'&type='+type+'&action=recoverpassword',		
	beforeSend: function (data) {				
	$('#loader').show();	
$('#email_error').hide();	
							$('#exist_error').html("");
					$('#all_Enter').html("");	
							

	},					
	success: function (data) {	
	$('#loader').hide();		

	var temp = $.trim(data);			
	if(temp=='1')					
	{ 				
 //$('body').fadeOut(6000, function(){
				//document.location.href = "index.php";
					
				//});
$('#all_success').html("Your request for password recovery has been approved.Please check your email for you login details!");	
					$('#all_success').show();			
					$('#emaill').val("");
					$('#all_Enter').hide();	
					$('#all_error').hide();			

	
					return false;					
					//alert(data);				
					}					else 	
						{					
					$('#exist_error').html("Sorry! E-mail not exist!");		
					$('#exist_error').show();				
					$('#emaill').val("");
					$('#all_emaill').hide();				
					$('#all_success').hide();	
										$('#all_Enter').hide("");	


					return false;						
					}}		
					});			
					return false;	
					}	
					}	
					else
						{	
					$('#all_Enter').html("Please Enter E-mail!");	
					$('#all_error').show();	
					$('#exist_error').hide();		
$('#all_Enter').show();	
$('#all_success').hide();	
					$('#email_error').hide();	
					return false;	
					}	
					}
					
					
function validateaccount()
{
	$("#loading").show();
	var email = $('#email').val();
	
	if((email!=''))

	{
	var UrlToPass = 'action=validateaccount&email='+email;
	$.ajax({ 
			type : 'POST', 
			data : UrlToPass, 
			url  : 'process/process.php',
			success: function(status){ 
			$("#loading").hide();  
			var status=$.trim(status); 
			if(status=='1')
			{
				$("#AllError").html('Your Accoun  has Been Validated successfully!');
			$(".alart_meneg").show();	
			 $('body').fadeOut(1000, function(){
				document.location.href = "myB2BandB2CinfoPage.php";
				});
			}
			else
			{
		
					$("#AllError").html('Some Eror');
$(".alart_meneg").show();
				return false; 
					
				
			}
			}
	    });
	}
	else
	{

	$("#loading").hide();  
	$("#AllError").html('Need to complete all fields!');
	$(".alart_meneg").show(); 
	return false;  	
		
	}
	
}

function addcategories ()
{
	$("#loading").show();
	var userid = $('#userid').val();
	  var cat=$('input[name="cat"]:checked').val();
	if((userid!='') && (cat!=''))

	{
	var UrlToPass = 'action=addcategories&userid='+userid+'&cat='+cat;
	$.ajax({ 
			type : 'POST', 
			data : UrlToPass, 
			url  : 'process/process.php',
			success: function(status){ 
			$("#loading").hide();  
			var status=$.trim(status); 
			if(status=='1')
			{
				$("#AllError").html('categories updated successfully!');
			$(".alart_meneg").show();	
			 $('body').fadeOut(1000, function(){
				document.location.href = "validateBeneficiaryInfo.php";
				});
			}
			else
			{
		
					$("#AllError").html('Some Eror');
$(".alart_meneg").show();
				return false; 
					
				
			}
			}
	    });
	}
	else
	{

	$("#loading").hide();  
	$("#AllError").html('Need to complete all fields!');
	$(".alart_meneg").show(); 
	return false;  	
		
	}
	
}

/* function sendContact() {

	var valid;	
	valid = validateContact();
	if(valid) {
			$("#loading").show();
		jQuery.ajax({
		url: "process/process.php?action=rr",
		data:'userName='+$("#userName").val()+'&userEmail='+$("#userEmail").val()+'&password='+$("#password").val(),
		type: "POST",
		
		success:function(data){
				var data=$.trim(data); 
			if(data=='1')
			{
	$("#loading").hide();
		$("#mail-status").html('successfully');
			}
			else
			{
			$("#mail-status").html('error');	
			}
		},
		error:function (){}
		});
	}
}

function validateContact() {
	var valid = true;	
	$(".demoInputBox").css('background-color','');
	$(".info").html('');
	
	if(!$("#userName").val()) {
		$("#userName-info").html("(required)");
		$("#userName").css('background-color','#FFFFDF');
		valid = false;
	}
	if(!$("#userEmail").val()) {
		$("#userEmail-info").html("(required)");
		$("#userEmail").css('background-color','#FFFFDF');
		valid = false;
	}
	if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
		$("#userEmail-info").html("(invalid)");
		$("#userEmail").css('background-color','#FFFFDF');
		valid = false;
	}
	if(!$("#subject").val()) {
		$("#subject-info").html("(required)");
		$("#subject").css('background-color','#FFFFDF');
		valid = false;
	}
	if(!$("#content").val()) {
		$("#content-info").html("(required)");
		$("#content").css('background-color','#FFFFDF');
		valid = false;
	}
	
	return valid;
}
				 */
				 
/* 	function ds()
{
	$("#loading").show();
	var userid = $('#username').val();
	if(userid != '')
	{
		$("#AllError").html('Need  all fields!');
	$(".alart_meneg").show();
	}
	else
		
		{
			
			$("#AllError").html('Need  all fields!');
	$(".alart_meneg").show();
		}
	
	  	var password = $('#password').val();	var email = $('#email').val();
	if((userid!=''))

	{
	var UrlToPass = 'action=rs&userid='+userid+'&email='+email+'&password='+password;
	$.ajax({ 
			type : 'POST', 
			data : UrlToPass, 
			url  : 'process/process.php',
			success: function(status){ 
			$("#loading").hide();  
			var status=$.trim(status); 
			if(status=='1')
			{
				$("#AllError").html('categories updated successfully!');
			$(".alart_meneg").show();	
			 $('body').fadeOut(1000, function(){
				document.location.href = "validateBeneficiaryInfo.php";
				});
			}
			else
			{
		
					$("#AllError").html('Some Eror');
$(".alart_meneg").show();
				return false; 
					
				
			}
			}
	    });
	}
	else
	{
	$("#loading").hide();  
	$("#AllError").html('Need to  all fields!');
	$(".alart_meneg").show(); 
	return false;  	
		
	}
	
}		 */	

 /* function signupy()
{

	var username = $('#username').val(); 
	/* if(username != '')
	{
   
	
	 $('#username_error').html("");
			$("#username_error").hide();
	} 
	if(!$("#username").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#username_error").html("(invalid)");
        
    }
	else
	{
		  $('#username_error').html("");
			$("#username_error").hide();
	
		}
	var email = $('#email').val(); 
	if(email == '')
	{
    $('#email_error').html("Please fill email fields!");
	}
	var password = $('#password').val(); 
	if(password == '')
	{
    $('#password_error').html("Please fill password fields!");
	}
var cpassword = $('#cpassword').val(); 
 if(username != '' && email != '' && password != '' && cpassword != '' )
	{
				

		}
	
}
  */ 