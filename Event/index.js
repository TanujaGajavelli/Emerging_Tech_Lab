const express=require('express')
const PORT=process.env.PORT
const app=express()
require('dotenv').config()
app.get("/",(req,res)=>{
    res.send("Welcome to Event Portal")
})

app.listen(PORT,function(){
    console.log(`Server started at ${PORT}`)
})