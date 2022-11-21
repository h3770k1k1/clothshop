const itemsCart = getCartItems();

function addItemToCart(item) {
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
	return JSON.parse(sessionStorage.getItem("itemsCart"));
}
