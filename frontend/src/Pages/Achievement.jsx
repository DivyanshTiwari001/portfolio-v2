import React ,{useState,useEffect} from 'react'
import AcheivementCard from '../component/AcheivementCard'
import toast from 'react-hot-toast'
import { getAll } from '../utils/achievement.util'

function Achievement() {

  const [achievements,setAchievements] = useState([])
    useEffect(()=>{
      let isMounted = true;
      const getAchievements = async()=>{
        try{
          const res = await getAll()
          if(res.statusCode!==200){
            throw new Error(res.message)
          }
          if(isMounted){
            setAchievements(res.data || [])
            toast.success(res.message)
          }
        }catch(error){
           if(isMounted) toast.error(error.message || "something went wrong") 
        }
      }
      getAchievements()
      return ()=>{
        isMounted = false
      }
    },[])

  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4 place-items-center'>
       {
        achievements.map(achievement=><AcheivementCard key={"achievement-" + achievement._id} achievement={achievement}/>)
       }
    </div>
  )
}

export default Achievement