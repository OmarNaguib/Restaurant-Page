function createButton(id, textContent) {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = textContent;
  if (id === "home") button.classList.add("current");
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
