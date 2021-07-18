function binarySearch(arr, number, setDidWin) {
  let low = 0,
    high = arr.length - 1;
  let temp = [];
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    temp.push(mid);
    if (arr[mid] === number) {
      setDidWin(true);
      break;
    }
    if (arr[mid] < number) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return [...temp];
}

export default binarySearch;
