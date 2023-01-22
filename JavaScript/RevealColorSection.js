const section = document.querySelector("#colorful-section");
const button = document.querySelector(".pics-button");
const elements = document.querySelectorAll("#colorful-section > *");

function RevealElements() {
  elements.forEach((element) => {
    element.classList.add("reveal-element");
  });
}

export default function RevealColorSection() {
  button.addEventListener("click", () => {
    section.classList.add("reveal");

    setTimeout(() => {
      RevealElements();
    }, 1250);
  });
}
