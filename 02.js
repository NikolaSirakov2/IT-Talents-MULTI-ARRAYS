let array = [1, 2, 0, 3, 5];
let itsZigZag = true;

for (let i = 1; i < array.length; i += 2){
    if(array[1] < array[0] && (array[i-1] < array [i] || array [i] > array [i+1])){
        itsZigZag = false;
        break;
    } else if (array[1] > array[0] && (array[i] < array[i-1] || array [i] < array [i+1])){
        itsZigZag = false;
        break;
    }
}

if(itsZigZag){
    console.log("Масивът е назъбен!");
} else {
    console.log("Масивът не е назъбен!");
}