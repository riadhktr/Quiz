import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb+srv://RiadhKtr:TyY9BXXExgWNBAun@cluster1.hbozg.mongodb.net/QuizGame?retryWrites=true&w=majority")
    console.log("Database Connected")
}