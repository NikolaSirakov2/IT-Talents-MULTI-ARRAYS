let array = [
    [2, 6, 9],
    [4, 7, 8],
    [3, 2, 5],
    [3, 2, 5],
    [3, 2, 5]
]

let multiplication = 1;

for (let i = 0; i < array.length; i++){
    for(let h = 0; h < array[i].length; h++){
        if(i > h){
            multiplication *= array[i][h];
        }
    }
}

console.log(multiplication);