import mongoose from "mongoose";

export const connectDB = ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL!, {
            dbName: "GraphQLPractice",
        });
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.error("Error connecting to MongoDB",error);
    }
}