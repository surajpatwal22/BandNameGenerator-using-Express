import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// app.use(morgan("tiny"));

app.use((req,res,next)=>{
    console.log("Reqyest Method: ", req.method);
    next();
})

app.get("/",(req,res)=>{
    res.status(200).send("hello");

})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})