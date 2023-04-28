function createButton(className, textContent) {
  const button = document.createElement("button");
  button.classList.add(className);
  button.textContent = textContent;
  return button;
}

export default function mainPage() {
  const header = document.createElement("header");

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  buttons.appendChild(createButton("home", "Home"));
  buttons.appendChild(createButton("menu", "Menu"));
  buttons.appendChild(createButton("contact", "Contacts"));

  header.appendChild(buttons);
  return header;
}
