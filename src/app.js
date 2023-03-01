const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.post('/', (req, res) => {
    res.send("Post request!");
});

app.listen(PORT, () => {
    console.log('listening on port');
});