var f1=0;
var f2=0;
var f3=0;
var f4=0;
var array=[];
var count=1;
var flag=0;
var editflag=0;
var t=[];
 t=getStoredProducts();
for(var i=0;i<t.length;i++)
{
	if(t[i]==null)
	{
		console.log("hey");
	
    }
	else
	{
		var a,b,c,d;
		a=t[i].name;
		b=t[i].desc;
		c=t[i].price;
		d=t[i].quan;
        funsubmit(count,a,b,c,d,1);
		count++;
	console.log("Value is : "+a+b+c+d);		
	}
}

function add(a,b,c,d,e)
{     
    editflag=e;
	//console.log("value of editflag in add "+editflag);
    var x = document.getElementById("btn1");
    var y=  document.getElementById("divPanel");
	if (x.style.display === "none") 
	{
        x.style.display = "block";
    }
	else 
	{
        x.style.display = "none";
    }
	
	if(flag==1)
	{
	var myNode = document.getElementById("divPanel");
    while (myNode.firstChild)
	{
    myNode.removeChild(myNode.firstChild);
    }
	if (y.style.display === "none") 
	{
        y.style.display = "block";
    }
	else 
	{
        y.style.display = "none";
    }
	flag=0;
	}
	
	var mainId=document.getElementById("divPanel");
	
	var l1=document.createElement('label1');
    l1.appendChild(document.createTextNode("Cannot be empty"));
    l1.setAttribute("id","l1");
    l1.style.display="none";
    l1.style.color="red";
	
	var div1=document.createElement("div");
	div1.setAttribute("id","div1");
	var label1=document.createElement("label");
    label1.appendChild(document.createTextNode("Name :  "));
    var input1 = document.createElement("INPUT");
    input1.setAttribute("id","input1");
	div1.appendChild(label1); 
	div1.appendChild(input1); 
	div1.appendChild(l1);
    mainId.appendChild(div1); 

  
  	var l2=document.createElement('label1');
    l2.appendChild(document.createTextNode("Cannot be empty"));
    l2.setAttribute("id","l2");
    l2.style.display="none";
    l2.style.color="red";
	
  	var div2=document.createElement("div");
	div2.setAttribute("id","div2");
	var label2=document.createElement("label");
    label2.appendChild(document.createTextNode("Specif : "));
    var input2 = document.createElement("textarea");
    input2.setAttribute("id","input2");
	input2.setAttribute("rows","1");
	input2.setAttribute("cols","50"); 
    div2.appendChild(label2); 
	div2.appendChild(input2);
    div2.appendChild(l2);	
    mainId.appendChild(div2); 
   
   	var l3=document.createElement('label1');
    l3.appendChild(document.createTextNode("Cannot be empty"));
    l3.setAttribute("id","l3");
    l3.style.display="none";
    l3.style.color="red";
	
  	var div3=document.createElement("div");
	div3.setAttribute("id","div3");
	var label3=document.createElement("label");
    label3.appendChild(document.createTextNode("Price : "));
    var input3 = document.createElement("INPUT");
    input3.setAttribute("id","input3");

    div3.appendChild(label3); 
	div3.appendChild(input3); 
	div3.appendChild(l3);
    mainId.appendChild(div3);   
	
   	var l4=document.createElement('label1');
    l4.appendChild(document.createTextNode("Cannot be empty"));
    l4.setAttribute("id","l4");
    l4.style.display="none";
    l4.style.color="red";
  
  	var div4=document.createElement("div");
	div4.setAttribute("id","div4");
	var label4=document.createElement("label");
    label4.appendChild(document.createTextNode("Qty   : "));
    var input4 = document.createElement("INPUT");
    input4.setAttribute("id","input4");
    div4.appendChild(label4); 
	div4.appendChild(input4);
	div4.appendChild(l4);
    mainId.appendChild(div4); 
    
	
    if(editflag==0)
	{
		
    var b1=document.createElement("BUTTON");
	b1.setAttribute("id","bt1");
	b1.appendChild(document.createTextNode("Submit"));
	mainId.appendChild(b1);

	
	
	var b2=document.createElement("BUTTON");
	b2.setAttribute("id","bt2");
	b2.appendChild(document.createTextNode("Cancel"));
	mainId.appendChild(b2);
	
	/*
    var l1=document.createElement("label");
    l1.appendChild(document.createTextNode("Cant be empty!"));
	l1.setAttribute("id","l1");
	*/
	var bt1 = document.getElementById("bt1");
    var bt2 = document.getElementById("bt2");
    bt1.addEventListener("click", button1);
	bt2.addEventListener("click", button2);	
	}
	else if(editflag!=0)
	{
	input1.value=array[editflag-1].name;
	input2.value=array[editflag-1].desc;
	input3.value=array[editflag-1].price;
	input4.value=array[editflag-1].quan;
     var modify=document.createElement("BUTTON");
	 modify.setAttribute("id","modify");
	 modify.appendChild(document.createTextNode("Modify "));
	 mainId.appendChild(modify);
     var bt5= document.getElementById("modify");
	 
	 bt5.addEventListener("click",button1);
	 
	}
	
}
function button1()
{
	var i1=document.getElementById("input1");
	var i2=document.getElementById("input2");
	var i3=document.getElementById("input3");
	var i4=document.getElementById("input4");
	if(!i1.value)
	{
	  if(l1.style.display=="none")
	 l1.style.display="inline-block"; 
      f1=1;  		    
  
	}
	else
	{
      if(f1==1)
	  {
		  l1.style.display="none";
		  f1=0;
	  }
	
	}
	
	if(!i2.value)
	{
     if(l2.style.display=="none")
	 l2.style.display="inline-block"; 
      f2=1;  		    
  
	}
	else
	{
		      if(f2==1)
	  {
		  l2.style.display="none";
		  f2=0;
	  }
	}
    if(!i3.value)
	{
	 if(l3.style.display=="none")
	 l3.style.display="inline-block"; 
      f3=1;  		    
  
		
	}
	else
	{
		      if(f3==1)
	  {
		  l3.style.display="none";
		  f3=0;
	  }
	}
    if(!i4.value)
	{
	  if(l4.style.display=="none")
	  l4.style.display="inline-block"; 
      f4=1;  		    
  

	}
	else
	{
      if(f4==1)
	  {
		  l4.style.display="none";
		  f4=0;
	  }
	}
	if(f1==0 && f2==0 && f3==0 && f4==0)
	{
			
		funsubmit(count,i1.value,i2.value,i3.value,i4.value,0);
	}
	
	
	
}

function funsubmit(v1,v2,v3,v4,v5,v6)
{
	count=v1;
	console.log(v5);
	if(editflag==0)
	{
	
	var temp;
	var obj=
	{
	 roll:count,
	 name:v2,
	 desc:v3,
	 price:v4,
	 quan:v5
	}
console.log("value of object : "+obj.roll+obj.name+obj.desc+obj.price+obj.quan);
	v2="";
	v3="";
	v4="";
	v5="";
	array.push(obj);
	
	var listdiv=document.createElement("div");
	listdiv.setAttribute("id",count);
	
	var mainlist=document.createElement("ul");
    listdiv.appendChild(mainlist);
    
	//alert("priya");
	var entry1=document.createElement("li");
	temp=count+"entry1";
	entry1.setAttribute("id",temp);
	entry1.textContent=array[array.length-1].name;
	mainlist.appendChild(entry1);
	//console.log(array[count-1].name);
	//console.log(array[array.length-1].name);
	
	var entry2=document.createElement("li");
	temp=count+"entry2";
	entry2.setAttribute("id",temp);
	entry2.textContent=array[array.length-1].desc;
	mainlist.appendChild(entry2);
	
    var entry3=document.createElement("li");
	temp=count+"entry3";
	entry3.setAttribute("id",temp);
	entry3.textContent=array[array.length-1].price;
	mainlist.appendChild(entry3);
		
	var entry4=document.createElement("li");
	temp=count+"entry4";
	entry4.setAttribute("id",temp);
	entry4.textContent=array[array.length-1].quan;
	mainlist.appendChild(entry4);
    
	var bt3=document.createElement("BUTTON");
	var n="d"+count;
	var fix=count;
	bt3.setAttribute("id",n);
	bt3.appendChild(document.createTextNode("Delete Record"));
	mainlist.appendChild(bt3);
	listdiv.appendChild(bt3);
	
	var bt4=document.createElement("BUTTON");
	var s="e"+count;
	
	bt4.setAttribute("id",s);
	bt4.appendChild(document.createTextNode("Edit Record"));
	mainlist.appendChild(bt4);
	listdiv.appendChild(bt4);
	
	
	divListing.appendChild(listdiv);
	if(v6==0)
	{
	storeProducts(array);	
	count++;
	}
	var n1=document.getElementById(n);
	var e1=document.getElementById(s);
	//console.log(e1);
	n1.addEventListener("click",function()
	{
	 		var del=document.getElementById(fix);
	 		
	 		del.remove();
	 		array.splice(del+1,1);	
			console.log("value of deleted list index : "+fix);
			//delete array[fix-1];
            storeProducts(array);			
	});
    e1.addEventListener("click",function()	
    {	
		var a=array[fix-1].name;    
		var b=array[fix-1].desc;
		var c=array[fix-1].price;
		var d=array[fix-1].quan;
        var id=document.getElementById(fix);
		var y=  document.getElementById("divPanel");
	    if (id.style.display === "none") 
	    {
         id.style.display = "block";
        }
	    else 
	    {
         id.style.display = "none";
		}
		
        var myNode = document.getElementById("divPanel");
        while (myNode.firstChild)
	    {
          myNode.removeChild(myNode.firstChild);
        }

		add(a,b,c,d,fix);

	     
	});
	}
	else
	{
 
	 array[editflag-1].name=input1.value;
	 array[editflag-1].desc=input2.value;
	 array[editflag-1].price=input3.value;
	 array[editflag-1].quan=input4.value;	
	    var id=document.getElementById(editflag);
		var temp=editflag+"entry1";
		document.getElementById(temp).textContent =array[editflag-1].name ;
		temp=editflag+"entry2";
		document.getElementById(temp).textContent =array[editflag-1].desc ;
		temp=editflag+"entry3";
		document.getElementById(temp).textContent =array[editflag-1].price ;
	    temp=editflag+"entry4";
		document.getElementById(temp).textContent =array[editflag-1].quan ;		
	    if (id.style.display === "none") 
	    {
         id.style.display = "block";
        }
	    else 
	    {
         id.style.display = "none";
		}
	            var myNode = document.getElementById("divPanel");
        while (myNode.firstChild)
	    {
          myNode.removeChild(myNode.firstChild);
        }
		storeProducts(array);	
	}

		
}


function button2()
{
	var x = document.getElementById("btn1");
    var y=  document.getElementById("divPanel");
	var z=  document.getElementById("divListing");
	if (y.style.display === "none") 
	{
        y.style.display = "block";
    }
	else 
	{
        y.style.display = "none";
    }
     
	if (x.style.display === "none") 
	{
        x.style.display = "block";
    }
	else 
	{
        x.style.display = "none";
    }
     flag=1;
}


function storeProducts(products)
 {
	 localStorage.products = JSON.stringify(products);
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
