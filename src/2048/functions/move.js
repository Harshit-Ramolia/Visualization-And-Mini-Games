function leftMove({ grid, setScore }) {
  let newGrid = [
    ...grid.map(function (arr) {
      return arr.slice();
    }),
  ];
  let used = [
    ...Array(4)
      .fill(0)
      .map(() => new Array(4).fill(0)),
  ];
  let score = 0;
  for (let i = 0; i < 4; i++) {
    newGrid[i] = [...newGrid[i].filter((number) => number !== 0)];
    for (let j = newGrid[i].length; j < 4; j++) {
      newGrid[i].push(0);
    }
    for (let j = 0; j < 4; j++) {
      if (
        j > 0 &&
        newGrid[i][j] === newGrid[i][j - 1] &&
        newGrid[i][j - 1] !== 0 &&
        used[i][j - 1] !== 1
      ) {
        newGrid[i][j - 1] = 2 * newGrid[i][j - 1];
        score = score + newGrid[i][j - 1];

        newGrid[i][j] = 0;
        used[i][j - 1] = 1;
        used[i][j] = 1;
      }
    }
    newGrid[i] = [...newGrid[i].filter((number) => number !== 0)];
    for (let j = newGrid[i].length; j < 4; j++) {
      newGrid[i].push(0);
    }
  }
  if (setScore !== undefined) {
    setScore((prev) => prev + score);
  }
  return [
    ...newGrid.map(function (arr) {
      return arr.slice();
    }),
  ];
}

function rightMove({ grid, setScore }) {
  let newGrid = [
    ...grid.map(function (arr) {
      return arr.slice();
    }),
  ];
  newGrid.map((row) => row.reverse());
  newGrid = leftMove({ grid: newGrid, setScore });
  newGrid.map((row) => row.reverse());
  return [
    ...newGrid.map(function (arr) {
      return arr.slice();
    }),
  ];
}

function rotateRight({ grid, setScore }) {
  let newGrid = [
    ...Array(4)
      .fill(0)
      .map(() => new Array(4).fill(0)),
  ];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      newGrid[i][j] = grid[j][grid[i].length - 1 - i];
    }
  }
  return [
    ...newGrid.map(function (arr) {
      return arr.slice();
    }),
  ];
}

function rotateLeft({ grid, setScore }) {
  let newGrid = [
    ...Array(4)
      .fill(0)
      .map(() => new Array(4).fill(0)),
  ];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      newGrid[i][j] = grid[grid[i].length - 1 - j][i];
    }
  }
  return [
    ...newGrid.map(function (arr) {
      return arr.slice();
    }),
  ];
}

function downMove({ grid, setScore }) {
  let newGrid = rotateLeft({ grid });
  newGrid = leftMove({ grid: newGrid, setScore });
  return rotateRight({ grid: newGrid });
}

function upMove({ grid, setScore }) {
  let newGrid = rotateRight({ grid });
  newGrid = leftMove({ grid: newGrid, setScore });
  return rotateLeft({ grid: newGrid });
}

export { leftMove, rightMove, upMove, downMove };
