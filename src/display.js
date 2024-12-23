import { showData } from "./homeData";

export const displaydata = (data) => {
  const filterElement = document.getElementById("data-filter");

  filterElement.addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    const filteredData =
      selectedCategory === "all"
        ? data
        : data.filter((item) => item.category === selectedCategory);
    showData(filteredData);
  });
};
