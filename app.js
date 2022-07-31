// Make a 16x16 Grid
function makeGrid() {
  const container = document.querySelector(".container");
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
      const div = document.createElement("div");
      div.setAttribute("data-row", i);
      div.setAttribute("data-col", j);
      gridContainer.appendChild(div);
    }
  }

  container.appendChild(gridContainer);
}

makeGrid();
