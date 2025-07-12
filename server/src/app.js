import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express()

const options = {
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}

app.use(cors(options))
app.use(cookieParser())
app.use(express.json({limit:"10kb"}))


app.use((req,res,next)=>{
    if(process.env.PROD_ENV==="production" && req.headers['x-forwaded-proto']!=='https'){
        return res.redirect(`https://${req.headers.host}${req.url}`)
    }
    next()
})


app.get("/health-check",(req,res)=>{
    res.send("Everything is fine")
})

// user routes
import projectRouter from './routes/project.routes.js'
import achievementRouter from './routes/achievement.routes.js'
import contactRouter from './routes/contact.routes.js'
import adminRouter from './routes/admin.routes.js'

app.use("/api/v1/project",projectRouter);
app.use("/api/v1/achievement",achievementRouter);
app.use("/api/v1/contact",contactRouter);
app.use("/api/v1/admin",adminRouter);















