import React, { useState } from 'react'
import * as z from "zod/v4"
import { sendMail } from '../utils/contact.utils.js';
import toast from 'react-hot-toast';

const contactSchema = z.object({
    name:z.string().min(3,"Name is required"),
    email:z.email("Enter a valid email"),
    message:z.string().min(1,"Message is required")
})

function extractErrorMessage(err) {
  try {
    const parsed = JSON.parse(err.message);
    return parsed[0]?.message || err.message;
  } catch {
    return err.message;
  }
}


function Contact() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [disable,setDisable] = useState(false);


  const handleSubmit = async(e)=>{
    e.preventDefault();
    setDisable(true);
    const formData = {name,email,message}
    try{
        const parsedFormData = contactSchema.parse(formData);
        const res = await sendMail(parsedFormData)
        console.log(res)
        if(res.statusCode === 200){
            toast.success(res.message,{duration:2000})
            setName("")
            setEmail("")
            setMessage("")
        }
    }catch(e){
        toast.error(extractErrorMessage(e))
    }
    finally{
      setDisable(false)
    }
  }

  return (
    <div className='w-full flex flex-col justify-center items-center sm:p-0 p-4'>
        <div className='max-w-[500px] w-full h-[350px] flex flex-col items-center bg-black gap-5 rounded-md shadow-xl'>
        <h1 className='text-2xl text-white font-bold font-serif mt-2'>Contact Me</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-y-5 w-full'>
            <input type="text" className='w-[80%] h-[40px] bg-white text-md outline-0 rounded-sm p-2' placeholder='Name'
            value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="email" className='w-[80%] h-[40px] bg-white text-md outline-0 rounded-sm p-2' placeholder='Email'
            value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <textarea className='w-[80%] h-[100px] bg-white text-md outline-0 rounded-sm p-2' placeholder='Message'
            value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
            <button
            className={`px-6 py-2 rounded-md text-black font-serif font-bold border-2 transition-all duration-300 shadow-md
            ${disable ? 'bg-gray-300 border-gray-300 cursor-not-allowed' : 'bg-white border-white hover:bg-[#ccc] hover:border-black'}`}
            disabled={disable} aria-disabled={disable}>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Contact