function addNumber({ grid, setGrid }) {
  while (true) {
    const x = Math.floor(Math.random() * 4);
    const y = Math.floor(Math.random() * 4);
    if (grid[x][y] !== 0) continue;
    setGrid((prevGrid) => {
      let newArray = [
        ...prevGrid.map(function (arr) {
          return arr.slice();
        }),
      ];
      newArray[x][y] = 2;
      return newArray;
    });
    break;
  }
}

export default addNumber;
