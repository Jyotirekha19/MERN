
import express from "express";
import dotenv from "dotenv";
//const express = require('express')

const app = express()
app.get('/', (req,res)=>{
   res.send({
    message:"Welcome to my app"
   })
})
const PORT =process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log("Server Running on $(PORT)");
});