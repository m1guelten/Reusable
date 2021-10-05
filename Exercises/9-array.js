'use strict';

//const phonebook = null;
const phonebook = [
    {name: 'Miguel', phone: '0954824857'},
    {name: 'Vova', phone: '0954824858'},
    {name: 'Olesya', phone: '0954824859'},
    {name: 'Vitaliy', phone: '0954824743'},
    {name: 'Ivan', phone: '0954824677'},
];
//const findPhoneByName = null;
const findPhoneByName = (name) => {
    for (let i = 0; i<phonebook.length; i++) {
        if (phonebook[i].name === name) {
            console.log (phonebook[i]);
            return;
        };
    };
};

module.exports = { phonebook, findPhoneByName };
