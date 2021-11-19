
// Crea un array vuoto e chiedi all’utente un numero
// da inserire nell’array. Continua a chiedere i numeri
// all’utente e a inserirli nell’array fino a quando
// a somma degli elementi è minore di 50.

let array = [];
let sum = 0;

do {
    thisNumber = parseInt(prompt('Inserisci un numero:'));
    array.push(thisNumber);
    sum = sum + thisNumber;

} while (sum < 50);

console.log('Il risultato è:' + sum);