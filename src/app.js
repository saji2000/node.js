const http = require('http');
const {v4: uuidv4} = require('uuid');

console.log(uuidv4());

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello World!</h1>');
// });

// server.listen(3000, '127.0.0.1', () => {
//     console.log('Server running');
// });