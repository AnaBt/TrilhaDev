import React from "react";
import anaJulia from "../../../assets/eu.png";
import About from "../about/AboutMe";
import "./home.css";
export default function Home() {
  return (
    <>
      <header className="homePage">
        <section className="hero">
          <div className="hero-text">
            <h1>
              Hello, I'm <span className="primeira-palavra">Ana</span> <br></br>
              computer science<br></br>
              student from Brazil!
            </h1>
            <p>
              I’m fascinated by problem-solving, programming, and creating
              projects that <br></br>connect people with technologys in
              meaningful ways. Here you’ll find some <br></br>of my work as I
              keep learning, experimenting, and shaping my path in tech.
            </p>
            <div className="hero-buttons">
              <button className="HireMeButton">Hire Me</button>
              <button className="CVbutton">Download CV ➝</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={anaJulia} alt="Foto de perfil" />
          </div>
        </section>
      </header>
      <About />
    </>
  );
}
