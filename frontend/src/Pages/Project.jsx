import React,{useState,useEffect} from 'react'

import ProjectCard from '../component/ProjectCard'
import { getAll } from '../utils/project.utils'
import toast from 'react-hot-toast'


function Project() {
  const [projects,setProjects] = useState([])
  useEffect(()=>{
    let isMounted = true
    const getProjects = async()=>{
      try{
        const res = await getAll()
        if(res.statusCode!==200){
          throw new Error(res.message)
        }
        if(isMounted){
          setProjects(res.data || [])
          toast.success(res.message)
        }
      }catch(error){
         if(isMounted)toast.error(error.message || "something went wrong") 
      }
    }
    getProjects()
    return ()=>{
      isMounted = false
    }
  },[])

  return (
    <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4 place-items-center'>
        {projects.map(project=><ProjectCard key={"project-" + project._id} project={project}/>)}
    </div>
  )
}

export default Project