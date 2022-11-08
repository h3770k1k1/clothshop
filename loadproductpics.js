const productPic = document.createElement("img");
productPic.src = "resources/productpic.jpg";

let viewButtons = document.getElementsByClassName("see-product-button");
let viewButton = viewButtons[0];

viewButton.addEventListener("click", function () {
	console.log("element clicked");

	if (currentPage == "product") {
		let productPicContainer = document.getElementById("product-pic1");
		productPicContainer.appendChild(productPic);
	}
});
