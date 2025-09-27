import React from "react";
import "./about.css";
import Educard from "./educard";
import ScrollCard from "../../scrollCard/scroll";
import trofeu from "../../../../public/trofeu24.png";
export default function AboutMe() {
  return (
    <div className="about">
      <div className="aboutHeader">
        <h1>
          <span className="roxo">&lt;</span> About Me
          <span className="roxo2">/</span>
          <span className="roxo">&gt;</span>
        </h1>
        <p>Get to know more about my background and skills</p>
      </div>

      <div className="aboutContent">
        <div className="aboutleft">
          <div className="whoiam">
            <h2>Who I am</h2>
            <p>
              I'm Ana, a Full Stack Developer with a passion for creating
              innovative web applications and exploring blockchain technologies.
              I'm currently pursuing a Master's in Computer Science at
              Northeastern University, where I continue to expand my knowledge
              and skills.<br></br>
              <br></br>
              With expertise in Next.js, React, and various blockchain
              technologies, I enjoy building scalable and user-friendly
              applications that solve real-world problems. My background in
              computer science has given me a strong foundation in algorithms,
              data structures, and system design, which I apply to create
              efficient and maintainable code.<br></br>
              <br></br>
              I'm particularly interested in the intersection of web development
              and blockchain technology, where I've developed several projects
              that leverage the power of decentralized systems to create secure
              and transparent applications.
            </p>
          </div>

          <div className="journey">
            <h2>Journey</h2>
            <Educard
              nome="Bachelor of Science in Computer Science"
              uni="UFSC"
              data="January 2025 - May 2027"
              lugar="Florianopolis - Brasil"
            />

            <Educard
              nome="Master in Science"
              uni="Yale"
              data="January 2028 - May 2021"
              lugar="California - EUA"
            />
            <Educard
              nome="Master in Science"
              uni="Yale"
              data="January 2028 - May 2021"
              lugar="California - EUA"
            />
          </div>
        </div>

        <div className="aboutright">
          <section className="skills">
            <h2>Skills</h2>
            <div className="languages">
              <h3>Languages</h3>
              <ul>
                {[
                  "Java",
                  "Python",
                  "C",
                  "C++",
                  "C#",
                  "Go",
                  "Rust",
                  "Kotlin",
                  "Swift",
                  "TypeScript",
                  "JavaScript",
                  "PHP",
                  "Ruby",
                  "Perl",
                  "R",
                  "Scala",
                  "Haskell",
                  "Elixir",
                  "Dart",
                  "Lua",
                  "Objective-C",
                  "MATLAB",
                  "Julia",
                  "Fortran",
                  "Assembly",
                ].map((item) => (
                  <li className="itemSkill">{item}</li>
                ))}
              </ul>
            </div>
            <div className="languages">
              <h3>Frameworks/libraries</h3>
              <ul>
                {[
                  "React",
                  "Angular",
                  "Vue",
                  "Svelte",
                  "Next.js",
                  "Nuxt.js",
                  "Express",
                  "Django",
                  "Flask",
                  "Spring",
                  "Laravel",
                  "Ruby on Rails",
                  "ASP.NET",
                  "FastAPI",
                  "NestJS",
                  "ASP.NET",
                  "FastAPI",
                  "NestJS",
                ].map((item) => (
                  <li className="itemSkill">{item}</li>
                ))}
              </ul>
            </div>
          </section>
          <div className="achiv">
            <h2>Achievements</h2>
            <ScrollCard />
          </div>
        </div>
      </div>
    </div>
  );
}
