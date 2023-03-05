const express = require('express');

const app = express();

const PORT = 3000;

const json = {
    "name": "sajad",
    "age": "22",
    "friends":[
        {
            "name": "hasan"
        },
        {
            "name": "navid"
        }
    ]
}

app.get('/', (req, res) => {
    res.send({"data": json});
});

app.post('/', (req, res) => {
    res.send("This is a post request!");
});

app.listen(PORT, () => {
    console.log('listening on port');
});