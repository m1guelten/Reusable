'use strict';

//const square = null;
const square = (x) => {
    let z = x*x;
    console.log (`Квадрат числа х = ${x} становить ${z}`);
    return z;
};
//const cube = null;
let cube = (x) => {
    let y = x*x*x;
    console.log (`Куб числа х = ${x} становить ${y}`);
    return y;
};
//const average = null;
const average = (a, b) => {
    let c=(a+b)/2;   
    console.log (`Середнє арифметичне чисел a = ${a} та b = ${b} становить ${c}`);
    return c;
};
//const calculate = null;
let calculate = (startNumber2, endNumber2) => {
    let massiv2 = [];
    for (startNumber2; startNumber2 <= endNumber2; startNumber2++) {
        massiv2.push (average (cube(startNumber2), square (startNumber2)));      
    };
console.log (massiv2);
};
module.exports = { square, cube, average, calculate };
