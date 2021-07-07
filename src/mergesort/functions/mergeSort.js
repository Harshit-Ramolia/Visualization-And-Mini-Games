let processes = [];

function merge(arr, left, right, mid) {
  let i, j, k;
  i = left;
  j = mid + 1;
  k = left;
  let temp = Array(arr.length);
  while (i <= mid && j <= right) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }
  while (i <= mid) {
    temp[k++] = arr[i++];
  }
  while (j <= right) {
    temp[k++] = arr[j++];
  }
  for (i = left; i <= right; i++) {
    arr[i] = temp[i];
  }
  processes.push([...arr]);
}

function _mergeSort(arr, left, right) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    _mergeSort(arr, left, mid);
    _mergeSort(arr, mid + 1, right);
    merge(arr, left, right, mid);
  }
}

function mergeSort(arr) {
  processes = [];
  _mergeSort(arr, 0, arr.length - 1);
  return processes;
}

export default mergeSort;
