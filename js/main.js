const menuBtn = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".menu-mobile");

menuBtn.onclick = function () {
  menuBtn.classList.toggle("active");

  mobileMenu.classList.toggle("active");
};

const mobileSearch = document.querySelector(".mobile-search");

function toggleMobileSearch() {
  mobileSearch.classList.toggle("active");
}

document
  .querySelector(".search-btn")
  .addEventListener("click", toggleMobileSearch);

document
  .querySelector(".close-mobile-search")
  .addEventListener("click", toggleMobileSearch);
