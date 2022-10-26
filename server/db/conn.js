const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://test:test@cluster0.3uq2ajp.mongodb.net/test")
.then(()=>
{
    console.log(`Mongoose Conected !!!`);
})
.catch((e)=>
{
    console.log(e)
})

