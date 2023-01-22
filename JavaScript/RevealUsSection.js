const section = document.querySelector("#us-section");
const button = document.querySelector(".colorful-button");
const elements = document.querySelectorAll("#us-section > *");

function RevealElements() {
  elements.forEach((element) => {
    element.classList.add("reveal-element");
  });
}

export default function RevealUsSection() {
  button.addEventListener("click", () => {
    section.classList.add("reveal");

    setTimeout(() => {
      RevealElements();
    }, 1250);
  });
}
