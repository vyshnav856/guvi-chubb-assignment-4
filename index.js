// Submitted by: Vyshnav R
// Email: vyshnavr856@gmail.com
// Submission date: 02 October 2024

const images = ["./assets/image-product-1.jpg", "./assets/image-product-2.jpg", "./assets/image-product-3.jpg", "./assets/image-product-4.jpg"];

let currentImageNumber = 0;
let currentThumbNumber = 0;

const thumbOne = document.querySelector(".img-thumb-1");
const thumbTwo = document.querySelector(".img-thumb-2");
const thumbThree = document.querySelector(".img-thumb-3");
const thumbFour = document.querySelector(".img-thumb-4");
const thumbs = [thumbOne, thumbTwo, thumbThree, thumbFour];

const mainImage = document.querySelector(".main-img");
const nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", (e) => {
	currentImageNumber = (currentImageNumber + 1) % images.length;
	updateMainImage(currentImageNumber);
});

const prevButton = document.querySelector(".prev-button");
prevButton.addEventListener("click", (e) => {
	currentImageNumber -= 1;
	if (currentImageNumber < 0)
		currentImageNumber = images.length - 1;

	updateMainImage(currentImageNumber);
});

function updateMainImage(newImageNumber) {
	currentImageNumber = newImageNumber;
	mainImage.src = images[newImageNumber];
	thumbs[currentThumbNumber].classList.remove("selected");
	currentThumbNumber = newImageNumber;
	thumbs[currentThumbNumber].classList.add("selected");
}

const imageThumbs = document.querySelectorAll(".img-thumb");
imageThumbs.forEach(imageThumb => {
	imageThumb.addEventListener("click", (e) => {
		const thumbID = e.target.id;
		const newImageNumber = Number(thumbID.charAt(thumbID.length - 1));
		updateMainImage(newImageNumber);
	})
});

let quantity = 0;
const quantityPlus = document.querySelector(".quantity-plus");
quantityPlus.addEventListener("click", (e) => {
	quantity++;
	updateQuantityValue(quantity);
});

const quantityMinus = document.querySelector(".quantity-minus");
quantityMinus.addEventListener("click", (e) => {
	if (quantity != 0) {
		quantity--;
		updateQuantityValue(quantity);
	}
});

function updateQuantityValue(newQuantity) {
	const quantityValue = document.querySelector(".quantity-number");
	quantityValue.textContent = newQuantity;
}

let cartQuantity = 0;
let cartValue = 0;
const addCartButton = document.querySelector(".add-to-cart-button");
addCartButton.addEventListener("click", (e) => {
	cartQuantity += quantity;
	quantity = 0;
	updateQuantityValue(quantity);
	updateCartDisplay(cartQuantity, cartQuantity * 125);
});

function updateCartDisplay(newCartQuantity, newCartValue) {
	const cartContainer = document.querySelector(".cart-product-container");
	const cartButton = document.querySelector(".checkout-button");
	const cartText = document.querySelector(".cart-default-text");
	const cartMainContainer = document.querySelector(".cart-container");
	const cartNumber = document.querySelector(".cart-icon-number");

	if (newCartQuantity == 0) {
		cartContainer.style.display = "none";
		cartButton.style.display = "none";
		cartText.style.display = "block";
		cartMainContainer.style.height = "16rem";
		cartNumber.style.display = "none";
	}

	else {
		cartContainer.style.display = "flex";
		cartButton.style.display = "block";
		cartText.style.display = "none";
		cartMainContainer.style.height = "auto";
		cartNumber.style.display = "flex";
		cartNumber.textContent = newCartQuantity;

		const cartQuantityElement = document.querySelector(".total-quantity");
		const cartPriceElement = document.querySelector(".total-price");
		cartQuantityElement.textContent = newCartQuantity;
		cartPriceElement.textContent = "$" + String(newCartValue) + ".00";
	}
}

updateCartDisplay(0, 0);

const cartDeleteButton = document.querySelector(".delete-icon");
cartDeleteButton.addEventListener("click", (e) => {
	cartQuantity = 0;
	cartValue = 0;
	updateCartDisplay(0, 0);
});

const cartOut = document.querySelector(".cart-nav-out");
cartOut.addEventListener("click", (e) => {
	const cartMainContainer = document.querySelector(".cart-container");
	cartMainContainer.style.display = "none";
	cartOut.style.display = "none";
});

const cartButton = document.querySelector(".cart-icon");
cartButton.addEventListener("click", (e) => {
	const cartMainContainer = document.querySelector(".cart-container");
	cartMainContainer.style.display = "flex";
	cartOut.style.display = "block";
});

const cartWrapper = document.querySelector(".cart-wrapper");
cartWrapper.addEventListener("mouseover", (e) => {
	const cartMainContainer = document.querySelector(".cart-container");
	cartMainContainer.style.display = "flex";
	cartOut.style.display = "block";
});

cartWrapper.addEventListener("click", (e) => {
	const cartMainContainer = document.querySelector(".cart-container");
	cartMainContainer.style.display = "flex";
	cartOut.style.display = "block";
});

cartButton.addEventListener("mouseout", (e) => {
	const cartMainContainer = document.querySelector(".cart-container");
	cartMainContainer.style.display = "none";
	cartOut.style.display = "none";
});

cartWrapper.addEventListener("mouseout", (e) => {
	const cartMainContainer = document.querySelector(".cart-container");
	cartMainContainer.style.display = "none";
	cartOut.style.display = "none";
});

const mainImageClick = document.querySelector(".main-img-click");
mainImageClick.addEventListener("click", (e) => {
	if (window.innerWidth > 949) {
		const lightboxContainer = document.querySelector(".lightbox-container");
		lightboxContainer.style.display = "flex";
	}
});

const lightboxCloseButton = document.querySelector(".lightbox-close");
lightboxCloseButton.addEventListener("mouseenter", (e) => {
	e.target.src = "./assets/icon-close-orange.svg";
});

lightboxCloseButton.addEventListener("mouseout", (e) => {
	e.target.src = "./assets/icon-close.svg";
});

lightboxCloseButton.addEventListener("click", (e) => {
	const lightboxContainer = document.querySelector(".lightbox-container");
	lightboxContainer.style.display = "none";
});

const prevButtons = document.querySelectorAll(".prev-all");
prevButtons.forEach((element) => {
	element.addEventListener("mouseover", (e) => {
		e.target.src = "./assets/icon-previous-orange.svg";
	})
});

prevButtons.forEach((element) => {
	element.addEventListener("mouseout", (e) => {
		e.target.src = "./assets/icon-previous.svg";
	})
});

const nextButtons = document.querySelectorAll(".next-all");
nextButtons.forEach((element) => {
	element.addEventListener("mouseover", (e) => {
		e.target.src = "./assets/icon-next-orange.svg";
	})
});

nextButtons.forEach((element) => {
	element.addEventListener("mouseout", (e) => {
		e.target.src = "./assets/icon-next.svg";
	})
});

let currentImageNumberLightbox = 0;
let currentThumbNumberLightbox = 0;

const thumbOneLightbox = document.querySelector(".img-thumb-1-lightbox");
const thumbTwoLightbox = document.querySelector(".img-thumb-2-lightbox");
const thumbThreeLightbox = document.querySelector(".img-thumb-3-lightbox");
const thumbFourLightbox = document.querySelector(".img-thumb-4-lightbox");
const thumbsLightbox = [thumbOneLightbox, thumbTwoLightbox, thumbThreeLightbox, thumbFourLightbox];

const mainImageLightbox = document.querySelector(".main-img-lightbox");
const nextButtonLightbox = document.querySelector(".next-button-lightbox");
nextButtonLightbox.addEventListener("click", (e) => {
	currentImageNumberLightbox = (currentImageNumberLightbox + 1) % images.length;
	updateMainImageLightbox(currentImageNumberLightbox);
})

const prevButtonLightbox = document.querySelector(".prev-button-lightbox");
prevButtonLightbox.addEventListener("click", (e) => {
	currentImageNumberLightbox -= 1;
	if (currentImageNumberLightbox < 0)
		currentImageNumberLightbox = images.length - 1;

	updateMainImageLightbox(currentImageNumberLightbox);
})

function updateMainImageLightbox(newImageNumber) {
	currentImageNumberLightbox = newImageNumber;
	mainImageLightbox.src = images[newImageNumber];
	thumbsLightbox[currentThumbNumberLightbox].classList.remove("selected");
	currentThumbNumberLightbox = newImageNumber;
	thumbsLightbox[currentThumbNumberLightbox].classList.add("selected");
}

const imageThumbsLightbox = document.querySelectorAll(".img-thumb-lightbox");
imageThumbsLightbox.forEach(imageThumb => {
	imageThumb.addEventListener("click", (e) => {
		const thumbID = e.target.id;
		const newImageNumber = Number(thumbID.charAt(thumbID.length - 1));
		updateMainImageLightbox(newImageNumber);
	})
});

const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", (e) => {
	const mobileNav = document.querySelector(".mobile-nav");
	mobileNav.style.display = "block";
})

const mobileClose = document.querySelector(".mobile-close");
mobileClose.addEventListener("click", (e) => {
	const mobileNav = document.querySelector(".mobile-nav");
	mobileNav.style.display = "none";
})