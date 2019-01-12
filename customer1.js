var user=[];
user=getStoredUser();
var order=[];
order=getStoredOrderCart();
display();
function display()
{
	for(var i=1;i<user.length;i++)
	{
		var userid=user[i].userid;
		   
		//alert(order[userid].length+"userid is : "+userid);
		var product=" ";
		var cost=0;
		for(var j=0;j<order[userid].length;j++)
		{
			product=product+order[userid][j].name+" ";
			cost=cost+order[userid][j].price;
			//alert(order[userid][j].roll+"  "+order[userid][j].name);
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
	localStorage.ordercart = JSON.stringify([]);
	} 
	return JSON.parse(localStorage.ordercart); 
}