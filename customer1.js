var user=[];
user=getStoredUser();
var order=[];
order=getStoredOrderCart();
display();
function display()
{
	for(var i=1;i<user.length;i++)
	{	
		//alert("user "+i);
		var userid=user[i].userid;
		if(order[userid]!=null)
		{	
		//alert(order[userid].length+"userid is : "+userid);		
		for(var j=0;j<order[userid].length;j++)
		{
		 	var product=" ";
		    var cost=0;
			if(j==0)
			{
				product=product+order[userid][j].name+" ";
			cost=cost+order[userid][j].price;
			//alert(order[userid][j].price+"  "+order[userid][j].name);
			}
			else
			{
				var l1=order[userid][j].length;
				//alert(l1+order[userid][j][0].name);
				for(var k=0;k<l1;k++)
				{
					product=product+order[userid][j][k].name+" ";
			        cost=cost+order[userid][j][k].price;
			        //alert(order[userid][j][k].price+"  "+order[userid][j][k].name);
				}
			}
		if(cost!=0)
		{
		appendInList(userid,document.getElementById("p1"));
		appendInList(user[i].username,document.getElementById("p2"));
		appendInList(product,document.getElementById("p3"));
		appendInList(cost,document.getElementById("p4"));
		
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

function getStoredUser() 
{
	
	if (!localStorage.user)
	{ 
    localStorage.user = JSON.stringify([]); 
    }
	
    return JSON.parse(localStorage.user); 
    
}
function getStoredOrderCart()
 {
	if (!localStorage.ordercart)
    { 
	// default to empty array 
	localStorage.admin = JSON.stringify([]);
	} 
	return JSON.parse(localStorage.admin); 
}



