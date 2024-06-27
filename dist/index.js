"use strict";
// Start Landing
let menuShowButton = document.getElementById("menu-btn");
let menuList = (document.querySelector(".landing-screen .menu-area"));
let menuCloseButton = (document.querySelector(".landing-screen .menu-area .close-menu"));
let navBar = document.querySelector(".landing-screen header nav");
menuShowButton.addEventListener("click", (e) => {
    menuList.classList.remove("d-none");
    setTimeout(() => {
        menuList.style.opacity = "0.99";
    }, 0);
});
menuCloseButton.addEventListener("click", (e) => {
    menuList.style.opacity = "0";
    setTimeout(() => {
        menuList.classList.add("d-none");
    }, 300);
});
let screenText = (document.querySelector(".landing-screen .widgets-layer .container-75 .row .text-area"));
console.log(screenText);
window.addEventListener("scroll", () => {
    screenText === null || screenText === void 0 ? void 0 : screenText.classList.add("position-relative");
    screenText === null || screenText === void 0 ? void 0 : screenText.classList.add("z-1");
    let scrollSize = scrollY;
    if (scrollSize <= 800 && document.documentElement.clientWidth > 768)
        screenText.style.top = scrollSize + "px";
});
// End Landing
// Start Customers Talk
const testimonials = [
    {
        imageSrc: "assets/images/testimonials.jpg",
        comment: `”The mati I bought for my
              daughter is designed with
              quality materials that
              protect her against the
              risk of allergy “`,
        personLogoSrc: "assets/images/user.png",
        personFirstName: "Ali",
        personLastName: "Sa3d",
    },
    {
        imageSrc: "assets/images/testimonials1.jpg",
        comment: `”I love the design and
              quality of the products.
              They are perfect for my
              sensitive skin.“`,
        personLogoSrc: "assets/images/user.png",
        personFirstName: "Hana",
        personLastName: "Ahmed",
    },
    {
        imageSrc: "assets/images/testimonials2.jpg",
        comment: `”The customer service was
              excellent and the product
              exceeded my expectations.“`,
        personLogoSrc: "assets/images/user.png",
        personFirstName: "Omar",
        personLastName: "Khan",
    },
    {
        imageSrc: "assets/images/testimonials3.jpg",
        comment: `”Highly recommend to anyone
              looking for quality and
              durability. Absolutely worth
              every penny.“`,
        personLogoSrc: "assets/images/user.png",
        personFirstName: "Lina",
        personLastName: "Hussein",
    },
    {
        imageSrc: "assets/images/testimonials4.jpg",
        comment: `”A great experience overall.
              The product is top-notch and
              delivery was quick and easy.“`,
        personLogoSrc: "assets/images/user.png",
        personFirstName: "Zaid",
        personLastName: "Salim",
    },
];
let prevButton = document.getElementById("gallery-prev-button");
let nextButton = document.getElementById("gallery-next-button");
let tracker = 0;
prevButton.addEventListener("click", () => {
    tracker == 0 ? (tracker = testimonials.length - 1) : tracker--;
    setContentInsertHTML(tracker);
});
nextButton.addEventListener("click", () => {
    tracker == testimonials.length - 1 ? (tracker = 0) : tracker++;
    setContentInsertHTML(tracker);
});
function setContentInsertHTML(tracker) {
    let image = (document.querySelector(".gallery-site .content-holder img"));
    image.src = testimonials[tracker].imageSrc;
    let comment = (document.querySelector(".gallery-site .content-holder blockquote"));
    comment.innerHTML = testimonials[tracker].comment;
    let personImage = (document.querySelector(".gallery-site .content-holder .person .person-logo img"));
    personImage.src = testimonials[tracker].personLogoSrc;
    let personFirstName = (document.querySelector(".gallery-site .content-holder .person .name .first-name"));
    personFirstName.innerHTML = testimonials[tracker].personFirstName;
    let personLastName = (document.querySelector(".gallery-site .content-holder .person .name .last-name"));
    personLastName.innerHTML = testimonials[tracker].personLastName;
}
// End Customers Talk
// Start Product
/// - - - - - - - - - - - - - -
// End Product
// // Start Footer
const showProducts = (document.querySelector("footer div ul li.show-products"));
showProducts.addEventListener("click", () => {
    let products = (document.querySelector("footer div ul li.show-products ul"));
    products.classList.toggle("d-none");
});
HTMLElement.prototype.getElementStyle = function (property) {
    return window.getComputedStyle(this).getPropertyValue(property);
};
console.log(document.body.getElementStyle("width"));
// Methods And Functions
