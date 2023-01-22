const elements = document.querySelectorAll("#pics-section > *");
const section = document.querySelector("#pics-section");
const button = document.querySelector(".card-button");

function RevealElements() {
  elements.forEach((element) => {
    element.classList.add("reveal-element");
  });
}

export default function RevealPicSection() {
  button.addEventListener("click", () => {
    section.classList.add("reveal");

    setTimeout(() => {
      RevealElements();
    }, 1250);
  });
}
