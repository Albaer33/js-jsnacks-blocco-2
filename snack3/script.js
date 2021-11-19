// Crea un array di numeri interi e fai la somma di tutti gli elementi
// che sono in posizione dispari

const arrayNumbers = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1000000];
let sum = 0;

for( let i = 0; i < arrayNumbers.length; i ++ ){
    const thisElement = arrayNumbers[i];
    console.log(arrayNumbers);
    
    if (i % 2 == 1){
        sum = sum + thisElement;
    }
}
console.log(sum);