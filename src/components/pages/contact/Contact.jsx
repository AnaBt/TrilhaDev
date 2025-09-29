import React from "react";
import "./contact.css";
import instagram from "../../../../public/insta32.png";
import linkedin from "../../../../public/linkedin32.png";
import local from "../../../../public/pin32.png";
import email from "../../../../public/mail32.png";

export default function Contact() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copiado: " + text);
    });
  };

  return (
    <section className="contactSection">
      <div className="contactHeader">
        <h1 className="title">
          <span className="roxo">&lt;</span> Get in Touch
          <span className="roxo2">/</span>
          <span className="roxo">&gt;</span>
        </h1>
        <p className="ProjectHeaderDescription">
          Have a project in mind or want to collaborate? I'd love to hear from
          you!
        </p>
      </div>

      <div className="formConectHolder">
        <form
          action="https://formsubmit.co/6d0415a84e58d390f6306ca20d5efd95"
          method="POST"
        >
          <input type="text" name="_honey" style={{ display: "none" }}></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input
            type="hidden"
            name="_next"
            value="https://anabt.github.io/TrilhaDev/success.html"
          />

          <div className="formCabecalho">
            <h3>Send me a message</h3>
            <p>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>
          </div>

          <label className="inputForm">
            <p>Name</p>
            <input
              className="nameInput"
              type="text"
              placeholder="John Snow"
              name="name"
            ></input>
          </label>

          <label className="inputForm">
            <p>Email</p>
            <input
              className="emailInput"
              type="email"
              placeholder="nome@example.com"
              name="email"
            ></input>
          </label>

          <label className="inputForm">
            <p>Subject</p>
            <input
              className="subjectInput"
              type="text"
              placeholder="I want a project!"
              name="subject"
              
            ></input>
          </label>
          <label className="inputForm">
            <p>Message</p>
            <textarea
              className="messageInput"
              placeholder=" I would like to discuss a project opportunity"
              name="message"
            ></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>

        <div className="connectCard">
          <div className="formCabecalho">
            <h3>Connect with me</h3>
            <p>You can also reach out to me directly through these channels.</p>
          </div>
          <a href="https://www.instagram.com/ana_bottega_/">
            {" "}
            <div className="socialInfo">
              <img src={instagram} alt = "logo instagram"></img>
              <div className="formCabecalho">
                <h3>Instagram</h3>
                <p>@ana_bottega</p>
              </div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/ana-julia-botega-a85169357/">
            {" "}
            <div className="socialInfo">
              <img src={linkedin} alt = "logo linkedin"></img>
              <div className="formCabecalho">
                <h3>Linkedin</h3>
                <p>Ana Julia Botega</p>
              </div>
            </div>
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleCopy("maluquicebotega@gmail.com");
            }}
          >
            <div className="socialInfo">
              <img src={email} alt = "logo email"></img>
              <div className="formCabecalho">
                <h3>Email</h3>
                <p>maluquicebotega@gmail.com</p>
              </div>
            </div>
          </a>

          <a href="https://www.google.com/maps/place/Florian%C3%B3polis,+State+of+Santa+Catarina/@-27.5712063,-48.7999411,10z/data=!3m1!4b1!4m6!3m5!1s0x9527394eb2c632d7:0x81bc550b6a04c746!8m2!3d-27.5968578!4d-48.5468118!16s%2Fg%2F11bc6xlppd?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D">
            <div className="socialInfo">
              <img src={local} alt = "pin de mapa"></img>
              <div className="formCabecalho">
                <h3>Current city</h3>
                <p>Floripra , BRA</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
