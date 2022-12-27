let n = 4;
let m = 5;
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(new Array(m));
}

let counter = 1;

for (let i = 0; i < n; i++) {
  let startI = i;
  let startJ = 0;

  if (startI !== n - 1) {
    while (startI >= 0 && startJ < m) {
      arr[startI][startJ] = counter++;
      startI--;
      startJ++;
    }

    startI = i;
    startJ = 0;
  } else {
    for (let j = startJ; j < m; j++) {
      while (startI >= 0 && startJ < m) {
        arr[startI][startJ] = counter++;
        startI--;
        startJ++;
      }

      startI = i;
      startJ = j + 1;
    }
  }
}

console.table(arr);
