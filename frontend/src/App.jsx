import { useState } from 'react'
import {Outlet,NavLink,Link} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='w-screen h-screen flex flex-col items-center'>
      <Toaster
         position="top-center"
        reverseOrder={false}
      />
      <div className='w-full md:w-[80%] h-fit mt-2 md:mt-10 flex-col'>
        {/* introduction */}
        <h1 className='text-4xl md:text-6xl font-serif pl-4 sm:pl-0'>Divyansh Tiwari</h1>
        <h3 className='text-xl mt-1 font-serif pl-4 sm:pl-0'>Software Engineer | Backend Engineer</h3>

        {/* nav  */}
        <div className='mt-5 w-full flex flex-row justify-center'>
          <ul className = "w-fit sm:w-full flex flex-row items-start border-2 border-gray-300 text-sm @min-[415px]:text-base md:text-xl cursor-pointer font-serif">
          <NavLink  to='/' className={({isActive})=>isActive?'bg-black text-white hover:bg-gray-300 hover:text-black ' : 'bg-white text-black hover:bg-gray-300'}>
            <li className='border-r-2 p-2 border-gray-300'>
              About
            </li>
          </NavLink>
          <NavLink  to='/achievements' className={({isActive})=>isActive?'bg-black text-white hover:bg-gray-300 hover:text-black ' : 'bg-white text-black hover:bg-gray-300'}>
            <li className='border-r-2 p-2 border-gray-300'>
              Achievements
            </li>
          </NavLink>
          <NavLink  to='/blogs' className={({isActive})=>isActive?'bg-black text-white hover:bg-gray-300 hover:text-black ' : 'bg-white text-black hover:bg-gray-300'}>
            <li className='border-r-2 p-2 border-gray-300'>
              Blogs
            </li>
          </NavLink>
          <NavLink  to='/projects' className={({isActive})=>isActive?'bg-black text-white hover:bg-gray-300 hover:text-black ' : 'bg-white text-black hover:bg-gray-300'}>
            <li className='border-r-2 p-2 border-gray-300'>
              Projects
            </li>
          </NavLink>
          <NavLink  to='/contact-me' className={({isActive})=>isActive?'bg-black text-white hover:bg-gray-300 hover:text-black ' : 'bg-white text-black hover:bg-gray-300'}>
            <li className='border-r-2 p-2 border-gray-300'>
              Contact Me
            </li>
          </NavLink>
        
          </ul>
        </div>
        <div className='mt-5 w-full'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default App
