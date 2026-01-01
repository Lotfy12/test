const btn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 725) {
    header.classList.add("header--fixed");
  } else {
    header.classList.remove("header--fixed");
  }
});
