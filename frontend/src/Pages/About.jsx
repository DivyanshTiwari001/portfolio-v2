import React from 'react'


const intro = [
    <>Hello! I'm a Computer Science graduate from <strong>Madan Mohan Malaviya University of Technology (MMMUT)</strong> with a strong passion for <strong>software development</strong> and a huge interest in understanding how systems work under the hood. I completed my B.Tech with a <strong>CGPA of 9.35</strong> and enjoy building efficient, scalable applications that solve real-world problems.</>,
    <>I'm proficient in <strong>C/C++, Java, Python</strong>, and experienced with <strong>Node.js, Express.js, MongoDB</strong>, and <strong>SQL</strong>—tools I use to design robust server-side logic and APIs. My solid foundation in <strong>data structures and algorithms</strong> helps me write clean, optimized code and architect logical flows for complex systems. While I also work with frontend technologies like <strong>React</strong>, my curiosity naturally draws me to how things operate behind the scenes—whether it's API design, database interactions, or system-level performance.</>,
    <>Academically, I've secured <strong>AIR 1</strong> in <em>Programming in Modern C++</em> and <em>Multi-Core Computer Architecture</em>, and <strong>AIR 2</strong> in <em>Introduction to Machine Learning</em> through NPTEL. I'm also a <strong>Postman Certified Student Expert</strong>, reflecting my dedication to mastering modern development tools.</>,
    <>Outside tech, I enjoy <strong>yoga</strong>, <strong>chess</strong>, and <strong>basketball</strong>, which help me stay focused, strategic, and collaborative. I’m eager to build impactful systems and grow through meaningful challenge.</>

]

function About() {
  return (
    <div className='w-full flex flex-col items-center md:items-start md:flex-row justify-center mt-2 gap-x-10'>
        <div className='w-[200px]'>
            <img src="../../res/divyansh.jpeg" alt="" className='w-[200px] rounded-sm' />
        </div> 
        <div className='w-full p-5 md:w-[700px] md:p-0'>
            {intro.map((para,index)=>{
                return <p key={`para-${index}`} className='text-justify text-base leading-relaxed font-sans mb-2'>{para}</p>
            })}
        </div>
    </div>
  )
}

export default About