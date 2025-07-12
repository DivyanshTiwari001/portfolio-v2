import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const createConnection = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected!! host:${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MongoDB Connection Failed!!",error)
        process.exit(1);
    }
}

export {createConnection}