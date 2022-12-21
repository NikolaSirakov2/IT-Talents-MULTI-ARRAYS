let array = [2, 5, 8, 3, 10, 0];
let allPositive = true;

for (let i = 0; i < array.length; i++){
    if(array[i] < 0){
        allPositive = false;
        break;
    }
}

if(!allPositive){
    console.log("Не всички са позитивни!");
} else {
    console.log("Всички са позитивни!");
}