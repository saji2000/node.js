const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 3000;

const json = 
    [
        {
            "name": "sajad",
            "industry": "tech"
        },
        {
            "name": "hasan",
            "industry": "business"
        }
];

app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/api/customers', (req, res) => {
    res.send({"data": json.friends});
});

app.post('/api/customers', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.post('/', (req, res) => {
    res.send("This is a post request!");
});

app.listen(PORT, () => {
    console.log('listening on port');
});