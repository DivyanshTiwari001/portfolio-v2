import jwt from "jsonwebtoken"
import { asyncHandler } from "../../utils/asyncHandler.js"
import { ApiError } from "../../utils/ApiError.js"

const verifyJWT = asyncHandler(async(req,res,next)=>{
    // 1. get the token
    // 2. check the token -> if valid -> pass the req  else throw invalid token error
    const token = req.cookies?.authorizationToken
    if(!token){
        throw new ApiError(401,"Unauthorized : No token provided")
    }
    try {
        const verifiedToken = await jwt.verify(token,process.env.JWT_SECRET)
        req.user = verifiedToken
        next();
    }catch(err){
        throw new ApiError(401,"Unauthorized: Invalid or expired token")
    }   
})

export {verifyJWT}