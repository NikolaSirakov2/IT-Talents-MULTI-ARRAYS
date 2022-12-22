let n = 4;
let m = 6;

let matrix = [];

for(let k = 0; k < n; k++){
    let newArr = [];

    for(let g = 0; g < m; g++){
        newArr.push((m*k) + g + 1);
    }

    matrix.push(newArr + "\n");
}

console.log(matrix);