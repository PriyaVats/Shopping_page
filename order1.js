var now=getStoredLogin();
var admin=[];
admin=getAdmin();
var temp=admin[now];
display();
var n=temp.length;
for(var i=0;i<n;i++)
{
	console.log(temp[i].name);
}
function display()
{
	if(temp==undefined)
	{
		
	}
	else
	{
		
	var finalName=" ";
	var finalOrderId=Number(0);
	var finalPrice=Number(0);
	var statusNow="Proceeding!";
    setInterval(function(){ statusNow="Shiping!"; }, 100);
	var n=temp.length;
	
	for(var i=0;i<n;i++)
	{
		var t=temp[i];
		console.log(t.length);
		finalName=finalName+t.name;
		finalOrderId=finalOrderId*10+t.roll;
		finalPrice=finalPrice+(t.price);
		
		//console.log(t.qty);
	}
	
	/*
	//alert(n+"value of n");
	//console.log(temp[1].name);
	if(n==1)
	{
	
	}
    if(n>1)
	{
		var i=1;
		

	}
	*/
	
	
	appendInList(finalOrderId,document.getElementById("u1"));
	appendInList(finalName,document.getElementById("u2"));
	appendInList(finalPrice,document.getElementById("u3"));
	appendInList(statusNow,document.getElementById("u4"));
	
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