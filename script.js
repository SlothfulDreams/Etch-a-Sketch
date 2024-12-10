const sketch_container = document.querySelector(".sketch-container");
const squares = document.createElement("div");
squares.classList.add("square");
squares.setAttribute(
  "style",
  "color: black; width: 16px; height: 16px; border: 1px solid black;"
);

const make_grid = () => {
  for (i = 0; i < 256; i++) {
    sketch_container.appendChild(squares.cloneNode(true));
    console.log("Working");
  }
};

make_grid();
