require("dotenv").config()

const app = require("./src/app")
const connectToDB = require("./src/config/db")

connectToDB()

app.get("/",(req,res)=>{
    res.send("happens");
    
})

app.listen(3000, () =>{
    console.log("http://localhost:3000");
})