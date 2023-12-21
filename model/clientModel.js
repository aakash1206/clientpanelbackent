import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    project: {
        type: String,
        require: true
    }
})


export const  userMdel  = mongoose.model("client" , clientSchema)