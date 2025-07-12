import React from 'react'
import { Github, ExternalLink } from 'lucide-react';



function ProjectCard({project}) {
  return (
    <div className='bg-white border border-[#e0e0e0] rounded-lg p-6 max-w-[400px] w-full h-[320px] shadow-md transition duration-200 ease-in-out hover:-translate-y-[2px] hover:shadow-lg flex flex-col'>
     <h3 className='text-xl font-semibold text-black text-justify mb-2 leading-[1.3]'>{project.title}</h3>
     <p className='text-justify text-[#666666] text-[0.9rem] leading-[1.5] mb-4 flex-grow'>{project.description}</p>
     {/* tags */}
     <div className='flex flex-row flex-wrap flex-grow justify-start gap-x-3 gap-y-1 mb-5'>
        {project.tags.map(tag=>{
            return <p key={tag} className="border-2 font-bold font-mono rounded-md border-black bg-white text-black text-sm h-fit min-w-[50px] p-1 flex flex-col justify-center items-center">{tag}</p>
        })}
     </div>
      {/* Links */}
      <div className="flex items-center gap-8">
        <a 
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-black hover:text-gray-400 transition-colors duration-300"
        >
          <Github className="w-4 h-4" />
          <span className="text-sm uppercase tracking-wider font-light">
            Code
          </span>
        </a>
        
        <a 
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-black hover:text-gray-400 transition-colors duration-300"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="text-sm uppercase tracking-wider font-light">
            Demo
          </span>
        </a>
      </div>
  </div>
  )
}

export default ProjectCard