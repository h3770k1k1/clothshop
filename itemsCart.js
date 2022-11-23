let itemsCart = getCartItems();

function addItemToCart(item) {
	document.getElementById("announcement").innerHTML = "";
	itemsCart.push(item);
	saveItemsCartToStorage();
}
function saveItemsCartToStorage() {
	sessionStorage.setItem("itemsCart", JSON.stringify(itemsCart));
}
function removeFromCart(item) {
	//itemsCart.removeItemThatHasId(item.id)
}
function getCartItems() {
	const items = JSON.parse(sessionStorage.getItem("itemsCart"));
	return items ? items : [];
}
