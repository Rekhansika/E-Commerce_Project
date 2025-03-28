const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

const PORT = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.send("connected to e-commerce backend successfully");
});

mongoose.connect(MONGO_URL)
.then((check)=>{
    app.listen(PORT,()=>{
        console.log("Connected successfully");
    })
}).catch((error)=>{
    console.log("Error",error);
})