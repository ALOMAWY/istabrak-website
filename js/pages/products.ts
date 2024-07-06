let productsImages = document.querySelectorAll(".products .img-holder img");

let productsCard1 = document.querySelectorAll(
  ".products .container-75 .holder-1 .row div"
);
let productsCard2 = document.querySelectorAll(
  ".products .container-75 .holder-2 .row div"
);

let showMore_1 = document.querySelector(
  ".products .container-75 .holder-1 .show-more"
) as HTMLElement;
let showMore_2 = document.querySelector(
  ".products .container-75 .holder-2 .show-more"
) as HTMLElement;

let pCards1 = Array.from(productsCard1);
let pCards2 = Array.from(productsCard2);

let productsSizeButtons = document.querySelectorAll(".products-size");

productsSizeButtons.forEach((e) => {
  let ele = e as HTMLElement;
  let productsParent = document.querySelector(ele.dataset.size || "");

  ele.innerHTML = `${productsParent?.children.length} All Items` || "0 Items ";
});

function cardsFlowControl(cards: Element[], showMore: HTMLElement): void {
  let startShowingCards = cards?.filter(
    (card: Element) => !card.classList.contains("d-none")
  ).length;

  let scaleElementNumber: number = startShowingCards + 4;

  if (cards.length > startShowingCards) {
    showMore.classList.remove("d-none");

    cards.forEach((elem, index: number) => {
      if (index >= startShowingCards && index < scaleElementNumber) {
        function scalingShow(ele: HTMLElement) {
          ele.style.scale = "0 1";
          ele.classList.remove("d-none");
          setTimeout(() => {
            ele.style.scale = "1 1";
          }, 0);
        }
        scalingShow(elem as HTMLElement);
      }

      if (scaleElementNumber >= cards.length) {
        showMore.classList.add("d-none");
      }
    });
  } else {
    showMore.classList.add("d-none");
  }
  let endShowingCards = cards?.filter(
    (card: Element) => !card.classList.contains("d-none")
  ).length;

  productsSizeButtons.forEach((e) => {
    let ele = e as HTMLElement;
    let productsParent = document.querySelector(ele.dataset.size || "");

    ele.innerHTML =
      `${endShowingCards} Of ${productsParent?.children.length}` || "0 Items ";
  });
}

let cardsList = [Array.from(productsCard1), Array.from(productsCard2)];

let gallery = document.getElementById("gallery") as HTMLElement;

let selectedImage = document.getElementById(
  "selected-image"
) as HTMLImageElement;

[...pCards1, ...pCards2].forEach((crd) => {
  let card = crd as HTMLElement;

  let cardWidth = card.clientWidth;

  card.style.height = cardWidth + "px";

  card.addEventListener("click", () => {
    let img = card.firstElementChild as HTMLImageElement;

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
    let startX: number, startY: number;

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

    fullScreenImage?.addEventListener("click", () => {
      console.log("fullscreen");
      gallery.requestFullscreen();
      selectedImage.style.maxWidth = "90%";
    });

    zoomInImage?.addEventListener("click", () => {
      let currentScale = parseInt(window.getComputedStyle(selectedImage).scale);

      if (currentScale <= 10) {
        selectedImage.style.scale = ` ${currentScale * 2}`;
      }
    });

    zoomOutImage?.addEventListener("click", () => {
      let currentScale = parseInt(window.getComputedStyle(selectedImage).scale);

      if (currentScale > 1) {
        // selectedImage.style.scale = ` ${currentScale / 2}`;
      }
    });
  });
});

let galleryCloseButton = document.querySelector(".gallery .close-gallery");

galleryCloseButton?.addEventListener("click", () => {
  gallery.classList.remove("d-flex");
  gallery.classList.add("d-none");
});

let imageContainer = document.querySelector(".gallery .image") as HTMLElement;

let toolsBox = document.querySelector(".gallery .tools");

let fullScreenImage = document.querySelector(".gallery .tools .full-screen");

let zoomInImage = document.querySelector(".gallery .tools .zoom-in");

let zoomOutImage = document.querySelector(".gallery .tools .zoom-out");

cardsList.forEach((crds) => {
  crds.forEach((crd, index) => {
    let card = crd as HTMLElement;

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
