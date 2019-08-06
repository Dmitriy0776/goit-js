import menuJson from "./menu.json";
import menuItemTemlate from "./temlate.hbs";
import "./styles.css";

const restMenu = document.querySelector(".menu");
const body = document.querySelector(".body");
const switchInput = document.querySelector(".switch__input");

function buildRestaurantMenu(menuJson) {
  const markup = menuJson.map(el => menuItemTemlate(el)).join("");

  restMenu.insertAdjacentHTML("beforeend", markup);
}

buildRestaurantMenu(menuJson);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme"
};

if (localStorage.getItem("theme") === Theme.DARK) {
  document.body.classList.toggle(Theme.DARK);
  switchInput.checked = true;
}
switchInput.addEventListener("change", function(e) {
  if (!document.body.classList.contains(Theme.DARK)) {
    document.body.classList.add(Theme.DARK);
    localStorage.setItem("theme", Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem("theme", Theme.LIGHT);
  }
});
