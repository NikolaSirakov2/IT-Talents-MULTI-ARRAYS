let matrix = [
  [1, 2, 3, 5, 9],
  [3, 5, 2, 4, 15],
  [2, 7, 1, 6, 18],
];

let maxSum = 0;
let maxMatrix = "";

for (let i = 1; i < matrix.length; i++) {
  for (let k = 1; k < matrix[i].length; k++) {
    let sum = 0;
    let newMatrix = "";

    sum += matrix[i][k] + matrix[i - 1][k - 1] + matrix[i][k - 1] + matrix[i - 1][k];

    newMatrix = `${matrix[i - 1][k - 1]} ${matrix[i - 1][k]} \n${matrix[i][k - 1]} ${matrix[i][k]}`;

    if (sum > maxSum){
        maxSum = sum;
        maxMatrix = newMatrix;
    }
  }
}

console.log(maxMatrix);