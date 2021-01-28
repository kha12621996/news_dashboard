const { Router: router} = require('express');
const { map, pluck, debounce } = require('lodash');

const user = {
    id: 5,
    username: 'hansmeier',
    password: 'eiersalat',
    firstName: 'Hans',
    lastName: 'Meier'
}

const { firstName: f, lastName: l,age = 30 } = user;

console.log(f);
console.log(l);
console.log(age);