var now=getStoredLogin();
var admin=[];
admin=getAdmin();
var temp=admin[now];
var prod=[];
prod=getStoredProducts();
 var prodLen=prod.length;
	
display();
	  

function display()
{
	if(temp==undefined)
	{
		
	}
	else
	{
		
	 var login=getStoredLogin();
	 var len=temp.length;
	 for(var i=0;i<len;i++)
	 {
	   var l=temp[i].length;
	   if(l==undefined)
	   {
	
		  var finalOrderId= temp[i].roll;
		  var finalName=temp[i].name;
		  var desc=temp[i].desc;
		  var finalPrice=temp[i].price;
		  var quan=temp[i].quan;
          var statusNow="Proceeding!";
		  
		  
		 appendInList(finalOrderId,document.getElementById("u1"));
         appendInList(finalName,document.getElementById("u2"));
	     appendInList(finalPrice,document.getElementById("u3"));
	     appendInList(statusNow,document.getElementById("u4"));   
	   }
	   else
	   {
		   for(var j=0;j<l;j++)
		   {
		  var finalOrderId= temp[i][j].roll;
		  var finalName=temp[i][j].name;
		  var desc=temp[i][j].desc;
		  var finalPrice=temp[i][j].price;
		  var quan=temp[i][j].quan;
          var statusNow="Proceeding!";
		  
		  
		      appendInList(finalOrderId,document.getElementById("u1"));
	appendInList(finalName,document.getElementById("u2"));
	appendInList(finalPrice,document.getElementById("u3"));
	appendInList(statusNow,document.getElementById("u4"));
		   }
	   }
	 }
	
	
		  
		   
	   
       
       
	 }
	
}
function appendInList(a,b)
{
	var li=document.createElement("li");
	li.textContent=a;
	b.appendChild(li);
	var br=document.createElement("br");
    b.appendChild(br);
	   	
}
function getStoredProducts()
 {
	if (!localStorage.products)
    { 
	// default to empty array 
	localStorage.products = JSON.stringify([]);
	} 
	return JSON.parse(localStorage.products); 
}
function storeAdmin(admin)
 {
	 localStorage.admin = JSON.stringify(admin);
 }
function getAdmin()
 {
	if (!localStorage.admin)
    { 
	// default to empty array 
	localStorage.admin = JSON.stringify([]);
	} 
	return JSON.parse(localStorage.admin); 
}
function getStoredLogin()
 {
	if (!localStorage.login)
    { 
	// default to empty array 
	localStorage.login = JSON.stringify([]);
	} 
	return JSON.parse(localStorage.login); 
}
// In this now I have to make a new 2D array in which i will store a visited flag 
//0 or 1 if 0 then its present element else it would be old one and then i will skip that!