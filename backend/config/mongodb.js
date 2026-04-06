import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connection.readyState === 0) {
        mongoose.connection.on('connected', () => {
            console.log("DB Connected");
        })
        await mongoose.connect(process.env.MONGODB_URI + "/e-commerce")
    }
}

export default connectDB;