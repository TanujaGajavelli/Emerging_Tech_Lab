const express=require('express')
const app=express()
app.get("/",(req,res)=>{
    res.send("<h1>Express Server</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>About Express Server</h1>")
})
app.listen(5000,()=>{console.log("Server started at 5000")})