function addItemToCart(item) {
	item.id = createUniqueId();
	item.count = 1;
	const cartItems = getCartItems();
	cartItems.push(item);
	saveItemsCartToStorage(cartItems);
}

function displayCart() {
	getCartItems().forEach((item) => {
		const htmlItem = createHtmlCartItem(item);
		$("#items-list-container").append(htmlItem);
	});
	updateHtmlItemsCount();
	updateHtmlSum();
}

function decreaseItemCount(targetItem) {
	const cartItems = getCartItems();
	cartItems.find((item) => item.id == targetItem.id).count -= 1;
	saveItemsCartToStorage(cartItems);
	updateHtmlItemsCount();
	updateHtmlSum();
}

function increaseItemCount(targetItem) {
	const cartItems = getCartItems();
	cartItems.find((item) => item.id == targetItem.id).count += 1;
	saveItemsCartToStorage(cartItems);
	updateHtmlItemsCount();
	updateHtmlSum();
}

function updateHtmlItemsCount() {
	$("#items-sum").html(getItemsCount() + " items");
}

function getItemsCount() {
	let itemsCount = 0;
	for (const item of getCartItems()) {
		itemsCount += item.count;
	}
	return itemsCount;
}

function updateHtmlSum() {
	$("#sum").html(getTotalPrice() + " PLN");
	$("#total-sum").html(getTotalPrice() + " PLN");
}

function getTotalPrice() {
	total = 0.0;
	for (const item of getCartItems()) {
		console.log("Item count: " + item.count);
		count = parseFloat(item.count);
		price = parseFloat(item.price);
		total += price * count;
	}
	return total.toFixed(2);
}

function removeItem(itemToRemove) {
	const cartItems = getCartItems().filter((item) => item.id != itemToRemove.id);
	saveItemsCartToStorage(cartItems);
	updateHtmlItemsCount();
	updateHtmlSum();
}

function createUniqueId() {
	return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
}

function createHtmlCartItem(item) {
	const htmlItem = $(`<li></li>`);
	htmlItem.addClass("new-item");

	let itemsInCart = document.querySelectorAll(".new-item");
	for (let index = 0; index < itemsInCart.length; index++) {
		console.log(itemsInCart);
	}
	const mainContainer = $(`<div></div>`);
	mainContainer.addClass("main-container");
	htmlItem.append(mainContainer);

	mainContainer.append(createCartImage(item));

	const productNameContainer = $(`<div>${item.name}</div>`);
	productNameContainer.addClass("product-name-container");
	mainContainer.append(productNameContainer);

	productNameContainer.append(createRemoveItemButton(item));

	const sizeListContainer = $(`<div></div>`);
	sizeListContainer.addClass("size-list-container");

	const sizeDropdownContainer = $(`<div></div>`);
	sizeDropdownContainer.addClass("size-dropdown-container");

	const selectedSizeContainer = $(`<div>${item.choosenSize}</div>`);
	selectedSizeContainer.addClass("selected-size-container");

	const dropdownButton = $(`<div>v</div>`);
	dropdownButton.addClass("dropdown-button");

	sizeDropdownContainer.append(selectedSizeContainer);
	sizeListContainer.append(dropdownButton);
	sizeListContainer.append(createSizeDropdown(selectedSizeContainer));
	sizeDropdownContainer.append(sizeListContainer);

	mainContainer.append(sizeDropdownContainer);

	const quantityContainer = $(`<div></div>`);
	quantityContainer.addClass("quantity-container");
	mainContainer.append(quantityContainer);

	const subtractButton = $(`<div>-</div>`);
	subtractButton.addClass("quantity-container-element");
	quantityContainer.append(subtractButton);

	let quantity = document.createElement("div");
	quantity.innerHTML = item.count;
	quantity.classList.add("quantity-container-element");
	quantityContainer.append(quantity);

	const addButton = $(`<div>+</div>`);
	addButton.addClass("quantity-container-element");
	quantityContainer.append(addButton);

	subtractButton.click(function () {
		if (getRefreshedItem(item).count != 1) {
			decreaseItemCount(item);
			quantity.innerHTML = getRefreshedItem(item).count;
		} else {
			$(this).parents(".main-container").remove();
			removeItem(item);
		}
	});

	addButton.click(function () {
		increaseItemCount(item);
		quantity.innerHTML = getRefreshedItem(item).count;
	});
	const priceContainer = $(`<div>${item.price + " PLN"}</div>`);
	priceContainer.addClass("price-container");
	mainContainer.append(priceContainer);

	return htmlItem;
}

function getRefreshedItem(item) {
	return getCartItems().find((i) => i.id == item.id);
}

function createRemoveItemButton(item) {
	const removeButton = $(`<div>remove</div>`);
	removeButton.addClass("remove-button");
	removeButton.click(function (event) {
		event.preventDefault();
		$(this).parents(".main-container").remove();
		removeItem(item);
	});
	return removeButton;
}

function createCartImage(item) {
	const picContainer = $(`<img/>`);
	picContainer.addClass("cart-pic-container");
	if (item.cartImage) {
		picContainer.attr("src", item.cartImage);
	} else {
		picContainer.attr("src", "resources/default-cart-image.png");
	}
	return picContainer;
}

function createSizeDropdown(container) {
	item = JSON.parse(sessionStorage.item);
	const sizeContainer = $("<div></div>");

	sizeContainer.addClass("size-dropdown");
	const sizes = ["xs", "s", "m", "l", "xl"];
	sizes.forEach((size) => {
		if (item[size]) {
			let sizeOption = $(`<div>${size}</div>`);
			sizeOption.addClass("size-option");
			sizeContainer.append(sizeOption);
			sizeOption.click(function () {
				container.html(size);
				item.choosenSize = size;
				console.log(item.choosenSize);
			});
		}
	});

	return sizeContainer;
}

function saveItemsCartToStorage(cartItems) {
	sessionStorage.setItem("itemsCart", JSON.stringify(cartItems));
}

function removeButtonAction(count, item) {}

function getCartItems() {
	const items = JSON.parse(sessionStorage.getItem("itemsCart"));
	return items ? items : [];
}

function addMainContainer(element) {
	let mainContainer = document.createElement("div");
	mainContainer.classList.add("main-container");
	element.appendChild(mainContainer);
}
document.getElementById("shopping-cart-counter").innerHTML =
	"(" + getItemsCount() + ")";
