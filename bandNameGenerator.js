import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName ="";


app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req,res,next){
   console.log(req.body);
   bandName = req.body["band"] + req.body["name"];
    next();
}
app.use(bandNameGenerator);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
    res.send(`<h1> Your Band Name i:</h1> <h2>${bandName}</h2>`)
   })

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})