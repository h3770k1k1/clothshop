let itemsCart = getCartItems();
let sum = 0;
const itemListContainer = $("#items-list-container");
let itemsCount = 0;

function addItemToCart(item) {
	itemsCart.push(item);
	saveItemsCartToStorage();
}

function displayCart() {
	getCartItems().forEach((item) => {
		removeButtonAction(itemsCount, item);
		itemsCount += 1;
		ubdateItemsCount(itemsCount);
		const htmlItem = createHtmlCartItem(item);
		itemListContainer.append(htmlItem);
	});
}

function createHtmlCartItem(item) {
	sum += item.price;
	const htmlItem = $(`<li></li>`);
	htmlItem.addClass("new-item");

	let itemsInCart = document.querySelectorAll(".new-item");
	for (let index = 0; index < itemsInCart.length; index++) {
		console.log(itemsInCart);
	}
	const mainContainer = $(`<div></div>`);
	mainContainer.addClass("main-container");
	htmlItem.append(mainContainer);

	const picContainer = $(`<img/>`);
	picContainer.addClass("cart-pic-container");
	picContainer.attr("src", item.cartImage);
	mainContainer.append(picContainer);

	const productNameContainer = $(`<div>${item.name}</div>`);
	productNameContainer.addClass("product-name-container");
	mainContainer.append(productNameContainer);

	const removeButton = $(`<div>remove</div>`);
	removeButton.addClass("remove-button");
	productNameContainer.append(removeButton);

	const sizeDropdownContainer = $(`<div></div>`);
	sizeDropdownContainer.addClass("size-dropdown-container");

	const selectedSizeContainer = $(`<div></div>`);
	selectedSizeContainer.addClass("selected-size-container");

	sizeDropdownContainer.append(selectedSizeContainer);
	sizeDropdownContainer.append(createSizeDropdown());
	mainContainer.append(sizeDropdownContainer);

	const quantityContainer = $(`<div></div>`);
	quantityContainer.addClass("quantity-container");
	mainContainer.append(quantityContainer);

	const subtractButton = $(`<div>-</div>`);
	subtractButton.addClass("quantity-container-element");
	quantityContainer.append(subtractButton);

	let productCount = 1;

	let quantity = document.createElement("div");
	quantity.innerHTML = productCount;
	quantity.classList.add("quantity-container-element");
	quantityContainer.append(quantity);

	const addButton = $(`<div>+</div>`);
	addButton.addClass("quantity-container-element");
	quantityContainer.append(addButton);

	subtractButton.click(function () {
		if (productCount != 1) {
			sum -= item.price;
			ubdateSum(sum, item);
			console.log(sum);
			productCount -= 1;
			itemsCount -= 1;
			ubdateItemsCount(itemsCount);
		}
		quantity.innerHTML = productCount;
	});

	addButton.click(function () {
		productCount += 1;
		itemsCount += 1;
		sum += item.price;
		ubdateSum(sum, item);

		ubdateItemsCount(itemsCount);
		quantity.innerHTML = productCount;
	});
	console.log(itemsCount);
	const priceContainer = $(`<div>${item.price + " PLN"}</div>`);
	priceContainer.addClass("price-container");
	mainContainer.append(priceContainer);
	ubdateSum(sum, item);

	return htmlItem;
}

function createSizeDropdown() {
	item = JSON.parse(sessionStorage.item);
	const sizeContainer = $("<select size />");

	sizeContainer.addClass("size-dropdown");
	const sizes = ["xs", "s", "m", "l", "xl"];
	sizes.forEach((size) => {
		if (item[size]) {
			optText = size;
			optValue = size;
			sizeContainer.append(`<option value="${optValue}">${optText}</option>`);
		}
	});

	return sizeContainer;
}

function saveItemsCartToStorage() {
	sessionStorage.setItem("itemsCart", JSON.stringify(itemsCart));
}

function removeButtonAction(count, item) {
	item = JSON.parse(sessionStorage.item);

	$(".remove-button").click(function (event) {
		event.preventDefault();
		count -= 1;
		$(this).parents(".main-container").remove();
		ubdateItemsCount(count);
	});
}

function getCartItems() {
	const items = JSON.parse(sessionStorage.getItem("itemsCart"));
	return items ? items : [];
}

function addMainContainer(element) {
	let mainContainer = document.createElement("div");
	mainContainer.classList.add("main-container");
	element.appendChild(mainContainer);
}

function ubdateSum(sum, item) {
	item = JSON.parse(sessionStorage.item);
	$("#sum").html(sum + " PLN");
	$("#total-sum").html(sum + " PLN");
	console.log(sum);
}

function ubdateItemsCount(count) {
	$("#items-sum").html(count + " items");
}
