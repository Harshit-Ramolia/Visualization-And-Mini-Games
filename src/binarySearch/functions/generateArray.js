function generateArray(setBinarySearch, setLinearSearch, setNumber) {
  let arr = [];
  setNumber(Math.floor(Math.random() * 100) + 1);
  while (arr.length < 15) {
    const temp = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(temp) === -1) arr.push(temp);
  }
  arr.sort((a, b) => a > b);
  setBinarySearch([...arr]);
  setLinearSearch([...arr]);
}

export default generateArray;
