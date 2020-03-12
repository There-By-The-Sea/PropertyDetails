const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
// const connection = require('./db/connection');
const db = require('./db/databaseMethods.js');

const PORT = 5000;
const app = express();




//middleware setup
app.use(morgan('dev'));
app.use(express.json());


//routes
app.use('/', express.static('./client/dist'));


//set server to listen on a given port
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));


app.get('/api/propertyDetails', (req, res) => {
    //get all from DB and attach that to the res.body
    db.getAllData((data) => {
        console.log("recieved");
        res.body = data;
        res.status(200);
        res.json(data);
    })
})

