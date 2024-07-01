"use strict";
let productsImages = document.querySelectorAll(".products .img-holder img");
let productsCard1 = document.querySelectorAll(".products .container-75 .holder-1 .row div");
let productsCard2 = document.querySelectorAll(".products .container-75 .holder-2 .row div");
let showMore_1 = document.querySelector(".products .container-75 .holder-1 .show-more");
let showMore_2 = document.querySelector(".products .container-75 .holder-2 .show-more");
let pCards1 = Array.from(productsCard1);
let pCards2 = Array.from(productsCard2);
showMore_2 === null || showMore_2 === void 0 ? void 0 : showMore_2.addEventListener("click", () => {
    let showingCards = pCards2.filter((card) => !card.classList.contains("d-none")).length;
    if (showingCards < pCards2.length) {
        pCards2.forEach((e, i) => {
            let ele = e;
            if (i >= showingCards && i < showingCards + 4) {
                scalingShow(ele);
            }
        });
    }
    else {
        showMore_2.innerHTML = "";
    }
    console.log(showingCards);
});
let cardsList = [Array.from(productsCard1), Array.from(productsCard2)];
let gallery = document.getElementById("gallery");
let selectedImage = document.getElementById("selected-image");
cardsList.forEach((crds, index) => {
    crds.forEach((crd, index) => {
        let card = crd;
        if (index >= 8) {
            card.classList.add("d-none");
        }
    });
});
function scalingShow(ele) {
    ele.style.scale = "0 1";
    ele.classList.remove("d-none");
    setTimeout(() => {
        ele.style.scale = "1 1";
    }, 0);
}
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
        // let originX: number = 0;
        // let originY: number = 0;
        // let isDragging: boolean = false;
        // let startX: number;
        // let startY: number;
        // let scale: number = 1;
        // selectedImage.addEventListener("wheel", (e) => {
        //   // e.preventDefault();
        //   console.log(e);
        //   console.log(isDragging);
        //   scale += e.deltaY * -0.1;
        //   scale = Math.min(Math.max(scale, 1), 3);
        //   console.log(scale);
        //   selectedImage.style.transform = `scale(${scale}) translate(${originX}px ,${originY}px)`;
        // });
        // selectedImage.addEventListener("mousemove", (e) => {
        //   console.log("Moving");
        //   // if (isDragging) {
        //   let dx = (e.clientX - startX) / scale;
        //   let dy = (e.clientY - startY) / scale;
        //   console.log(e.clientX, "cx");
        //   console.log(e.clientY, "cy");
        //   console.log(startX, "sx");
        //   console.log(startY, "ss");
        //   console.log(scale, "skx");
        //   console.log(scale, "sky");
        //   originX += dx;
        //   originY += dy;
        //   console.log(originX, dx);
        //   console.log(originY, dy);
        //   startX = e.clientX;
        //   startY = e.clientY;
        //   selectedImage.style.transform = ` scale(${scale}) translate(${originX}px ,${originY}px)`;
        //   // }
        // });
        // selectedImage.addEventListener("mousedown", (e) => {
        //   isDragging = true;
        //   selectedImage.style.cursor = "grabbing";
        // });
        // selectedImage.addEventListener("mouseup", (e) => {
        //   isDragging = false;
        //   selectedImage.style.cursor = "grab";
        // });
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
