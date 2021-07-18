let last = [[], [], []];
let processes = [];

function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
  if (n === 1) {
    let temp = [
      ...last.map(function (arr) {
        return arr.slice();
      }),
    ];
    temp[from_rod] = temp[from_rod].filter((i) => i !== n);
    temp[to_rod] = [n, ...temp[to_rod]];
    last = [
      ...temp.map(function (arr) {
        return arr.slice();
      }),
    ];
    processes.push(last);
    return;
  }
  towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
  let temp = [
    ...last.map(function (arr) {
      return arr.slice();
    }),
  ];
  temp[from_rod] = temp[from_rod].filter((i) => i !== n);
  temp[to_rod] = [n, ...temp[to_rod]];
  last = [
    ...temp.map(function (arr) {
      return arr.slice();
    }),
  ];
  processes.push(last);
  towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

function solveTower(n) {
  last = [[...Array.from({ length: n }, (_, i) => i + 1)], [], []];
  processes = [];
  towerOfHanoi(n, 0, 2, 1);
  return processes;
}

export default solveTower;
