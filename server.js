const http=require("http");
const express=require("express");
// const {join}=require("node:path") // to resolve path using join
const path=require("path")
const {Server}=require("socket.io")

const app=express()
const server=http.createServer(app);
const io=new Server(server)
// to handle sockets
// here socket in call back function is nothing but client
io.on("connection",(socket)=>{
    // to check if the clint has been connected
    // console.log("A new client connected: ",socket.id)

    //basically reading the message from the event defined in backend
    socket.on("user's-message",(message)=>{
        console.log(message)
    })
})



app.use(express.static(path.resolve('./public')))

// to handle http requests
app.get('/',(req,resp)=>{
    return resp.sendFile('./index.html');
    // return resp.sendFile(join(__dirname,'./public/index.html'));
})
server.listen(4000,()=>console.log('listening on port 4000'));