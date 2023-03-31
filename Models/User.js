const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    mobileno: {
        type: Number,
        required: true,
        unique: true,
    },
    result: {
        type: String,
        required: true,
    }
})
const UserModel = mongoose.model("scratchuser", UserSchema)


module.exports = { UserModel }