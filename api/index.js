const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true,
    useUnifiedTopology: true,}
    ).then(()=>{
        console.log("DB connection successful!")
    }).catch((err)=>{
        console.log("DB connection err: "+err)
    })

app.listen(8800, ()=>{
    console.log("Backend is up!")
})