const express = require('express');
const mongoose = require('mongoose');

const Rental = require('./models/rental');
const config = require('./config/dev');
const FackDB = require('./fack-db');
const routeRental = require('./routes/rentals');

mongoose.connect(config.DB_URI).then(()=>{
    const fackDB = new FackDB();
    fackDB.seedDB();
}) ;

const app = express();

app.use('/api/v1/rentals',routeRental);

const PORT = process.env.PORT || 3001 ;

app.listen(PORT , function (){
    console.log("Express Running");

})