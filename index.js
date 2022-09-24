// Select the header that is the closest to the first h1 heading. Give the header a solid border of 5px.
let heading = document.querySelector("h1");
let header = heading.closest("header");

header.style.border = "5px solid cyan";

// If the .info section contains an .info-package, select all package-titles and give the title's previous element a border.
const innerSection = document.querySelectorAll(".package-title");

innerSection.forEach(
  (child) => (child.previousElementSibling.style.border = "5px solid hotpink")
);

// Check if the label's class matches "mild". If so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border.
const label = document.querySelectorAll("label");

label.forEach((child) => {
  if (child.matches(".mild")) {
    child.style.border = "2px solid yellow";
  } else if (child.matches(".intense")) {
    child.style.border = "2px solid orange";
  } else {
    child.style.border = "2px solid red";
  }
});

// Add all the children of the .nav-list to the footer's unordered list, .site-map. Note: the .nav-list should still contain its children.
const navList = document.querySelector(".nav-list");
const siteMap = document.querySelector(".site-map");
const listItems = navList.children;

for (let i = 0; i < listItems.length; i++) {
  const item = document.createElement("li");
  item.innerText = listItems[i].innerText;
  siteMap.appendChild(item);
}
