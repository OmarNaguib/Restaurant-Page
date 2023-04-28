import mainPage from "./mainPage";
import homePage from "./homePage";

const pageContent = document.querySelector("#content");
pageContent.appendChild(mainPage());

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

mainContainer.appendChild(homePage());
pageContent.append(mainContainer);
