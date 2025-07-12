import { ApiError } from "../../utils/ApiError.js"
import { ApiResponse } from "../../utils/ApiResponse.js"
import { asyncHandler } from "../../utils/asyncHandler.js"
import { Achievement } from "../models/achievement.model.js"


const create = asyncHandler(async(req,res)=>{
    const {title,description,date} = req.body

    if([title,description,date].some(st=>st?.trim() === "")){
        throw new ApiError(400,"All fields are mandatory")
    }

    const achievement = await Achievement.create({
        title,
        description,
        date
    })

    if(!achievement){
        throw new ApiError(500,"Something went wrong. Achievement not added.")
    }

    return res.status(201).json(new ApiResponse(201,[],"Achievement added successfully."))
})

const all = asyncHandler(async(req,res)=>{
    const achievements = await Achievement.find({})
    if(!achievements){
        throw new ApiError(500,"Something went wrong")
    }
    return res
    .status(200)
    .json(new ApiResponse(200,achievements,"achievements fetched successfully"))
})



export {create,all}