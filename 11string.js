
let n = 4;
let m = 6;

let matrix = "";

for(let k = 0; k < n; k++){
    for(let g = 0; g < m; g++){
        matrix += ((m*k) + g + 1) + " ";
    }
    matrix += "\n";
}

console.log(matrix);