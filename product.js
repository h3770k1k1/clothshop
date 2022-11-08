const sizeChars = document.getElementsByClassName("avaible");
const activeChars = document.querySelectorAll(".avaible");

for (let index = 0; index < sizeChars.length; index++) {
	$(sizeChars[index]).click(function () {
		if ($(this).hasClass("choosen")) {
			$(this).removeClass("choosen");
		} else {
			activeChars.forEach((char) => {
				char.classList.remove("choosen");
			});
			$(this).addClass("choosen");
		}
	});
}

$("#add-button").click(function () {
	$("#close-button").removeClass("non-visible");
	$("#pop-up").addClass("visible-pop-up");
});

$("#close-button").click(function () {
	$("#pop-up").removeClass("visible-pop-up");
	$("#close-button").addClass("non-visible");
});

item = JSON.parse(sessionStorage.item);
document.getElementById("product-name").innerText = item.name;
