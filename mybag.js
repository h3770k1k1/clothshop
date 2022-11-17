item = JSON.parse(sessionStorage.item);
const shoppingBagContainer = document.getElementById("shopping-bag-container");
const wishlistItem = document.createElement("div");
wishlistItem.innerHTML = item.name;
shoppingBagContainer.appendChild(wishlistItem);
