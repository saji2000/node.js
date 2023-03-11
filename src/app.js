const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Customer = require('./models/customer');
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

const customer = new Customer({
    name: "John",
    industry: "marketing"
});

// customer.save();

app.get('/', (req, res) => {
    res.send("Welcome!");
});

app.get('/api/customers', async (req, res) => {
    console.log(await mongoose.connection.db.listCollections().toArray());
    try{
        const result = await Customer.find();
        res.json({"data": result});
    }
    catch(e){
        res.status(500).json({error: e.message});
    }
});

app.get('/api/customers/:id', async (req, res) => {
    console.log({
        requestParams: req.params,
        requestQuery: req.query
    });
    try{
        const customerId = req.params.id;
        console.log(customerId);
        const customer = await Customer.findById(customerId);
        console.log(customer);
        if(!customer){
            res.status(404).json({error: "not found"});
        }
        else{
            res.json(customer);
        }
    }
    catch(e){
        res.status(500).json({error: e});
    }
});

// updating a record
app.put('/api/customers/:id', async(req, res)=>{
    const customerId = req.params.id;
    const result = await Customer.replaceOne({_id: customerId}, req.body);
    console.log(result);
    res.json({updatedCount: result.modifiedCount});
});

app.post('/api/customers', (req, res) => {
    console.log(req.body);
    const customer = new Customer(req.body);
    customer.save();
    res.status(201).json({customer});
});

app.post('/', (req, res) => {
    res.send("This is a post request.");
});

const start = async() => {
    try{
        await mongoose.connect(CONNECTION);

        app.listen(PORT, () => {
            console.log('listening on port: ' + PORT);
        });
    }
    catch(e){
        console.log(e.message);
    }
}

start();