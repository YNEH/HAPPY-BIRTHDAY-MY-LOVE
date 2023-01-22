const rightButton = document.querySelector(".colorful-controller.right");
const leftButton = document.querySelector(".colorful-controller.left");
const slides = document.querySelectorAll(".colorful-slide");

let slidesCount = 0;

function MoveRight() {
  rightButton.addEventListener("click", () => {
    if (slidesCount === 2) return;

    ++slidesCount;

    slides.forEach((slide) => {
      slide.style.translate = -slide.clientWidth * slidesCount + "px 0";
    });
  });
}

function MoveLeft() {
  leftButton.addEventListener("click", () => {
    if (slidesCount === 0) return;

    --slidesCount;

    slides.forEach((slide) => {
      slide.style.translate = -slide.clientWidth * slidesCount + "px 0";
    });
  });
}

export default function ColorCarousel() {
  MoveRight();
  MoveLeft();
}
