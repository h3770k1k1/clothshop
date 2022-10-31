let seeProductButtons = document.getElementsByClassName("see-product-button");
let productPics = document.getElementsByClassName("product-pic");

function addProductPics() {
	for (let index = 0; index < productPics.length; index++) {
		productPics.innerHTML = "";
	}
}

for (let i = 0; i < seeProductButtons.length; i++) {
	seeProductButtons[i].addEventListener("click", function () {
		addProductPics();
	});
}
