var user=[];
var login;
function forgot()
{
	var i=document.getElementById("para");
	var array=[];
	array=getStoredUser();
	var a = prompt("Please enter your Username : ");
	var b = prompt("Please enter your userid : ");
    if (a != null && b != null) 
	{
		var flag=0;
		for(var i=0;i<array.length;i++)
		{
			if(array[i].username==a && array[i].usermail==b)
			{
				flag=1;
				alert("Your Password is : "+array[i].userpass);
			}
		
		}
		if(flag==0)
		{
			alert("Wrong Entries!");
		}
	}
	else
	{
	   alert("Fill both the entries");	
	}

}
function check()
{
  var flag=0;
  var rflag=0;
  var nid=document.getElementById("n");//name & pass entered by user in sign in time
  var pid=document.getElementById("p");
  
  if(!nid.value || !pid.value)
  {
	  flag=1;
  }
  if(flag==0)
  {
	    user=getStoredUser();
		for(var i=0;i<user.length;i++)
		{
		    if(nid.value=='priyavats' && pid.value=='priya')
			{
	         console.log("priyavats admin");
             window.location="prac.html";	
             rflag=1;			 
			}
			else if(user[i].username==nid.value && user[i].userpass==pid.value)
			{	
		     storeLogin(user[i].userid);
             console.log("not admin");		
             window.location="home.html";	
			 rflag=1;
			}
			
		}
		if(rflag==0)
		alert("Incorrect username or password!");

  }
}
function save()
{
    var nid=document.getElementById("name");
    var pid=document.getElementById("pass");
    var aid=document.getElementById("add");
	var mid=document.getElementById("mailid");
  if(!nid.value || !pid.value)
  {
	  
  }
  else
  {
	  	var rflag=0;
	user=getStoredUser();
	if(user==null)
	{
		
	}
	else
	{
    var id=user.length+1;

	   for(var i=0;i<user.length;i++)
		{
			if(user[i].username==nid.value && user[i].userpass==pid.value)
			{	
		
             alert("Same name and pass already exist!");	
			 rflag=1;
			}
			
		}
    }
	  if(rflag==0)
	  {
 	  var obj=
 	  {
 		  userid:id,
 		  username:nid.value,
 		  userpass:pid.value,
		  useraddress:aid.value,
		  usermail:mid.value
		  
 	  }
 	  user.push(obj);
 	  storeUser(user);
	  alert("Go back to Login Page!");
	  }
  }
  
}

function getStoredUser() 
{
	if (!localStorage.user)
	{ 
    localStorage.user = JSON.stringify([]); 
    } 
    return JSON.parse(localStorage.user); 

}

function storeUser(user) 
{
	
	 localStorage.user = JSON.stringify(user);
	
}

function storeLogin(login) 
{
	
	 localStorage.login = JSON.stringify(login);
	
}