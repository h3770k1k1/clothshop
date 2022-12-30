async function fetchItems() {
	const response = await fetch("./items.json");
	const data = await response.json();
	return data;
}

async function loadItems(currentPage) {
	const items = await fetchItems();

	if (currentPage == "newin") {
		for (let index = 0; index < items.length; index++) {
			loadNewInItem(items[index], "new-items-container");
		}
	}

	if (currentPage == "tshirts") {
		for (let index = 0; index < items.length; index++) {
			loadTshirtsItem(items[index], "tshirts-container");
		}
	}

	if (currentPage == "bugstarbasics") {
		for (let index = 0; index < items.length; index++) {
			loadBasicsItem(items[index], "basics-container");
		}
	}
}

function addItemsCount(itemsCountContainerName, items) {
	let itemsCountContainer = document.getElementById(itemsCountContainerName);
	itemsCountContainer.innerText = items.length + " items";
}

function loadBasicsItem(item, containerName) {
	if (item.basics == true) {
		const itemsContainer = document.getElementById(containerName);
		const itemDiv = document.createElement("div");
		itemDiv.classList.add("cloth-item");
		appendItemElements(itemDiv, item);
		//filtr items by price
		const filtrButton = document.getElementById("filtr-button");
		filtrButton.addEventListener("click", function () {
			if (
				document.getElementById("lowest-price").value == "" &&
				document.getElementById("highest-price").value == ""
			) {
				window.location.reload();
			} else {
				if (item.price < document.getElementById("lowest-price").value) {
					console.log(item.price);
					itemsContainer.removeChild(itemDiv);
				}
				if (item.price > document.getElementById("highest-price").value) {
					console.log(item.price);
					itemsContainer.removeChild(itemDiv);
				}
			}
		});
		//
		if (
			document.getElementById("lowest-price").value == "" &&
			document.getElementById("highest-price").value == ""
		) {
			//
			itemsContainer.appendChild(itemDiv);
		}
		//filtr by size
		const sizeFiltrOptions = document.querySelectorAll(".size-option");
		for (let index = 0; index < sizeFiltrOptions.length; index++) {
			sizeFiltrOptions[index].addEventListener("click", function () {
				console.log(sizeFiltrOptions[index].id);
				if (item[sizeFiltrOptions[index].id] == false) {
					itemsContainer.removeChild(itemDiv);
				} else {
					itemsContainer.appendChild(itemDiv);
				}
			});
		} //
	}
}

function loadTshirtsItem(item, containerName) {
	if (item.tshirts == true) {
		const itemsContainer = document.getElementById(containerName);
		const itemDiv = document.createElement("div");
		itemDiv.classList.add("cloth-item");
		appendItemElements(itemDiv, item);
		//filtr items by price
		const filtrButton = document.getElementById("filtr-button");
		filtrButton.addEventListener("click", function () {
			if (
				document.getElementById("lowest-price").value == "" &&
				document.getElementById("highest-price").value == ""
			) {
				window.location.reload();
			} else {
				if (item.price < document.getElementById("lowest-price").value) {
					console.log(item.price);
					itemsContainer.removeChild(itemDiv);
				}
				if (item.price > document.getElementById("highest-price").value) {
					console.log(item.price);
					itemsContainer.removeChild(itemDiv);
				}
			}
		});
		//
		if (
			document.getElementById("lowest-price").value == "" &&
			document.getElementById("highest-price").value == ""
		) {
			//
			itemsContainer.appendChild(itemDiv);
		}
		//filtr by size
		const sizeFiltrOptions = document.querySelectorAll(".size-option");
		for (let index = 0; index < sizeFiltrOptions.length; index++) {
			sizeFiltrOptions[index].addEventListener("click", function () {
				console.log(sizeFiltrOptions[index].id);
				if (item[sizeFiltrOptions[index].id] == false) {
					itemsContainer.removeChild(itemDiv);
				} else {
					itemsContainer.appendChild(itemDiv);
				}
			});
		} //
	}
}

function loadNewInItem(item, containerName) {
	if (item.newIn == true) {
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
	a.appendChild(clothItemPic(item));
	a.appendChild(productName(item));
	//const seeProductButton = document.createElement("div");
	//seeProductButton.classList.add("see-product-button");
	//seeProductButton.innerText = "SEE PRODUCT";
	//a.appendChild(seeProductButton);
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
	price.innerText = item.price + " PLN";
	return price;
}

document.getElementById("reset-filters").addEventListener("click", function () {
	window.location.reload();
});
