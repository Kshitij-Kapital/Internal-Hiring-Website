const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
require('./db/connection');
const PORT = process.env.PORT;



const mongoose = require('mongoose');


app.use(cors());

app.use(express.json());


//We link the router file to make our route easy
app.use(require('./router/auth'));




//Middleware

const middleware = (req, res, next) => {
    console.log(`Hello to Middleware`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Hello World`);
});

app.get('/register', middleware, (req, res) => {
    res.send(`Hello to register page`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})