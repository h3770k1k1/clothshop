const newInItems = [
	{
		imageSource: "resources/cloth-item (1).png",
		name: "COQUETTE PJ TOP",
		color: "WHITE",
		price: "56.00 ZŁ",
	},
	{
		imageSource: "resources/cloth-item (2).png",
		name: "POCKET DEMIN MINI SKIRT",
		color: "BLUE",
		price: "29.99ZŁ",
	},
	{
		imageSource: "resources/cloth-item (3).png",
		name: "ANKLE STRAP HEELS",
		color: "BLACK",
		price: "69.99ZŁ",
	},
	{
		imageSource: "resources/cloth-item (4).png",
		name: "CUTE DEMIN MINISKIRT",
		color: "YELLOW",
		price: "19.99ZŁ",
	},
	{
		imageSource: "resources/cloth-item (5).png",
		name: "LANA T-SHIRT Y2K",
		color: "CREAM",
		price: "19.99ZŁ",
	},
];

const tshirts = [
	{
		imageSource: "resources/cloth-item (5).png",
		name: "COQUETTE PJ TOP",
		color: "WHITE",
		price: "56.00 ZŁ",
	},
	{
		imageSource: "resources/cloth-item (15).png",
		name: "POCKET DEMIN MINI SKIRT",
		color: "BLUE",
		price: "29.99ZŁ",
	},
	{
		imageSource: "resources/cloth-item (16).png",
		name: "ANKLE STRAP HEELS",
		color: "BLACK",
		price: "69.99ZŁ",
	},
	{
		imageSource: "resources/cloth-item (17).png",
		name: "CUTE DEMIN MINISKIRT",
		color: "YELLOW",
		price: "19.99ZŁ",
	},
	{
		imageSource: "resources/cloth-item (18).png",
		name: "LANA T-SHIRT Y2K",
		color: "CREAM",
		price: "19.99ZŁ",
	},
];

const basics = [
	{
		imageSource: "resources/cloth-item (3).png",
		name: "ANKLE STRAP HEELS",
		color: "BLACK",
		price: "69.99ZŁ",
	},
	{
		imageSource: "resources/cloth-item (6).png",
		name: "COQUETTE PJ TOP",
		color: "WHITE",
		price: "56.00 ZŁ",
	},
	{
		imageSource: "resources/cloth-item (7).png",
		name: "POCKET DEMIN MINI SKIRT",
		color: "BLUE",
		price: "29.99ZŁ",
	},
	{
		imageSource: "resources/cloth-item (8).png",
		name: "ANKLE STRAP HEELS",
		color: "BLACK",
		price: "69.99ZŁ",
	},
	{
		imageSource: "resources/cloth-item (9).png",
		name: "CUTE DEMIN MINISKIRT",
		color: "YELLOW",
		price: "19.99ZŁ",
	},
	{
		imageSource: "resources/cloth-item (10).png",
		name: "LANA T-SHIRT Y2K",
		color: "CREAM",
		price: "19.99ZŁ",
	},
	{
		imageSource: "resources/cloth-item (11).png",
		name: "CUTE DEMIN MINISKIRT",
		color: "YELLOW",
		price: "19.99ZŁ",
	},
	{
		imageSource: "resources/cloth-item (12).png",
		name: "LANA T-SHIRT Y2K",
		color: "CREAM",
		price: "19.99ZŁ",
	},
];

function addItemsCount(itemsCountContainerName, items) {
	let itemsCountContainer = document.getElementById(itemsCountContainerName);
	itemsCountContainer.innerText = items.length + " items";
}

function loadItem(item, containerName) {
	const itemsContainer = document.getElementById(containerName);
	const itemDiv = document.createElement("div");
	itemDiv.classList.add("cloth-item");
	appendItemElements(itemDiv, item);

	itemsContainer.appendChild(itemDiv);
}

function appendItemElements(itemDiv, item) {
	itemDiv.appendChild(seeProductButton(item));
	itemDiv.appendChild(itemDescription(item));
	itemDiv.appendChild(clothItemPic(item));
	itemDiv.appendChild(productName(item));
	itemDiv.appendChild(productColor(item));
	itemDiv.appendChild(price(item));
}
function seeProductButton(item) {
	const a = document.createElement("a");
	a.setAttribute("href", "product.html");
	a.addEventListener("click", () => {
		console.log(item);
		sessionStorage.setItem("item", JSON.stringify(item));
	});
	const seeProductButton = document.createElement("div");
	seeProductButton.classList.add("see-product-button");
	seeProductButton.innerText = "SEE PRODUCT";
	a.appendChild(seeProductButton);

	return a;
}
function itemDescription(item) {
	const itemDescription = document.createElement("div");
	itemDescription.classList.add("item-description");
	return itemDescription;
}
function clothItemPic(item) {
	const clothItemPic = document.createElement("img");
	clothItemPic.src = item.imageSource;
	clothItemPic.classList.add("cloth-pic");
	return clothItemPic;
}
function productName(item) {
	const productName = document.createElement("div");
	productName.classList.add("product-name");
	productName.innerText = item.name;
	return productName;
}
function productColor(item) {
	const productColor = document.createElement("div");
	productColor.classList.add("product-color");
	productColor.innerText = item.color;
	return productColor;
}

function price(item) {
	const price = document.createElement("div");
	price.classList.add("price");
	price.innerText = item.price;
	return price;
}

if (currentPage == "tshirts") {
	for (let index = 0; index < tshirts.length; index++) {
		loadItem(tshirts[index], "tshirts-container");
	}
	addItemsCount("tshirts-count", tshirts);
}

if (currentPage == "newin") {
	for (let index = 0; index < newInItems.length; index++) {
		loadItem(newInItems[index], "new-items-container");
	}
	addItemsCount("new-items-count", newInItems);
}

if (currentPage == "bugstarbasics") {
	for (let index = 0; index < basics.length; index++) {
		loadItem(basics[index], "basics-container");
	}
	addItemsCount("bugstarbasic-items-count", basics);
}
