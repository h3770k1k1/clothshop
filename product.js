function productSiteLoading() {
	item = JSON.parse(sessionStorage.item);

	function loadSizes() {
		const sizes = ["xs", "s", "m", "l", "xl"];
		sizes.forEach((size) => {
			if (item[size]) {
				$(`#${size}`).addClass("available-size");
			}
		});
	}

	loadSizes();

	const sizeChars = document.querySelectorAll(".size-char");
	function addToggleChoosenListeners() {
		for (let index = 0; index < sizeChars.length; index++) {
			$(sizeChars[index]).click(function () {
				if ($(this).hasClass("available-size")) {
					if ($(this).hasClass("choosen")) {
						$(this).removeClass("choosen");
					} else {
						sizeChars.forEach((char) => {
							char.classList.remove("choosen");
						});
						$(this).addClass("choosen");

						sizeOptionsContainer.classList.remove("red-background");
					}
				}
			});
		}
	}
	addToggleChoosenListeners();

	const sizeOptionsContainer = document.getElementById("size-options");

	function checkIfSizeChoosen() {
		for (let index = 0; index < sizeChars.length; index++) {
			if ($(sizeChars[index]).hasClass("choosen")) {
				return true;
			}
		}
	}

	const addButton = document.getElementById("add-button");

	const shopContainer = document.getElementById("shop-container");
	const popUp = document.createElement("div");
	popUp.classList.add("pop-up");

	const closeButton = document.createElement("div");
	closeButton.innerHTML = "X";
	closeButton.id = "close-button";

	const addNotification = document.createElement("div");
	addNotification.innerHTML = "Product added to cart";
	addNotification.id = "add-notification";

	const continueShoppingButton = document.createElement("div");
	continueShoppingButton.innerHTML = "Continue shopping";
	continueShoppingButton.classList.add("notification-button");

	const myBagLink = document.createElement("a");
	myBagLink.setAttribute("href", "mybag.html");
	myBagLink.id = "my-bag-link";
	const goToCardButton = document.createElement("div");
	goToCardButton.innerHTML = "Go to card";
	goToCardButton.classList.add("notification-button");
	myBagLink.appendChild(goToCardButton);

	const tickIcon = document.createElement("img");
	tickIcon.src = "resources/tick.png";
	tickIcon.id = "tick-icon";

	addButton.addEventListener("click", function () {
		console.log("xd");
		if (checkIfSizeChoosen()) {
			showPopUp();
			addItemToCart(item);
		} else {
			sizeOptionsContainer.classList.add("red-background");
		}
	});

	closeButton.addEventListener("click", function () {
		hidePopUp();
	});

	function showPopUp() {
		shopContainer.appendChild(popUp);
		popUp.appendChild(tickIcon);
		popUp.appendChild(closeButton);
		popUp.appendChild(addNotification);
		popUp.appendChild(continueShoppingButton);
		popUp.appendChild(myBagLink);
	}

	function hidePopUp() {
		shopContainer.removeChild(popUp);
	}

	continueShoppingButton.addEventListener("click", function () {
		hidePopUp();
	});

	function addToWishlist() {
		//Adding to wishlist
		//increaseCounter(wishListCounter, i);
	}

	function increaseCounter(counter, x) {
		//counter.innerHTML = "(" + String(x + 1) + ")";
	}

	const wishListCounter = document.getElementById("wishlist-counter");
	let i = 0;
	const wishlistButton = document.getElementById("wishlist-button");

	const shoppingCardCounter = document.getElementById("shopping-card-counter");
	let j = 0;

	/*wishlistButton.addEventListener("click", function () {
		wishListCounter.innerHTML = "(" + String(i + 1) + ")";
	});*/

	item = JSON.parse(sessionStorage.item);
	document.getElementById("product-name").innerText = item.name;
	document.getElementById("product-price").innerText = item.price;

	const mainPicContainer = document.getElementById("main-pic-container");
	let mainPic = document.createElement("img");
	mainPic.src = item.croppedImageSource;
	mainPic.classList.add("main-pic");
	mainPicContainer.appendChild(mainPic);

	const picsContainer = document.getElementById("pics-column");

	const productPic1 = document.createElement("img");
	productPic1.classList.add("product-pic");
	productPic1.src = item.ImageSource1;

	const productPic2 = document.createElement("img");
	productPic2.classList.add("product-pic");
	productPic2.src = item.ImageSource2;

	const productPic3 = document.createElement("img");
	productPic3.classList.add("product-pic");
	productPic3.src = item.ImageSource3;

	picsContainer.appendChild(productPic1);
	picsContainer.appendChild(productPic2);
	picsContainer.appendChild(productPic3);
	console.log("cokolwiek");

	const producerName = document.getElementById("producer-name");
	producerName.innerHTML = item.producer;

	goToCardButton.addEventListener("click", function () {});
}
