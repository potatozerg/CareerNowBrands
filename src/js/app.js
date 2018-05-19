let grid = [];
let size = 500;

const draw = () => {
  const c = document.getElementById("grid");
  const ctx = c.getContext("2d");
  // erase previous cells
  ctx.clearRect(0, 0, size, size);
  for (let i = 1; i < size; i++) {
    for (let j = 1; j < size; j++) {
      if (grid[i][j] === 1) {
        ctx.fillStyle = "red";
        ctx.fillRect(i, j, 1, 1);
      }
    }
  }
}

const init = () => {
  for (let i = 0; i < size; i++) {
    grid.push([]);
    for (let j = 0; j < size; j++) {
      if (Math.random() < 0.3) {
        grid[i].push(1);
      } else {
        grid[i].push(0);
      }
    }
  }
}

const update = () => {
  let updateGrid = JSON.parse(JSON.stringify(grid));
  // ignore the part that doesn't have 8 neighbours
  for (let i = 1; i < size - 1; i++) {
    for (let j = 1; j < size - 1 ; j++) {
      let count = 0;
      if (grid[i-1][j-1] === 1) {
        count++;
      }
      if (grid[i-1][j] === 1) {
        count++;
      }
      if (grid[i-1][j+1] === 1) {
        count++;
      }
      if (grid[i][j-1] === 1) {
        count++;
      }
      if (grid[i][j+1] === 1) {
        count++;
      }
      if (grid[i+1][j-1] === 1) {
        count++;
      }
      if (grid[i+1][j] === 1) {
        count++;
      }
      if (grid[i+1][j+1] === 1) {
        count++;
      }

      if (grid[i][j] === 1) {
        if (count < 2) {
          updateGrid[i][j] = 0;
        }
        if (count === 2 || count === 3) {
          updateGrid[i][j] = grid[i][j];
        }
        if (count > 3) {
          updateGrid[i][j] = 0;
        }
      } else {
        if (count === 3) {
          updateGrid[i][j] = 1;
        }
      }
    }
  }
  grid = updateGrid;
}

const run = () => {
  init();
  setInterval(()=>{
    update();
    draw();
  }, 100);
}
