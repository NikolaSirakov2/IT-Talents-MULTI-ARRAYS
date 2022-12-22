let array = [3, 5, 1, 3, 9];
let itsZigZag = true;

for (let i = 1; i < array.length - 1; i ++){
    
    const highStart = array[i] <= array[i - 1] && array[i] >= array[i + 1];
    const lowetStart = array[i] >= array[i - 1] && array[i] <= array[i + 1];

    if(lowetStart || highStart){
        itsZigZag = false;
    }
}

if(itsZigZag){
    console.log("Масивът е назъбен!");
} else {
    console.log("Масивът не е назъбен!");
}