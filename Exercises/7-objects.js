'use strict';

//const fn = null;
const fn = () => {
    const obj1 = {name: 'Miguel',city: 'Kyiv'};
    let obj2 = {name: 'Miguel'};
    console.log (obj1);
    console.log (obj2);
    obj1.name = 'Potapenko';
    obj2.name = 'Potapenko';
    console.log (obj1);
    console.log (obj2);
 //   obj1 = {name: 'Misha Potapenko'};
    obj2 = {name: 'Misha Potapenko'};
    console.log (obj2);
}

module.exports = { fn };
