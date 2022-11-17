const items = [
	{
		mainImageSource: "resources/cloth-item (1).png",
		ImageSource1: "resources/cloth-item (19).png",
		ImageSource2: "resources/cloth-item (20).png",
		ImageSource3: "resources/cloth-item (21).png",
		name: "COQUETTE PJ TOP",
		color: "WHITE",
		price: "56.00 ZŁ",
		XS: true,
		S: true,
		M: true,
		L: true,
		XL: true,
		category: "newIn",
		producer: "B & G",
	},
	{
		mainImageSource: "resources/cloth-item (2).png",
		name: "POCKET DEMIN MINI SKIRT",
		color: "BLUE",
		price: "29.99ZŁ",
		XS: true,
		S: true,
		M: true,
		L: true,
		XL: true,
		category: "newIn",
		producer: "Lil Bug",
	},
	{
		mainImageSource: "resources/cloth-item (3).png",
		name: "ANKLE STRAP HEELS",
		color: "BLACK",
		price: "69.99ZŁ",
		XS: true,
		S: true,
		M: true,
		L: true,
		XL: true,
		category: "newIn", //basics",
		producer: "BUGSTAR",
	},
	{
		mainImageSource: "resources/cloth-item (4).png",
		name: "CUTE DEMIN MINISKIRT",
		color: "YELLOW",
		price: "19.99ZŁ",
		XS: true,
		S: false,
		M: false,
		L: true,
		XL: false,
		category: "newIn",
		producer: "Reset Vet",
	},

	{
		mainImageSource: "resources/cloth-item (5).png",
		name: "LANA T-SHIRT Y2K",
		color: "CREAM",
		price: "19.99ZŁ",
		XS: true,
		S: true,
		M: true,
		L: true,
		XL: true,
		category: "newIn", //"tshirts",
		producer: "bug of the loom",
	},
	{
		mainImageSource: "resources/cloth-item (15).png",
		name: "POCKET DEMIN MINI SKIRT",
		color: "BLUE",
		price: "29.99ZŁ",
		XS: true,
		S: true,
		M: true,
		L: true,
		XL: true,
		category: "tshirts",
		producer: "LiL Bug x Bugstar",
	},
	{
		mainImageSource: "resources/cloth-item (16).png",
		name: "ANKLE STRAP HEELS",
		color: "BLACK",
		price: "69.99ZŁ",
		XS: true,
		S: false,
		M: false,
		L: true,
		XL: true,
		category: "tshirts",
		producer: "Buground Warderobe",
	},
	{
		mainImageSource: "resources/cloth-item (17).png",
		name: "CUTE DEMIN MINISKIRT",
		color: "YELLOW",
		price: "19.99ZŁ",
		XS: true,
		S: true,
		M: true,
		L: false,
		XL: false,
		category: "tshirts",
		producer: "Chip Shop",
	},
	{
		mainImageSource: "resources/cloth-item (18).png",
		name: "LANA T-SHIRT Y2K",
		color: "CREAM",
		price: "19.99ZŁ",
		XS: true,
		S: true,
		M: false,
		L: true,
		XL: true,
		category: "tshirts",
		producer: "Critical Bug",
	},

	{
		mainImageSource: "resources/cloth-item (6).png",
		name: "COQUETTE PJ TOP",
		color: "WHITE",
		price: "56.00 ZŁ",
		XS: false,
		S: false,
		M: true,
		L: false,
		XL: true,
		category: "basics",
		producer: "STARBUGZ",
	},
	{
		mainImageSource: "resources/cloth-item (7).png",
		name: "POCKET DEMIN MINI SKIRT",
		color: "BLUE",
		price: "29.99ZŁ",
		XS: true,
		S: true,
		M: true,
		L: false,
		XL: false,
		category: "basics",
		producer: "Bugkovsky",
	},
	{
		mainImageSource: "resources/cloth-item (8).png",
		name: "ANKLE STRAP HEELS",
		color: "BLACK",
		price: "69.99ZŁ",
		XS: true,
		S: true,
		M: false,
		L: true,
		XL: true,
		category: "basics",
		producer: "New Bugger",
	},
	{
		mainImageSource: "resources/cloth-item (9).png",
		name: "CUTE DEMIN MINISKIRT",
		color: "YELLOW",
		price: "19.99ZŁ",
		XS: true,
		S: true,
		M: true,
		L: false,
		XL: true,
		category: "basics",
		producer: "Bugcoste",
	},
	{
		mainImageSource: "resources/cloth-item (10).png",
		name: "LANA T-SHIRT Y2K",
		color: "CREAM",
		price: "19.99ZŁ",
		XS: true,
		S: true,
		M: true,
		L: false,
		XL: true,
		category: "basics",
		producer: "Buggio Buggani",
	},
	{
		mainImageSource: "resources/cloth-item (11).png",
		name: "CUTE DEMIN MINISKIRT",
		color: "YELLOW",
		price: "19.99ZŁ",
		XS: true,
		S: true,
		M: true,
		L: false,
		XL: true,
		category: "basics",
		producer: "Luis Bugtown",
	},
	{
		mainImageSource: "resources/cloth-item (12).png",
		name: "LANA T-SHIRT Y2K",
		color: "CREAM",
		price: "19.99ZŁ",
		XS: true,
		S: true,
		M: true,
		L: false,
		XL: false,
		category: "basics",
		producer: "bugshka",
	},
];

/*function addItemsCount(itemsCountContainerName, items) {
	let itemsCountContainer = document.getElementById(itemsCountContainerName);
	itemsCountContainer.innerText = items.length + " items";
} */

function loadItem(item, containerName, category) {
	if (item.category == category) {
		const itemsContainer = document.getElementById(containerName);
		const itemDiv = document.createElement("div");
		itemDiv.classList.add("cloth-item");
		appendItemElements(itemDiv, item);
		itemsContainer.appendChild(itemDiv);
	}
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
	clothItemPic.src = item.mainImageSource;
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

if (currentPage == "newin") {
	for (let index = 0; index < items.length; index++) {
		loadItem(items[index], "new-items-container", "newIn");
	}
	//addItemsCount("new-items-count", items);
}

if (currentPage == "tshirts") {
	for (let index = 0; index < items.length; index++) {
		loadItem(items[index], "tshirts-container", "tshirts");
	}
	//addItemsCount("tshirts-count", items);
}

if (currentPage == "bugstarbasics") {
	for (let index = 0; index < items.length; index++) {
		loadItem(items[index], "basics-container", "basics");
	}
	//addItemsCount("bugstarbasic-items-count", items);
}
