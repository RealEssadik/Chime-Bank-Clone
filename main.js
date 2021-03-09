const mobileNav = document.querySelector(".mobile-menu-nav");
const mobileNavOpen = document.querySelector(".fa-bars");
const mobileNavClose = document.querySelector(".fa-times");
const bodyEl = document.querySelector("body");

mobileNavOpen.addEventListener("click", () => {
  mobileNav.classList.add("show");
  bodyEl.classList.add("scroll-lock");
});

mobileNavClose.addEventListener("click", () => {
  mobileNav.classList.remove("show");
  bodyEl.classList.remove("scroll-lock");
});
