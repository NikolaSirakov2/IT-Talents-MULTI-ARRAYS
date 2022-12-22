let arr = [4, 1, 1, 2, 3, 4, 4, 1, 2, 4, 9, 3];
let num = 0;
let maxCount = 0;

for(let k = 0; k < arr.length; k++){
    let newNum = arr[k];
    let count = 0;

        for (let h = k + 1; h < arr.length; h++){
            if(arr[h] === newNum){
                count++;
            }
        }
    
    if (count > maxCount){
        num = newNum;
        maxCount = count;
    }
}

console.log(num);
console.log(maxCount);