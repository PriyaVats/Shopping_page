var express = require('express');
var app = express();

app.get('/',function(req,res)
{	
   res.sendFile(__dirname + '/front.html');
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


