// This rate limiter is meant to prevent users from submitting multiple contact forms within 12 hrs

import {createClient} from "redis"

const redisClient = createClient({
    url:process.env.REDIS_URL
})
redisClient.connect().catch(console.error)

const hours = 12
const seconds = hours*60*60

export const canSubmitForm = async (visitorId)=>{
    const redisKey = `contact_form:${visitorId}`
    const exists = await redisClient.exists(redisKey)

    if(!exists){
        await redisClient.set(redisKey,"submitted",{EX:seconds})
        return true
    }
    return false
}