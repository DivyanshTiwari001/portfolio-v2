import bcrypt from "bcrypt"
import readline from "node:readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',(plainPassword)=>{
    const salt = 10
    bcrypt.hash(plainPassword,salt,(err,hashedPassword)=>{
        console.log(hashedPassword)
    })
    rl.close()
})



