let array = [
    [1, 3, 555],
    [3, 2, 78],
    [4, 4, 9]
];

let biggestLine = 0;
let biggestSum = 0;

for(let i = 0; i < array.length; i++){
    let lineSum = 0;
    for(let k = 0; k < array[i].length; k++){
        lineSum += array[i][k]
    }

    if(biggestSum === 0 || lineSum > biggestSum){
        biggestSum = lineSum;
        biggestLine = i + 1;
    }
}

console.log(`В ред номер ${biggestLine} сумата на елементите е максимална.`);