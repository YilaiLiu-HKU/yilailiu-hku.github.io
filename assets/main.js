const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

if (toggle && header) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});
