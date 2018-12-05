var user=[];
var login;
function forgot()
{
	var i=document.getElementById("para");
	i.innerHTML="A link is send to ur Registered EmailId!";

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
 		  userpass:pid.value
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