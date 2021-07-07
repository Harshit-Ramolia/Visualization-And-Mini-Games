let processes = [];

function isSafe(row, col, num, sudokuValue) {
  for (let i = 0; i < 9; i++) {
    if (sudokuValue[row][i] === num || sudokuValue[i][col] === num) return false;
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (sudokuValue[i + (row - (row % 3))][j + (col - (col % 3))] === num) {
        return false;
      }
    }
  }
  return true;
}

function tryAllPossibility(row, col, sudokuValue) {
  if (row === 9) return true;
  if (col === 9) return tryAllPossibility(row + 1, 0, sudokuValue);
  if (sudokuValue[row][col] !== 0)
    return tryAllPossibility(row, col + 1, sudokuValue);
  for (let i = 1; i <= 9; i++) {
    if (isSafe(row, col, i, sudokuValue)) {
      sudokuValue[row][col] = i;
      processes.push([
        ...sudokuValue.map(function (arr) {
          return arr.slice();
        }),
      ]);
      if (tryAllPossibility(row, col + 1, sudokuValue)) {
        return true;
      }
      sudokuValue[row][col] = 0;
      processes.push([
        ...sudokuValue.map(function (arr) {
          return arr.slice();
        }),
      ]);
    }
  }
  return false;
}

function solveSudoku(sudokuValue) {
  processes = [];
  tryAllPossibility(0, 0, sudokuValue);
  return processes;
}

export default solveSudoku;
