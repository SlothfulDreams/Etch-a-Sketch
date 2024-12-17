const sketch_container = document.querySelector(".sketch-container");
const squares = document.createElement("div");
squares.classList.add("square");
squares.setAttribute("style", "color: black; border: 1px solid black;");
const grid_count = document.querySelector("input");
const button = document.querySelector("button");
const parent_size = sketch_container.clientHeight;

const make_grid = (size = 10) => {
  let grid_size = parent_size / size;
  console.log(grid_size);
  squares.style.height = grid_size + "px";
  squares.style.width = grid_size + "px";
  for (i = 0; i < size * size; i++) {
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
  let count = grid_count.value;
  if (count >= 10 && count <= count) {
    console.log(grid_count.value);
  } else if (count === "") {
    alert("pls enter something");
  } else {
    alert("HEY! Thats outside the range");
  }
  grid_count.value = "";
});

// make_grid();
// hover_listener();

// main = () => {
//   hover_listener();
//   // Need to modifiy the grid to change base on input (potentially using % to calculate size of squares)
//   make_grid();
// };

make_grid();
