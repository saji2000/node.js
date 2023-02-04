const {readFile, writeFile} = require('fs');

const first = readFile('./texts/first.txt', 'utf-8',(err, result) => {
    if(err){
        console.log(err);
        return null;
    }
    console.log(result);
});

// const second = readFile('./texts/second.txt', (err, result) => {
//     if(err){
//         console.log(err);
//         return null;
//     }
//     console.log(result);
// });
// console.log(first, second);

// writeFileSync('./texts/result.txt', `Here is the result: ${first}, ${second} \n`, {flag: 'a'});