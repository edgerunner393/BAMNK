const mongoose = require("mongoose");


function connectToDB(){

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connection stablished");
        
    })
    .catch(err =>{
        console.log("Not connected");
        console.exit(1);
        
    })

}

module.exports = connectToDB