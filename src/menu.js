export { createMenu };

function createMenu() {
  const content = document.querySelector("#content");
  
  const menuHeading = document.createElement("div");
  menuHeading.textContent = "What's Available?";
  menuHeading.setAttribute("class", "menu-heading");

  const para = document.createElement("p");
  para.textContent = "Everything you can think of.";

  content.appendChild(menuHeading);
  content.appendChild(para);
}