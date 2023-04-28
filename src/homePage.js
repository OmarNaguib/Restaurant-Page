export function createTitle(textContent) {
  const title = document.createElement("div");
  title.classList.add("title");
  const titleText = document.createElement("h1");
  titleText.textContent = textContent;
  title.appendChild(titleText);
  return title;
}

function createQuote() {
  const quoteBlock = document.createElement("div");
  quoteBlock.classList.add("quote", "block");

  const text = document.createElement("p");
  text.textContent =
    "Name has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";

  const author = document.createElement("div");
  author.classList.add("author", "title");
  author.textContent = "Author";

  quoteBlock.appendChild(text);
  quoteBlock.appendChild(author);
  return quoteBlock;
}
function createHours() {
  const hours = document.createElement("div");
  hours.classList.add("hours", "block");

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Hours";

  const text = document.createElement("p");
  text.textContent = "Always open";

  hours.appendChild(title);
  hours.appendChild(text);

  return hours;
}

function createLocation() {
  const location = document.createElement("div");
  location.classList.add("location", "block");

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Location";

  const text = document.createElement("p");
  text.textContent = "Belqas, near mazla'an";

  location.appendChild(title);
  location.appendChild(text);

  return location;
}

export default function homePage() {
  const pageContent = document.createElement("div");
  pageContent.classList.add("home", "page", "current");

  pageContent.appendChild(createTitle("The name of us"));
  pageContent.appendChild(createQuote());
  pageContent.appendChild(createHours());
  pageContent.appendChild(createLocation());

  return pageContent;
}
