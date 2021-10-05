'use strict';

//const range = null;
const range = (startNumber, endNumber) => {
    let massiv = [];
    for (startNumber; startNumber <= endNumber; startNumber++) {
        massiv.push (startNumber);      
    }
console.log (massiv);
};
module.exports = { range };
