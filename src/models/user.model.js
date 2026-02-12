const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
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
        type : String,
        required : [true, "A name is required"]
    },
    password : {
        type : String,
        required : [true, "Set your password!"],
        minlength : [8, "The password should be atleast 8 characters"],
        select : false
    }
},{
    timestamps : true
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next()
    }
    const hash = await bcrypt.hash(this.password , 12)
    this.password = hash

    return next()
})

userSchema.method.comparePassword = async function(password) {
    return await bcrypt.compare(password , this.password)
}

const UserModel = mongoose.model("UserModel" , userSchema)
module.exports = UserModel