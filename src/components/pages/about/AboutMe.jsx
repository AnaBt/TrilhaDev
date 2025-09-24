import React from 'react'
import './about.css'
import Educard from './educard'
export default function AboutMe() {
  return (
  <div className='about'>
  <div className = "aboutHeader">
    <h1>About Me</h1>
    <p>description</p>
  </div>

    <div className = "aboutContent">
      <div className = "aboutleft">

    <div className = "whoiam">
      <h2>Who I am</h2>
      <p>I'm Ana, a Full Stack Developer with a passion for creating innovative web applications and exploring blockchain technologies. I'm currently pursuing a Master's in Computer Science at Northeastern University, where I continue to expand my knowledge and skills.<br></br><br></br>
    With expertise in Next.js, React, and various blockchain technologies, I enjoy building scalable and user-friendly applications that solve real-world problems. My background in computer science has given me a strong foundation in algorithms, data structures, and system design, which I apply to create efficient and maintainable code.<br></br><br></br>
    I'm particularly interested in the intersection of web development and blockchain technology, where I've developed several projects that leverage the power of decentralized systems to create secure and transparent applications.</p>
    </div>

    <div className = "journey">
      <h2>Journey</h2>
      <Educard
       nome = "Bachelor of Science in Computer Science"
       uni = "UFSC" 
       data = "January 2025 - May 2027"
       lugar = "Florianopolis - Brasil" />
  
      <Educard
       nome = "Bachelor of Science in Computer Science"
       uni = "UFSC" 
       data = "January 2025 - May 2027"
       lugar = "Florianopolis - Brasil" />
    </div>
    </div>


    <div className = "aboutright">
      
      <section className = "skills">
        <h2>Skills</h2>
        <h3>Languages</h3>
        <ul>
              {[
           "java" , "python" , "c++" , "R" , "Go" , "TypeCript" , 
           "java" , "python" , "c++" , "R" , "Go" , "TypeCript" , 
           "java" , "python"
        ].map((item) => (
                <li className = "itemSkill">{item}</li>
              ))}
              </ul>
      </section>
    </div>
    
    </div>
    </div>
  )
}

