"use strict";
let productsImages = document.querySelectorAll(".products .img-holder img");
let productsCard1 = document.querySelectorAll(".products .container-75 .holder-1 .row div");
let productsCard2 = document.querySelectorAll(".products .container-75 .holder-2 .row div");
let showMore_1 = document.querySelector(".products .container-75 .holder-1 .show-more");
let showMore_2 = document.querySelector(".products .container-75 .holder-2 .show-more");
let pCards1 = Array.from(productsCard1);
let pCards2 = Array.from(productsCard2);
// showMore_2?.addEventListener("click", () => {
//   pCards2.forEach((e, i) => {
//     let ele = e as HTMLElement;
//     if (i >= showingCards && i < showingCards + 4) {
//       scalingShow(ele);
//     }
//   });
// });
function cardsFlowControl(cards, showMore) {
    let showingCards = cards === null || cards === void 0 ? void 0 : cards.filter((card) => !card.classList.contains("d-none")).length;
    if (cards.length > showingCards) {
        showMore.classList.remove("d-none");
        cards.forEach((ele, index) => {
            if (index > showingCards && index < showingCards + 4) {
                // function scalingShow(ele: HTMLElement) {
                //   ele.style.scale = "0 1";
                //   ele.classList.remove("d-none");
                //   setTimeout(() => {
                //     ele.style.scale = "1 1";
                //   }, 0);
                // }
                // scalingShow(ele);
                ele.classList.remove("d-none");
            }
        });
    }
    else {
        showMore.classList.add("d-none");
    }
}
let cardsList = [Array.from(productsCard1), Array.from(productsCard2)];
let gallery = document.getElementById("gallery");
let selectedImage = document.getElementById("selected-image");
productsCard1.forEach((crd) => {
    let card = crd;
    let cardWidth = card.clientWidth;
    card.style.height = cardWidth + "px";
    card.addEventListener("click", () => {
        let img = card.firstElementChild;
        gallery.classList.remove("d-none");
        gallery.classList.add("d-flex");
        imageContainer.style.maxWidth = imageContainer.clientWidth + "px";
        imageContainer.style.maxHeight = imageContainer.clientHeight + "px";
        imageContainer.style.overflow = "hidden";
        selectedImage.src = img.src;
        let scale = 1;
        let originX = 0;
        let originY = 0;
        selectedImage.addEventListener("wheel", (event) => {
            event.preventDefault();
            scale += event.deltaY * -0.01;
            scale = Math.min(Math.max(1, scale), 3);
            selectedImage.style.transform = `scale(${scale}) translate(${originX}px, ${originY}px)`;
        });
        let isDragging = false;
        let startX, startY;
        selectedImage.addEventListener("mousedown", (event) => {
            isDragging = true;
            startX = event.clientX;
            startY = event.clientY;
            selectedImage.style.cursor = "grabbing";
        });
        selectedImage.addEventListener("mouseup", () => {
            isDragging = false;
            selectedImage.style.cursor = "grab";
        });
        selectedImage.addEventListener("mousemove", (event) => {
            if (isDragging) {
                let dx = (event.clientX - startX) / scale;
                let dy = (event.clientY - startY) / scale;
                originX += dx;
                originY += dy;
                startX = event.clientX;
                startY = event.clientY;
                selectedImage.style.transform = `scale(${scale}) translate(${originX}px, ${originY}px)`;
            }
        });
        fullScreenImage === null || fullScreenImage === void 0 ? void 0 : fullScreenImage.addEventListener("click", () => {
            console.log("fullscreen");
            selectedImage.requestFullscreen();
        });
        zoomInImage === null || zoomInImage === void 0 ? void 0 : zoomInImage.addEventListener("click", () => {
            let currentScale = parseInt(window.getComputedStyle(selectedImage).scale);
            if (currentScale <= 10) {
                selectedImage.style.scale = ` ${currentScale * 2}`;
            }
        });
        zoomOutImage === null || zoomOutImage === void 0 ? void 0 : zoomOutImage.addEventListener("click", () => {
            let currentScale = parseInt(window.getComputedStyle(selectedImage).scale);
            if (currentScale > 1) {
                // selectedImage.style.scale = ` ${currentScale / 2}`;
            }
        });
    });
});
let galleryCloseButton = document.querySelector(".gallery .close-gallery");
galleryCloseButton === null || galleryCloseButton === void 0 ? void 0 : galleryCloseButton.addEventListener("click", () => {
    gallery.classList.remove("d-flex");
    gallery.classList.add("d-none");
});
let imageContainer = document.querySelector(".gallery .image");
let toolsBox = document.querySelector(".gallery .tools");
let fullScreenImage = document.querySelector(".gallery .tools .full-screen");
let zoomInImage = document.querySelector(".gallery .tools .zoom-in");
let zoomOutImage = document.querySelector(".gallery .tools .zoom-out");
cardsList.forEach((crds) => {
    crds.forEach((crd, index) => {
        let card = crd;
        if (index >= 8) {
            card.classList.add("d-none");
        }
    });
});
showMore_1.addEventListener("click", () => {
    cardsFlowControl(pCards1, showMore_1);
});
showMore_2.addEventListener("click", () => {
    cardsFlowControl(pCards2, showMore_2);
});
