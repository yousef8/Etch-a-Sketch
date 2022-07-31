let isErase = false;

// Make a Grid
function makeGrid(size) {
  // Make container
  const container = document.querySelector(".container");
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  if (!(size === 16)) {
    gridContainer.style.cssText = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`;
  }

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      const div = document.createElement("div");
      div.setAttribute("data-row", i);
      div.setAttribute("data-col", j);
      gridContainer.appendChild(div);
    }
  }

  const isOldGridContainer = document.querySelector(
    ".container div.grid-container"
  );
  if (isOldGridContainer) {
    container.removeChild(isOldGridContainer);
  }
  container.appendChild(gridContainer);
}

function draw() {
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.addEventListener("mousemove", (e) => {
    const div = e.target;
    if (isErase) {
      e.target.classList.remove("trail");
      return;
    }
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

    makeGrid(gridSize);
    draw();
  });
}

makeGrid(16);
draw();
getGridSize();
const eraserButton = document.querySelector(
  ".container .editor .eraser button"
);
eraserButton.addEventListener("click", (e) => {
  if (isErase) {
    isErase = false;
    e.target.classList.remove("clicked");
    return;
  }
  e.target.classList.add("clicked");
  isErase = true;
});

const clearButton = document.querySelector(".container .editor .clear button");

clearButton.addEventListener("click", (e) => {
  const gridSize = document.querySelector(
    ".container .editor .grid-size input"
  ).value;
  console.log(gridSize);
  makeGrid(gridSize);
  draw();
});
