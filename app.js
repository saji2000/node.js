const {readFile, writeFile} = require('fs');

const first = readFile('./texts/first.txt', 'utf8');

const second = readFile('./texts/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./texts/result.txt', `Here is the result: ${first}, ${second} \n`, {flag: 'a'});