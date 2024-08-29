/* eslint-disable */
import "bootstrap";
import "./style.css";

const ul = document.querySelector("#list");
const button = document.querySelector("#button");
const input = document.querySelector("#input");

button.addEventListener("click", () => {
  const newLi = document.createElement("li");

  newLi.innerHTML = `${input.value} <i class="bi bi-trash3-fill"></i>`;
  newLi.classList = "liRow";

  ul.appendChild(newLi);

  input.value = "";
});

input.addEventListener("keyup", event => {
  if (event.key === "Enter" && input.value !== "") {
    const newLi = document.createElement("li");
    newLi.innerHTML = `${input.value} <i class="bi bi-trash3-fill"></i>`;
    newLi.classList = "liRow";

    ul.appendChild(newLi);

    input.value = "";
  }
});

const icon = document.querySelector(".bi-trash3-fill");

ul.addEventListener("click", event => {
  if (event.target.classList.contains("bi-trash3-fill")) {
  }
  const li = event.target.closest("li");
  if (li) {
    li.remove();
  }
});
