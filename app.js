const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const typed = new Typed(".multiple-text", {
  strings: ["hey, i'm arvind"],
  typeSpeed: 100,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

