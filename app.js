// Global Variables
let isErase = false;
let isRandom = false;

const eraserButton = document.querySelector(
  ".container .editor .eraser button"
);

const randomRGBButton = document.querySelector(
  ".container .editor .random-rgb button"
);

// Function declarations
function makeGrid(size) {
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
      div.classList.remove("trail");
      return;
    }

    if (isRandom) {
      div.style.backgroundColor = generateRandomRGB();
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

function switchButton(button) {
  switch (button) {
    case "eraser":
      isErase = true;
      isRandom = false;
      eraserButton.classList.add("clicked");
      randomRGBButton.classList.remove("clicked");
      break;
    case "randomRGB":
      isErase = false;
      isRandom = true;
      randomRGBButton.classList.add("clicked");
      eraserButton.classList.remove("clicked");
      break;
  }
}

function watchEraseButton() {
  eraserButton.addEventListener("click", (e) => {
    switchButton("eraser");
  });
}

function watchClearButton() {
  const clearButton = document.querySelector(
    ".container .editor .clear button"
  );

  clearButton.addEventListener("click", (e) => {
    const gridSize = document.querySelector(
      ".container .editor .grid-size input"
    ).value;
    console.log(gridSize);
    makeGrid(gridSize);
    draw();
  });
}

function generateRandomRGB() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function watchRandomRGBButton() {
  randomRGBButton.addEventListener("click", (e) => {
    switchButton("randomRGB");
  });
}

// Main Program

makeGrid(16);
draw();
getGridSize();
watchEraseButton();
watchClearButton();
watchRandomRGBButton();
