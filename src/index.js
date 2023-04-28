import mainPage from "./header";
import homePage from "./homePage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";
import "./style.css";

const pageContent = document.querySelector("#content");
pageContent.appendChild(mainPage());

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

mainContainer.appendChild(homePage());
mainContainer.appendChild(menuPage());
mainContainer.appendChild(contactPage());
pageContent.append(mainContainer);

const buttons = document.querySelectorAll("header button");
const pages = document.querySelectorAll(".page");

function changePage(e) {
  buttons.forEach((button) => {
    button.classList.remove("current");
    if (button.id === e.target.id) button.classList.add("current");
  });
  pages.forEach((page) => {
    page.classList.remove("current");
    if (page.classList[0] === e.target.id) page.classList.add("current");
  });
}
buttons.forEach((button) => button.addEventListener("click", changePage));
