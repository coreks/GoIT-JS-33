import "./styles/main.scss";
import template from "./templates/main.hbs";
import data from "./data/data.json";
import { setLocalStarage, getLocalStorage } from "./utils/utils.js";

let tmpUserNameState = "";

window.onload = () => {
  const container = document.getElementById("container");

  getLocalStorage();

  container.innerHTML = template(data);
  const nameInput = document.getElementById("nameInput");
  const saveUser = document.getElementById("saveUser");

  nameInput.addEventListener("input", (e) => {
    tmpUserNameState = e.target.value;
  });

  saveUser.addEventListener("click", () => {
    setLocalStarage(tmpUserNameState);
  });
};
