function LinearSearch(arr, number) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(i);
    if (arr[i] >= number) {
      break;
    }
  }
  return [...temp];
}

export default LinearSearch;
