const http=require("http");
const express=require("express");
const app=express()
const path=require("path") // to resolve path 

const server=http.createServer(app);
app.use(express.static(path.resolve('./public')))
app.get('/',(req,resp)=>{
    return resp.sendFile('index.html')
})
server.listen(4000,()=>console.log('listening on port 4000'));