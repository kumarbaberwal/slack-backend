import mongoose from "mongoose";
import { ENV } from "./env.js"

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI).then(() => console.log("MongoDB Connected Successfully!: ", mongoose.connection.host));

    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
        process.exit(1);
    }
}