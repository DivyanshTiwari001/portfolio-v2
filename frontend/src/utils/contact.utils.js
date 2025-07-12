import axios from "axios";
import FingerprintJS from '@fingerprintjs/fingerprintjs'


const baseUrl = import.meta.env.VITE_BASE_URL


const computeFingerPrint = async()=>{
    const fp = await FingerprintJS.load()
    const result = await fp.get()
    return result.visitorId
}

const sendMail = async({name,email,message})=>{
    if(!name || !email || !message){
        throw Error("All fields are required")
    }
    const url = baseUrl + '/contact'
    const visitorId = await computeFingerPrint()
    const res  = await axios.post(url,{name,email,message,visitorId});
    return res.data
}

export {sendMail}