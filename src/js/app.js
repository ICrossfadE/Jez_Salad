import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const headerMenu = document.querySelector("#menu-icon");
const headerMenuIcon = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header__container");
// const taskButton = document.querySelectorAll(".task-button");

// console.log(taskButton);

// taskButton.addEventListener("mouseenter", (e) => {
//   console.log("enter");
// });

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
