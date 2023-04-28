import { createTitle } from "./homePage";

function createPhone() {
  const phone = document.createElement("div");
  phone.classList.add("phone", "block");

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Phone";

  const text = document.createElement("p");
  text.textContent = "+20502785162";

  phone.appendChild(title);
  phone.appendChild(text);

  return phone;
}

export default function contactPage() {
  const pageContent = document.createElement("div");
  pageContent.classList.add("contact", "page");

  pageContent.appendChild(createTitle("Contact us"));
  pageContent.appendChild(createPhone());

  return pageContent;
}
