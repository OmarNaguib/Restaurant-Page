import mainPage from "./header";
import homePage from "./homePage";
import menuPage from "./menuPage";
import contactPage from "./contact";

const pageContent = document.querySelector("#content");
pageContent.appendChild(mainPage());

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

mainContainer.appendChild(homePage());
mainContainer.appendChild(menuPage());
mainContainer.appendChild(contactPage());
pageContent.append(mainContainer);
