import "./style.css";
import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";

const restaurant = (function() {
  const homeButton = document.querySelector("#home-btn");
  const menuButton = document.querySelector("#menu-btn");
  const contactButton = document.querySelector("#contact-btn");
  const content = document.querySelector("#content");

  function init() {
    homeButton.setAttribute("class", "selected");
    createHome();
    navFn();
  }

  function clean() {
    homeButton.setAttribute("class", "");
    menuButton.setAttribute("class", "");
    contactButton.setAttribute("class", "");
    
    if (content.firstElementChild) content.removeChild(content.firstElementChild);

    if (content.lastElementChild) content.removeChild(content.lastElementChild);
  }

  function navFn() {
    homeButton.addEventListener("click", homeButtonFn());
    menuButton.addEventListener("click", menuButtonFn());
    contactButton.addEventListener("click", contactButtonFn());
  }

  function homeButtonFn() {
    return function() {
      clean();
      homeButton.setAttribute("class", "selected");
      createHome();
    };
  }

  function menuButtonFn() {
    return function() {
      clean();
      menuButton.setAttribute("class", "selected");
      createMenu();
    }
  }

  function contactButtonFn() {
    return function() {
      clean();
      contactButton.setAttribute("class", "selected");
      createContact();
    }
  }

  return {init};

})();

restaurant.init();