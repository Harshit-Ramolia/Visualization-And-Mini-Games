import isEqual from "./isEquale";
import { downMove, leftMove, rightMove, upMove } from "./move";

function checkGameOver({ grid }) {
  let allFilled = 1;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] === 2048) {
        return 2;
      }
    }
  }
  return isEqual({ newGrid: leftMove({ grid }), grid }) &&
    isEqual({ newGrid: downMove({ grid }), grid }) &&
    isEqual({ newGrid: upMove({ grid }), grid }) &&
    isEqual({ newGrid: rightMove({ grid }), grid })
    ? 1
    : 0;
}

export default checkGameOver;
