import { ApiError } from "../../utils/ApiError.js"
import { ApiResponse } from "../../utils/ApiResponse.js"
import { asyncHandler } from "../../utils/asyncHandler.js"
import { Project } from "../models/project.model.js"


const create = asyncHandler(async(req,res)=>{
    const {title,description,tags,githubLink,liveLink} = req.body;
    if([title,description,githubLink].some(st=>st?.trim()==="")){
        throw new ApiError(400,"Some fields are missing")
    }
    if(!tags || tags.length == 0){
        throw new ApiError(400,"Add tags to your project")
    }
    const project = await Project.create(
        {
            title,
            description,
            tags,
            githubLink,
            liveLink:liveLink || ""
        }
    )
    if(!project){
        throw new ApiError(500,"Something went wrong. Project not added.")
    }
    return res
    .status(201)
    .json(new ApiResponse(201,[],"Project created successfully"))
})

const all = asyncHandler(async(req,res)=>{
    const projects = await Project.find({}).select("-__v")
    if(!projects){
        throw new ApiError(500,"Something went wrong")
    }
    return res
    .status(200)
    .json(new ApiResponse(200,projects,"projects fetched successfully"))
})


export {
    create,
    all,
}