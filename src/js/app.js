import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const headerMenu = document.querySelector("#menu-icon");
const headerMenuIcon = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar");

console.log(headerMenuIcon);

headerMenu.addEventListener("click", (e) => {
  navbar.classList.toggle("open");
  headerMenuIcon.classList.toggle("fa-bars");
  headerMenuIcon.classList.toggle("fa-xmark");
});
