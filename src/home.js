export { createHome };

function createHome() {
  const content = document.querySelector("#content");

  const homeHeading = document.createElement("div");
  homeHeading.textContent = "Nata's Market";
  homeHeading.setAttribute("class", "home-heading");

  const homeParagraphs = document.createElement("div");
  const firstPara = document.createElement("p");
  const secondPara = document.createElement("span");
  const paraLink = document.createElement("a");
  firstPara.textContent = "Find anything you can think of here in Nata's Market!";
  secondPara.textContent = "Can't find the item you want? ";
  paraLink.textContent = "Contact Us";
  paraLink.setAttribute("href", "");
  homeParagraphs.appendChild(firstPara);
  homeParagraphs.appendChild(secondPara);
  homeParagraphs.appendChild(paraLink);

  content.appendChild(homeHeading);
  content.appendChild(homeParagraphs);
}