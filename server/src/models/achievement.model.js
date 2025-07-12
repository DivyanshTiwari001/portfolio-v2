import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        }       
    }
);

export const Achievement = mongoose.model('Achievement',achievementSchema);