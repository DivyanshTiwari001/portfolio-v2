import React,{useState} from 'react'




function AcheivementCard({achievement}) {
  const [flipped,setFlipped] = useState(false)

  return (
    <div className='bg-white border border-[#e0e0e0] rounded-lg p-6 max-w-[400px] w-full h-[300px] shadow-md transition duration-200 ease-in-out hover:-translate-y-[2px] hover:shadow-lg flex flex-col' 
    onClick={()=>setFlipped(prev=>!prev)}
    onMouseEnter={()=>{
      setFlipped(true)
    }}
    onMouseLeave={()=>{
      setFlipped(false)
    }}
    >
    {!flipped ?<> <div
      className='w-[80px] h-[80px] bg-black rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold ' 
      >🏆</div>
      <h3 className='text-xl font-semibold text-black text-center mb-2 leading-[1.3]'>{achievement.title}</h3>
      <p className='text-center text-[#999999] text-[0.8rem] italic border-t border-[#f0f0f0] pt-3'>{achievement.date}</p>
      </>
     :
     <p className='text-center text-[#666666] text-[0.9rem] leading-[1.5] mb-4 w-full h-full'>{achievement.description}</p>
     }
  </div>
  )
}

export default AcheivementCard