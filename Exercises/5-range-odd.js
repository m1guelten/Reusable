'use strict';

//const rangeOdd = null;
const rangeOdd = (startNumber, endNumber) => {
    let massiv = [];
    for (startNumber; startNumber <= endNumber; startNumber++) {
        if (startNumber %2 !== 0) massiv.push (startNumber);      
    }
console.log (massiv);
};
module.exports = { rangeOdd };
