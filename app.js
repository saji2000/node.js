const {readFile, writeFile, write} = require('fs');

readFile('./texts/first.txt', 'utf-8',(err, result) => {
    if(err){
        console.log(err);
        return null;
    }
    const first = result;
    readFile('./texts/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return null;
        }
        const second = result;

        writeFile('./texts/result.txt', `Here is the result: ${first}, ${second} \n`,
        (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        });
    })
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