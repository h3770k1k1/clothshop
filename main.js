const dot1 = document.getElementById("dot-1");
const dot2 = document.getElementById("dot-2");
const dot3 = document.getElementById("dot-3");
let checkedDot = 1;

const slides = document.getElementById("slides");

const slideImg1 = document.createElement("img");
slideImg1.src = "resources/slide (1).jpg";
slideImg1.classList.add("slide");

const slideImg2 = document.createElement("img");
slideImg2.src = "resources/slide (2).jpg";
slideImg2.classList.add("slide");

const slideImg3 = document.createElement("img");
slideImg3.src = "resources/slide (3).jpg";
slideImg3.classList.add("slide");

function dot2Checking() {
	dot2.classList.add("full-dot");
	dot1.classList.remove("full-dot");
	dot3.classList.remove("full-dot");
	checkedDot = 2;
	slides.innerHTML = "";
	slides.appendChild(slideImg2);
}
function dot3Checking() {
	dot3.classList.add("full-dot");
	dot1.classList.remove("full-dot");
	dot2.classList.remove("full-dot");
	checkedDot = 3;
	slides.innerHTML = "";
	slides.appendChild(slideImg3);
}
function dot1Checking() {
	dot1.classList.add("full-dot");
	dot2.classList.remove("full-dot");
	dot3.classList.remove("full-dot");
	checkedDot = 1;
	slides.innerHTML = "";
	slides.appendChild(slideImg1);
}

dot2.addEventListener("click", function () {
	dot2Checking();
});

dot3.addEventListener("click", function () {
	dot3Checking();
});
dot1.addEventListener("click", function () {
	dot1Checking();
});

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

leftArrow.addEventListener("click", function () {
	if (checkedDot == 2) {
		dot1Checking();
	}
	if (checkedDot == 3) {
		dot2Checking();
	}
});
rightArrow.addEventListener("click", function () {
	if (checkedDot == 2) {
		dot3Checking();
	}
	if (checkedDot == 1) {
		dot2Checking();
	}
});
