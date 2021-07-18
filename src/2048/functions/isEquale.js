function isEqual({ grid, newGrid }) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] !== newGrid[i][j]) {
        return false;
      }
    }
  }
  return true;
}

export default isEqual;
