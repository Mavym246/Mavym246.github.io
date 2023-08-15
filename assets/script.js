const buttons = document.querySelectorAll("[data-carousel-button]");
const slides = document.querySelector("[data-slides]");
const slideWidth = slides.querySelector(".slide").clientWidth;
let currentIndex = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.dataset.carouselButton === "prev") {
      currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
    } else {
      currentIndex = (currentIndex + 1) % slides.children.length;
    }
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  });
});
