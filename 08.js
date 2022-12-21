let array = [
    [false, false, false, false, true],
    [false, false, true, false, false],
    [false, false, false, false, false],
    [false, true, false, false, false],
    [true, true, false, false, false],
]

let thereIsTrue = false;

for(let i = 0; i < array.length; i++){
    for(let k = 0; k < array[i].length - (i + 1); k++){
        if(k >= i){
            if(array[i][k] === true){
                thereIsTrue = true;
                break;
            }
        }
    }
}

console.log(thereIsTrue);