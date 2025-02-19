document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector(".contact-container");
  // Simple fade in after page load
  setTimeout(() => {
    contactSection.classList.add("fade-in");
  }, 200);
});
