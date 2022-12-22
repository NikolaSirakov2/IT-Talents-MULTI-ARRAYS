let arr = [">", "$", "+", "#", ")"];
let ch = ")";
let arrHasCh = -1;

for(let i = 0; i < arr.length; i++){
    if(arr[i] === ch){
        arrHasCh = i;
        break;
    }
}

console.log(arrHasCh);