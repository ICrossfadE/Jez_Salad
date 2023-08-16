import * as flsFunctions from "./modules/functions.js";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

flsFunctions.isWebp();

new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  //Aroows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // simulateTouch: true,
  slidesPerView: 3,

  loop: true,

  spaceBetween: 30,

  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 1,
    },
  },
});

//Header menu
const headerMenu = document.querySelector("#menu-icon");
const headerMenuIcon = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header__container");
const currentClass = document.querySelector(".swiper-pagination-current");
const totalClass = document.querySelector(".swiper-pagination-total");
const buttonNext = document.querySelector(".swiper-button-next");
const buttonPrev = document.querySelector(".swiper-button-prev");

function renderFraction(current, total) {
  const zeroLength = 2;
  const currentText = current.textContent;
  const totalText = total.textContent;

  return (
    (current.textContent = `${currentText.padStart(zeroLength, "0")}`),
    (total.textContent = `${totalText.padStart(zeroLength, "0")}`)
  );
}

renderFraction(currentClass, totalClass);

headerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  navbar.classList.toggle("open");
  headerMenuIcon.classList.toggle("fa-bars");
  headerMenuIcon.classList.toggle("fa-xmark");
});

header.addEventListener("click", (e) => {
  e.preventDefault();
});
navbar.addEventListener("click", (e) => {
  e.preventDefault();
});
buttonNext.addEventListener("click", (e) => {
  e.preventDefault();
  renderFraction(currentClass, totalClass);
});
buttonPrev.addEventListener("click", (e) => {
  e.preventDefault();
  renderFraction(currentClass, totalClass);
});
