
// Generatore di “nomi cognomi” casuali: prendendo
// una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di invitati.

const names = ['alberto','pasquale','marco','simone'];
const lastName = ['blabla','bloblo','blublu','blibli'];

for (let i = 0; i < names.length; i++){
    const thisName = names[Math.floor(Math.random() * (names.length -1)) + 0];
    const thisLastName = lastName[Math.floor(Math.random() * (names.length -1)) + 0];

    alert(thisName + ' ' + thisLastName);
}