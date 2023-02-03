const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./texts/first.txt', 'utf8');

const second = readFileSync('./texts/second.txt', 'utf8');

console.log(first, second);


writeFileSync('./texts/result.txt', `Here is the result: ${first}, ${second} \n`, {flag: 'a'});