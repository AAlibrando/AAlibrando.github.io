const toggleButton = document.querySelector("#toggle-nav-btn");

toggleButton.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  toggleButton.setAttribute("aria-expanded", String(isOpen));
  toggleButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  toggleButton.textContent = isOpen ? "Close" : "Menu";
});

document.querySelectorAll("#primary-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.setAttribute("aria-label", "Open navigation");
    toggleButton.textContent = "Menu";
  });
});