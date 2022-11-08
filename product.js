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
