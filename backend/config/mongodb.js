import mongoose from "mongoose";

const connectDB = async () => {
    // This listener prints when connection is successful
    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    })

    // It crashes here if process.env.MONGODB_URI is undefined
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
}

export default connectDB;