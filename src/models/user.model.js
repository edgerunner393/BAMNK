const mongoose = require("mongoose")

const userScheme = mongoose.Schema({
    email: {
        type : String,
        required : [true , "Email is rquired for an account!!"],
        trim : true,
        unique : [true, "Email already exist for another user"],
        lowercase : true,
        match : [ , "Invalid email address"],
        match : ["/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/", "Please enter valid Email address!!"]
    },
    name : {
        type : String
    }
})