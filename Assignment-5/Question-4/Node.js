const fs=require('fs')
const http=require('http')
const server=http.createServer(function(req,res){
    const path=req.url
    if(path==="/"){
        fs.readFile("public/index.html","utf-8",(error,data)=>{
            if(error){
                res.write("<h1>Error 500: Server Error</h1>")
            } 
            else{
                res.write(data)
            }
            res.end()
        })
    } 
    else if(path==="/about"){
        fs.readFile("public/about.html","utf-8",(error, data)=>{
            if(error){
                res.write("<h1>Error 500: Server Error</h1>")
            } 
            else{
                res.write(data)
            }
            res.end()
        })
    } 
    else{
        res.write("<h1>Error 404:Page Not Found</h1>");
        res.end()
    }
})
server.listen(5000,function(){console.log("Server Started at 5000")})