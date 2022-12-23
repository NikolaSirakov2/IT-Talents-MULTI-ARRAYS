let n = 4;
let m = 5;

let matrix = "";

for(let k = 0; k < n; k++){
    for(let g = 0; g < m; g++){
        matrix += (g-1)*3 + (g + 1) + " ";
    }
    matrix += "\n";
}

console.log(matrix);