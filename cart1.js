var prod=[];
prod=getStoredProducts();

function displayProduct()
{
	
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
function getStoredCart()
 {
	if (!localStorage.cart)
    { 
	// default to empty array 
	localStorage.cart = JSON.stringify([]);
	} 
	return JSON.parse(localStorage.cart); 
}