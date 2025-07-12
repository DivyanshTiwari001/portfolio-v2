import "dotenv/config"
import { createConnection } from "./db/index.js"
import { app } from "./app.js"
import http from "http"


createConnection()
.then(
    ()=>{
        const port = process.env.PORT
        const server = http.createServer(app)
        server.on("error",(err)=>{
            console.log("ERR : ",err)
        })
        server.listen(port,()=>{console.log(`Server is listening on PORT : ${port} `)})
    }
)

