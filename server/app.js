const express = require("express")
require("./db/conn")
const user = require("./model/user")
const cors = require("cors")


const app = express();
const port = process.env.PORT ||4200;
app.use(express.json());
app.use(cors());



app.get("/",(req,res)=>
{
res.send("Expresss js Startesd")
})

// new <Registration></Registration>

app.post("/newuser",(req,res)=>
{

    const newUserData = new user(req.body)
    
    newUserData.save()
    res.send("Data inserted !!")
    console.log(`${newUserData}`)



})

app.listen(port,()=>
{
    console.log(`Server runing at :${port}`);
})