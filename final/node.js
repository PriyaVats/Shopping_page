var express = require('express');

var app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var user=[];

app.get('/',function(req,res)
{
   
   res.sendFile(__dirname + '/front.html');
   
}) 
app.post('/insert',function(req,res,next)
{
	

   console.log('Sanjay Vats');	
	var nid=req.body.name;
    var pid=req.body.pass;
    var aid=req.body.add;
	var mid=req.body.mailid;
	
  if(!nid || !pid)
  {
	  
  }
  else
  {
	  	var rflag=0;
//	user=getStoredUser();
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
		
             
			 rflag=1;
			}
			
		}
    }
	  if(rflag==0)
	  {
 	  var obj=
 	  {
 		  userid:id,
 		  username:nid,
 		  userpass:pid,
		  useraddress:aid,
		  usermail:mid
		  
 	  }
 	  user.push(obj);
 	  //storeUser(user);
	  
	  }
  }
  console.log(nid+pid+aid+mid);
     res.redirect('/');
  
})
app.get('/:name',function(req,res)
{	

    var a="/"+req.params.name;
	res.sendFile(__dirname + a);
	console.log(a);
   
}) 



app.listen(8000,function()
{
	console.log("Listining to the server!");
});


