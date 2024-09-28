export { createContact };

function createContact() {
  const content = document.querySelector("#content");
  
  const contactHeading = document.createElement("div");
  contactHeading.textContent = "Contact Us";
  contactHeading.setAttribute("class", "contact-heading");

  const contactParagraphs = document.createElement("div");
  const firstPara = document.createElement("p");
  firstPara.textContent = "Can't find the things you're buying?";
  const secondPara = document.createElement("p");
  secondPara.textContent = "Contact: (555-002-168) Administrator.";
  contactParagraphs.appendChild(firstPara);
  contactParagraphs.appendChild(secondPara);

  content.appendChild(contactHeading);
  content.appendChild(contactParagraphs);
}