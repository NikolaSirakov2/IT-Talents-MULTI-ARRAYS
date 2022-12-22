let n = 4;
let m = 5;

let matrix = "";

for(let k = 0; k < n; k++){
    for(let g = 0; g < m; g++){
        matrix += ((n*g) + k + 1) + " ";
    }
    matrix += "\n";
}

console.log(matrix);
