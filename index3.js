import express from "express";

const app = express();
const  pprt = 3000;
// custom middleware

function logger(req,res,next){
    console.log(`Request made to ${req.url}`);
    console.log(`REquest method ${req.method}`);
    next();
}
app.use(logger)
app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})