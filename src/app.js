const express = require('express');

const mongoose = require('mongoose');

const dotenv = require('dotenv');

const app = express();

mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

if(process.env.NODE_ENV !== 'production'){
    dotenv.config();
}

const PORT = process.env.PORT || 3000;

const CONNECTION = process.env.CONNECTION;

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

const start = async() => {
    try{
        await mongoose.connect(CONNECTION);

        app.listen(PORT, () => {
            console.log('listening on port ' + PORT);
        });
    }
    catch(e){
        console.log(e.message);
    }
}

start();