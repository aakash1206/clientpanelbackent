import mongoose from "mongoose";

export let DBconnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URL)
        console.log("DB connected")
    } catch (error) {
        console.log(error)
    }
}