let n = 4;
let m = 5;

let matrix = "";

for(let k = 0; k < n; k++){
    for(let g = 0; g < m; g++){
        if(g % 2 === 0){
        matrix +=  (n*g)+ 1 + k + " ";
        } else {
            matrix += (n*(g+1) - k) + " ";
        }
    }
    matrix += "\n";
}

console.log(matrix);