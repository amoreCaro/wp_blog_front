import { estimateSinglePostReadTime } from "./components/estimateSinglePostReadTime.js";
import { calculateTotalPages } from "./components/calculateTotalPages.js";
import { burgerMenu } from "./components/burgerMenu.js";
import { searchPopup } from "./components/searchPopup.js";

document.addEventListener('DOMContentLoaded', function() {
  console.log("Main js loaded");
  calculateTotalPages();
  burgerMenu();
  searchPopup();
  estimateSinglePostReadTime();
});