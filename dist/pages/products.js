"use strict";
let products = Array.from(document.querySelectorAll(".product"));
let imageContainer = document.querySelector(".gallery .image");
let toolsBox = document.querySelector(".gallery .tools");
let fullScreenImage = document.querySelector(".gallery .tools .full-screen");
let zoomInImage = document.querySelector(".gallery .tools .zoom-in");
let zoomOutImage = document.querySelector(".gallery .tools .zoom-out");
let closeGallery = document.querySelector(".gallery .tools .close");
let share = document.querySelector(".gallery .tools .share");
let whatsappShare = document.querySelector(".gallery .tools .whatsapp");
products.forEach((ele, index) => {
    let prod = ele;
    let showMore = document.querySelector(`${prod.dataset.showmore}`);
    let showLimit = 4;
    let productsHolder = Array.from(document.querySelectorAll(`.holder-${index + 1} .row > div`));
    showMore === null || showMore === void 0 ? void 0 : showMore.addEventListener("click", () => {
        let productsHolder = Array.from(document.querySelectorAll(`.holder-${index + 1} .row > div`));
        let startShowingCards = Array.from(productsHolder).filter((crd) => {
            let card = crd;
            return !card.classList.contains("d-none");
        }).length;
        if (startShowingCards < productsHolder.length) {
            productsHolder.forEach((e, i) => {
                if (i >= startShowingCards && i < startShowingCards + showLimit) {
                    scalingShow(e);
                    if (startShowingCards + showLimit >= productsHolder.length)
                        showMore === null || showMore === void 0 ? void 0 : showMore.classList.add("d-none");
                }
            });
        }
        else {
            showMore === null || showMore === void 0 ? void 0 : showMore.classList.add("d-none");
        }
        let endShowingCards = Array.from(productsHolder).filter((crd) => {
            let card = crd;
            return !card.classList.contains("d-none");
        }).length;
        let sizeLabel = document.querySelector(`${prod.dataset.sizelabel}`);
        if (sizeLabel) {
            sizeLabel.innerHTML =
                `${endShowingCards} Of ${productsHolder.length}` || "0 Items ";
        }
    });
    productsHolder.forEach((card, index) => {
        if (index >= 8) {
            card.classList.add("d-none");
        }
    });
    let sizeLabel = document.querySelector(`${prod.dataset.sizelabel}`);
    if (sizeLabel) {
        sizeLabel.innerHTML =
            ` All Items Is : ${productsHolder.length}` || "0 Items ";
    }
    productsHolder.forEach((card) => {
        card.addEventListener("click", () => {
            gallery.classList.remove("d-none");
            gallery.classList.add("d-flex");
            let clickedImage = card.children[0];
            if (clickedImage.tagName == "IMG")
                selectedImage.src = clickedImage.src;
        });
        // sh?.addEventListener("click",()=>{})
    });
});
let productsImages = document.querySelectorAll(".products .img-holder img");
let gallery = document.getElementById("gallery");
let selectedImage = document.getElementById("selected-image");
let galleryCloseButton = document.querySelector(".gallery .close-gallery");
galleryCloseButton === null || galleryCloseButton === void 0 ? void 0 : galleryCloseButton.addEventListener("click", () => {
    gallery.classList.remove("d-flex");
    gallery.classList.add("d-none");
    document.exitFullscreen();
});
fullScreenImage === null || fullScreenImage === void 0 ? void 0 : fullScreenImage.addEventListener("click", () => {
    if (fullScreenImage.dataset.fullscreen == "true") {
        fullScreenImage.dataset.fullscreen = "false";
        fullScreenImage.innerHTML = `<i class="fa-solid fa-expand"></i>`;
        document.exitFullscreen();
    }
    else {
        fullScreenImage.dataset.fullscreen = "true";
        gallery.requestFullscreen();
        fullScreenImage.innerHTML = `<i class="fa-solid fa-compress"></i>`;
    }
});
zoomInImage === null || zoomInImage === void 0 ? void 0 : zoomInImage.addEventListener("click", () => { });
zoomOutImage === null || zoomOutImage === void 0 ? void 0 : zoomOutImage.addEventListener("click", () => { });
function scalingShow(ele) {
    ele.style.scale = "0 1";
    ele.classList.remove("d-none");
    setTimeout(() => {
        ele.style.scale = "1 1";
    }, 0);
}
// window.addEventListener("scroll", () => {
//   let scrollY = window.scrollY;
//   let offsetTop = title.offsetTop;
//   if (scrollY >= offsetTop && scrollY < offsetTop.parent.clientHeight) {
//     title.classList.add("position-fixed");
//   }
// });
// card.addEventListener("click", () => {
//   let img = card.firstElementChild as HTMLImageElement;
//   gallery.classList.remove("d-none");
//   gallery.classList.add("d-flex");
//   imageContainer.style.maxWidth = "75%";
//   // imageContainer.style.maxHeight = imageContainer.clientHeight + "px";
//   imageContainer.style.overflow = "hidden";
//   selectedImage.src = img.src;
//   let scale = 1;
//   let originX = 0;
//   let originY = 0;
//   selectedImage.addEventListener("wheel", (event) => {
//     event.preventDefault();
//     scale += event.deltaY * -0.01;
//     scale = Math.min(Math.max(1, scale), 3);
//     selectedImage.style.transform = `scale(${scale}) translate(${originX}px, ${originY}px)`;
//   });
//   let isDragging = false;
//   let startX: number, startY: number;
//   selectedImage.addEventListener("mousedown", (event) => {
//     isDragging = true;
//     startX = event.clientX;
//     startY = event.clientY;
//     selectedImage.style.cursor = "grabbing";
//   });
//   selectedImage.addEventListener("mouseup", () => {
//     isDragging = false;
//     selectedImage.style.cursor = "grab";
//   });
//   selectedImage.addEventListener("mousemove", (event) => {
//     if (isDragging) {
//       let dx = (event.clientX - startX) / scale;
//       let dy = (event.clientY - startY) / scale;
//       originX += dx;
//       originY += dy;
//       startX = event.clientX;
//       startY = event.clientY;
//       selectedImage.style.transform = `scale(${scale}) translate(${originX}px, ${originY}px)`;
//     }
//   });
//   fullScreenImage?.addEventListener("click", () => {
//     console.log("fullscreen");
//     gallery.requestFullscreen();
//     selectedImage.style.maxWidth = "90%";
//   });
//   zoomInImage?.addEventListener("click", () => {
//     let currentScale = parseInt(window.getComputedStyle(selectedImage).scale);
//     if (currentScale <= 10) {
//       selectedImage.style.scale = ` ${currentScale * 2}`;
//     }
//   });
//   zoomOutImage?.addEventListener("click", () => {
//     let currentScale = parseInt(window.getComputedStyle(selectedImage).scale);
//     if (currentScale > 1) {
//       // selectedImage.style.scale = ` ${currentScale / 2}`;
//     }
//   });
// });
