const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.route.js");
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("Yo from Node API")
});


mongoose.connect("mongodb+srv://chris:chris@firstworkingcluster.ksfkf.mongodb.net/chrisDataBase?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running or port 3000')
        });
    })
    .catch((error) => {
        console.error("Connection failed");
    });

