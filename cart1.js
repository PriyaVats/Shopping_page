var prod=[];
prod=getStoredProducts();
var now=getStoredLogin();
var cartOrder=[];
cartOrder=getStoredOrderCart();

var cart=[];
cart=cartOrder[now];
//alert(now);
if(cart!=undefined)
{
 var len=cart.length;
 //alert(cart[0].name+"priya vats"+len);
 for(var i=0;i<len;i++)
 {
	 if(cart[i]!=null)
	 {
	  addToCart(cart[i].roll,cart[i].name,cart[i].desc,cart[i].quan,cart[i].price,1)
	 }
 } 
    
}
else
{
	cart=[];
}
function displayProduct(a,b)
{
	for(var i=0;i<prod.length;i++)
   {
		insertting(prod[i].roll,document.getElementById("ul1"),0,prod[i].roll,0);
		
		insertting(prod[i].name,document.getElementById("ul2"),0,prod[i].roll,0);
		
		insertting(prod[i].desc,document.getElementById("ul3"),0,prod[i].roll,0);
		
		insertting(prod[i].quan,document.getElementById("ul4"),0,prod[i].roll,1);
		
		insertting(prod[i].price,document.getElementById("ul5"),0,prod[i].roll,0);
		
		insertting("Add to cart!",document.getElementById("ul6"),1,prod[i].roll,0);
    }
}
function insertting(a,b,c,id,drop)
{
	if(drop==1)
	{
	 var li=document.createElement("li");
	 var dp=document.createElement("select");
	 var d="d" + id;
	 //alert("value "+d);
	 dp.setAttribute("id",d);
	 dp.setAttribute("style","width:50px;");
	 dp.textContent="quantity";
	 dp.setAttribute("size","0");
	  
		 for(var j=1;j<=a;j++)
		 {
		 var option=document.createElement("option");
		 option.textContent=j;
		 dp.appendChild(option);
		 }
		 
	 li.appendChild(dp);
	 b.appendChild(li);
	 var br=document.createElement("br");
	 b.appendChild(br);
	}
	else if(c==1)
	{
	var li=document.createElement("li");
	
	var button=document.createElement("button");
	
	button.setAttribute("id",id);
	button.textContent=a;
	
	li.appendChild(button);
	b.appendChild(li);
	var br=document.createElement("br");
	b.appendChild(br);
	
    button.addEventListener('click', function()
    {	
    var flag=0;
    cartOrder=getStoredOrderCart();
	cart=cartOrder[now];
	if(cart!=undefined )
    {
    var len=cart.length;
  
    for(var i=0;i<len;i++)
    {
	 if(cart[i].roll==id)
	 {
	  alert("Already Exist In Your Cart");
	  flag=1;
	  break;
	 }
    }     

    }
	if(flag==0)
    addToCart(id,0,0,0,0,0);
    
    });
    
	}
	else
	{
		
	 var li=document.createElement("li");
	 li.textContent=a;
	 b.appendChild(li);
	 var br=document.createElement("br");
	 b.appendChild(br);
    }
	
}
function addToCart(id,a,b,c,d,flag)
{
	
     var prod=[];
     prod=getStoredProducts();
	 var nameNew;
	 var rollNew;
	 var descNew;
	 var priceNew;
	 var quanNew;
	 //alert(prod.length);
	 var u1=document.getElementById("u1");
	 var u2=document.getElementById("u2");
	 var u3=document.getElementById("u3");
	 var u4=document.getElementById("u4");
	 var u5=document.getElementById("u5");
	 var u6=document.getElementById("u6");
	 var rflag=0;
	 for(var i=0;i<prod.length;i++)
	 {
		 if(id==prod[i].roll)
		 {
			if(prod[i].quan!=0)
			{
			nameNew=prod[i].name;
		    rollNew=prod[i].roll;
	        descNew=prod[i].desc;
	        priceNew=prod[i].price;
	        quanNew=prod[i].quan;	
            break;			
		    }
			else
			{
			 rflag=1;
			 alert("Out Of Stock!");	
			}
		 }
		 
	 }
	 
	 if(flag==0 && rflag==0)
	 {
	 var d="d"+id;
	 var x = document.getElementById(d).selectedIndex;
	 var y = document.getElementById(d).options;

	appendInList(rollNew,u1);
	appendInList(nameNew,u2);
	appendInList(descNew,u3);
	appendInList(y[x].text,u4);
	var a=Number(y[x].text);
    var total=(a)*(priceNew);
	appendInList(total,u5);
	// delete button id is : del+id

	buttonappend(id,u6);
	var obj=
	{
	 roll:rollNew,
	 name:nameNew,
	 desc:descNew,
	 price:total,
	 quan:a
	}
	if(cart==undefined)
	{
		cart=[];
	}
	cart.push(obj);
	cartOrder[now]=(cart);
	storeOrderCart(cartOrder);
	}
    else if(flag==1)
	 {	 
	appendInList(id,u1);
	appendInList(a,u2);
	appendInList(b,u3); 
	appendInList(c,u4); 
	appendInList(d,u5);  
	buttonappend(id,u6);      
	 }

}

function buttonappend(id,b)
{
	var li=document.createElement("li");
	
	var button=document.createElement("button");
	var n="del"+id;
	button.setAttribute("id",n);
	button.textContent="x";
	
	li.appendChild(button);
	b.appendChild(li);
	var br=document.createElement("br");
	b.appendChild(br);
	
    button.addEventListener('click', function()
    {
		 //alert(id);
        cartOrder=getStoredOrderCart();
		cart=cartOrder[now];
		if(cart!=undefined)
    	{
	    var len=cart.length;
	    //alert(cart[0].name+"priya vats"+len);
	    for(var i=0;i<len;i++)
	    {
		 if(cart[i]!=null)
		 {
			if(cart[i].roll==id)
			{
			 //alert("cart roll "+cart[i].roll+" value of i "+i);
			 cart.splice(i,1);
			 location.reload();
			}		
		  
		 }
	    }     

	    }	
    	cartOrder[now]=(cart);
	    storeOrderCart(cartOrder);
    
    });
	
}
function appendInList(a,b)
{
	var li=document.createElement("li");
	li.textContent=a;
	b.appendChild(li);
	var br=document.createElement("br");
    b.appendChild(br);
	   	
}

function storeCartProducts(cart)
 {
	 localStorage.cart = JSON.stringify(cart);
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
function storeOrderCart(ordercart)
 {
	 localStorage.ordercart = JSON.stringify(ordercart);
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
function getStoredLogin()
 {
	if (!localStorage.login)
    { 
	// default to empty array 
	localStorage.login = JSON.stringify([]);
	} 
	return JSON.parse(localStorage.login); 
}
var admin=[];
var temp=[];

function placeorder()
{
    var cartOrder=[];
    cartOrder=getStoredOrderCart();
    
    var cart=[];
    cart=cartOrder[now];
	var prodd=[];
	prodd=getStoredProducts();
	var cartLength=cart.length;
	var prodLength=prodd.length;
	var f=0;
	for(var i=0;i<cartLength;i++)
	{
		
		for(var j=0;j<prodLength;j++)
		{
			if(cart[i].roll==prodd[j].roll)
			{
			  if(cart[i].quan>prodd[j].quan)
			  {
				  alert("OUT OF STOCK! "+prodd[j].name);
				  f=1;
			  }
			  else
			  {
				
				 
				  prodd[j].quan=prodd[j].quan-cart[i].quan;
				   storeProducts(prodd);
			  }
			}
			
		}
	}
	
	
	
	if(f==0)
	{
	admin=getAdmin();
    var cartOrder=[];
    cartOrder=getStoredOrderCart();

    var cart=[];
    cart=cartOrder[now];

	if(admin[now]==null)
	{
		admin[now]=cart;
		storeAdmin(admin);
		//alert("priya");
	}
	else
	{
		//alert("vats");
		var n=admin[now].length;
		temp=admin[now];
		//alert(n);
		for(var i=0;i<n;i++)
		{
			
		}
        
		temp.push(cart);
	    admin[now]=temp;		
		storeAdmin(admin);
	}
	window.location="order.html";	
	}
	 
}  

function storeProducts(products)
 {
	 localStorage.products = JSON.stringify(products);
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