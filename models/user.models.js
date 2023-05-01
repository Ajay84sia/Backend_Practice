const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{type:String, require:true},
    age:{type:Number, require:true},
    email:{type:String, require:true},
    pass:{type:String, require:true},
})


const UserModel = mongoose.model("user", userSchema)


module.exports = {
    UserModel
}