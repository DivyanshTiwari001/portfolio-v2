import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL

export const getAll = async()=>{
    const url = baseUrl + '/project'
    const res = await axios.get(url)
    return res.data
} 