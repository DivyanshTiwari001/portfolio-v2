import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



const login = asyncHandler(async(req,res)=>{
    // 1.take user id and password
    // match user id and check if password matches hashed password
    // if matched return token 
    // else throw error and invalidate login
    const {userId,password} = req.body

    if(!userId || !password){
        throw new ApiError(401,"Unauthorized: userid and password are required.")
    }

    if(userId !== process.env.USERID){
        throw new ApiError(401,"Unauthorized: Invalid login credentials")
    }

    const matched = await bcrypt.compare(password,process.env.HASHED_PASSWORD)

    if(!matched){
        throw new ApiError(401,"Unautorized: Invalid login credentials")
    }

    const token = await jwt.sign({role:"admin"},process.env.JWT_SECRET,{expiresIn:process.env.JWT_SECRET_EXPIRY})

    const options = {
        httpOnly:true,
        secure:true,
        sameSite:"None" //for cros origin
    }
    return res.status(200).cookie("authorizationToken",token,options).json(new ApiResponse(200,{},"Admin logged in successfully."))
    
})

const logout = asyncHandler(async(req,res)=>{
    const options = {
        httpOnly:true,
        secure:true,
        sameSite:"None"
    }
    return res.status(200).clearCookie("authorizationToken",options).json(new ApiResponse(200,{},"Admin logged out successfully."))
})


export {login,logout}