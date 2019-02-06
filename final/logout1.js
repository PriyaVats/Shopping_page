login=storelogin();
localStorage.removeItem(login);

function storelogin() 
{
	if (!localStorage.login)
	{ 
    localStorage.login = JSON.stringify([]); 
    } 
    return JSON.parse(localStorage.login); 

}
