/*let x = 10;
if (x === 10){
    console.log('x yra 10')
}

// loop
for(let i = 1; i <= 10; i ++){
    console.log(i);
}

// funkcija

let x1 = 10;
function nesvarbu(x, y){
    let x1 = 20
    console.log(x1);
}
nesvarbu(10, 20)*/

// 1. Print all even numbers from 0 – 10
// 0, 2, 4, 6, 8, 10

function printEvenNumbers(){
    for (let i = 0; i <= 10; i ++)
    if (i % 2 === 0){
    console.log(i)
    }
}
printEvenNumbers()

// 2. Print a table containing multiplication tables
// 1 x 1 = 1,
// 1 x 2 = 2

function daugybosLentele(){
    for (let i = 1; i <= 9; i ++){
         for (let j = 1; j <= 9; j ++){
            console.log(`${i} x ${j} = ${1 * j}`)
            }
            console.log('_________')
    }
}
daugybosLentele()

// 3. Create a length converter function
/* 30 cm -> ? coliu
    1 cm = 0.393701 inch
*/

function konverter(centimetrai, coliai){
    // return centimetrai * coliai
    console.log(`${centimetrai} centimetru yra lygu ${centimetrai * coliai} coliu`)
}
konverter(10, 0.393701)

// 4. Calculate the sum of numbers within an array