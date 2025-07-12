import { ApiError } from "../../utils/ApiError.js"
import { ApiResponse } from "../../utils/ApiResponse.js"
import { asyncHandler } from "../../utils/asyncHandler.js"
import validator from "validator"
import { canSubmitForm } from "../../utils/rateLimiter.js"
import { Contact } from "../models/contact.model.js"

const create = asyncHandler(async(req,res)=>{
    const {name,email,message,visitorId} = req.body
    if([name,email,message].some(st=>st?.trim()==="")){
        throw new ApiError(400,"Bad Request : All fields are required")
    }

    if(!validator.isEmail(email)){
        throw new ApiError(400,"Bad Request: Email is invalid")
    }

    if(!visitorId){
        throw new ApiError(400,"Bad Request: Can't send message.")
    }

    const isAllowed = await canSubmitForm(visitorId)


    if(!isAllowed){
        return res.status(200).json(new ApiResponse(200,{},"Oops! Looks like you already sent me a message recently. Give me 12 hours to catch up, and then feel free to reach out again. 😊"))
    }

    const data = await Contact.create({
        name,
        email,
        message
    });
    
    if(!data){
        throw new ApiError(500, "Message not sent")
    }

    return res.status(200).json(new ApiResponse(200,{},"Thank you for reaching out. I'll get back to you shortly."))
})

const all = asyncHandler(async(req,res)=>{
    const data = await Contact.find({})
    if(!data){
        throw new ApiError(500,"Something went wrong")
    }
    return res.status(200).json(new ApiResponse(200,data,"Messages fetched successfully"))
})


export {
    create,
    all
}