let menuShowButton = document.getElementById("menu-btn");

let menuList = document.querySelector(".landing-screen .menu-area");

let menuCloseButton = document.querySelector(
  ".landing-screen .menu-area .close-menu"
);

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

HTMLElement.prototype.getElementStyle = function (property) {
  return window.getComputedStyle(this)[property];
};

let screenText = document.querySelector(
  ".landing-screen .widgets-layer .container .row .text-area"
);

window.addEventListener("scroll", () => {
  screenText.classList.add("position-relative");
  screenText.classList.add("z-1");

  let scrollSize = scrollY;

  if (scrollSize <= 800) screenText.style.top = scrollSize + "px";
});
