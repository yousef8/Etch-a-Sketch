// Make a 16x16 Grid
function makeGrid() {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      const div = document.createElement("div");
      div.setAttribute("data-row", i);
      div.setAttribute("data-col", j);
      gridContainer.appendChild(div);
    }
  }

  document.body.appendChild(gridContainer);
}

makeGrid();
