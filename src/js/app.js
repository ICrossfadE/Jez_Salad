import * as flsFunctions from "./modules/functions.js";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

flsFunctions.isWebp();

new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  slidesPerView: 1,
  spaceBetween: 30,

  //Aroows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  breakpoints: {
    948: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1260: {
      slidesPerView: 2.75,
    },
    1440: {
      slidesPerView: 2,
    },
  },
});

//Header
const headerMenu = document.querySelector("#menu-icon");
const headerMenuIcon = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header__container");

//SLider
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

//First init
renderFraction(currentClass, totalClass);

buttonNext.addEventListener("click", (e) => {
  e.preventDefault();
  renderFraction(currentClass, totalClass);
});
buttonPrev.addEventListener("click", (e) => {
  e.preventDefault();
  renderFraction(currentClass, totalClass);
});

//Buurger menu
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
