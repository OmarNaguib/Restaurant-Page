import { createTitle } from "./homePage";

function itemFactory(itemName, itemPrice) {
  const item = document.createElement("div");
  item.classList.add("item");

  const name = document.createElement("p");
  name.classList.add("item-name");
  name.textContent = itemName;

  const price = document.createElement("p");
  price.classList.add("item-price");
  price.textContent = `${itemPrice} L.E`;

  item.appendChild(name);
  item.appendChild(price);

  return item;
}

export default function menuPage() {
  const pageContent = document.createElement("div");
  pageContent.classList.add("menu-page", "page");

  const items = document.createElement("div");
  items.classList.add = "items";

  items.appendChild(itemFactory("Kofta", 25));
  items.appendChild(itemFactory("Mokh", 30));
  items.appendChild(itemFactory("Kebda", 25));
  items.appendChild(itemFactory("Kabab halla", 25));
  items.appendChild(itemFactory("Kabab Shamy", 25));

  pageContent.appendChild(createTitle("Menu items"));
  pageContent.appendChild(items);

  return pageContent;
}
