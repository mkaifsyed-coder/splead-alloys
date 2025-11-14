// Simple fade-in animation on scroll
const elements = document.querySelectorAll("section");

const appear = () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", appear);
appear();
