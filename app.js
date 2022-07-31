// Make a 16x16 Grid
function makeGrid(size) {
  const container = document.querySelector(".container");
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      const div = document.createElement("div");
      div.setAttribute("data-row", i);
      div.setAttribute("data-col", j);
      gridContainer.appendChild(div);
    }
  }

  container.appendChild(gridContainer);
}

function draw() {
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.addEventListener("mousemove", (e) => {
    const div = e.target;
    div.classList.add("trail");
  });
}

function getGridSize() {
  const inputRange = document.querySelector(
    ".container .editor .grid-size input"
  );

  const inputRangeLabel = document.querySelector(
    ".container .editor .grid-size label"
  );

  inputRange.addEventListener("change", (e) => {
    const gridSize = e.target.value;
    inputRangeLabel.textContent = `${gridSize}x${gridSize}`;
  });
}

makeGrid(16);
draw();
getGridSize();
