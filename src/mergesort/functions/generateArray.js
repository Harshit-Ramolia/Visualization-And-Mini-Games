function generateArray(setArray) {
  let arr = [];
  while (arr.length < 15) {
    const temp = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(temp) === -1) arr.push(temp);
  }
  setArray([...arr]);
}

export default generateArray;
