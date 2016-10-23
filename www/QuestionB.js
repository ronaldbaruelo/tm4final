function formValidation()  
{  
var uid = document.demo.memberid;  
var ufirstname = document.demo.firstname;  
var ulastname = document.demo.lastname;  
var uemail = document.demo.email;  
var uphone = document.demo.phone;  
if(allnumeric(uid))   
{  
if(allLetter(ufirstname))  
{  
if(allLetter(ulastname))  
{
if(ValidateEmail(uemail))  
{  
if(phonenumber(uphone))  
{  
}  
}   
}  
}   
}   
return false;  
}
function alphanumeric(uid)  
{   
var letters = /^[0-9a-zA-Z]+$/;  
if(uid.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('User ID must have alphanumeric characters only');  
uid.focus();  
return false;  
}  
} 
function allLetter(ufirstname)  
{   
var letters = /^[A-Za-z]+$/;  
if(ufirstname.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('Firstname must have alphabet characters only');  
ufirstname.focus();  
return false;  
}  
}
function allLetter(ulastname)  
{   
var letters = /^[A-Za-z]+$/;  
if(ulastname.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('Lastname must have alphabet characters only');  
ulastname.focus();  
return false;  
}  
}

<!--JavaScript function for validating username email-->

function ValidateEmail(uemail)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(uemail.value.match(mailformat))  
{  
return true;  
}  
else  
{  
alert("You have entered an invalid email address!");  
uemail.focus();  
return false;  
}  
function phonenumber(uphone)  
{  
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
  if(uphone.value.match(phoneno))  
     {  
       return true;  
     }  
   else  
     {  
       alert("Not a valid Phone Number");  
       return false;  
     }  
}  