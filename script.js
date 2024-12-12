const sketch_container = document.querySelector(".sketch-container");
const squares = document.createElement("div");
squares.classList.add("square");
squares.setAttribute(
  "style",
  "color: black; width: 16px; height: 16px; border: 1px solid black;"
);
const grid_count = document.querySelector("input");
const button = document.querySelector("button");

const make_grid = () => {
  for (i = 0; i < 256; i++) {
    sketch_container.appendChild(squares.cloneNode(true));
    console.log("Working");
  }
};

const hover_listener = (event) => {
  sketch_container.addEventListener("mouseover", (e) => {
    let target_square = e.target;
    if (target_square.className != "sketch-container") {
      console.log(target_square.className);
      target_square.style["background-color"] = "black";
    }
  });
};

button.addEventListener("click", () => {
  console.log(grid_count.value);
  grid_count.value = "";
});

// make_grid();
// hover_listener();
