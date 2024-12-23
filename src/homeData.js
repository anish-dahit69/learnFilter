import { displaydata } from "./display";

const cardContainer = document.querySelector(".card-container");
const dataTemplate = document.querySelector(".dataTemplate");

export const showData = (data) => {
  if (!data) {
    return false;
  }

  cardContainer.innerHTML = ""; // Clear previous data

  data.forEach((curElem) => {
    const { category, title, image, rating } = curElem;

    const dataClone = document.importNode(dataTemplate.content, true);
    dataClone.querySelector(".name").textContent = title;

    dataClone.querySelector(".dataImage").src = image;

    cardContainer.append(dataClone);
  });
};
