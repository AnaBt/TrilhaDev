import React from 'react'
import './contact.css'
import instagram from "../../../../public/insta32.png"
import linkedin from "../../../../public/linkedin32.png"
import local from "../../../../public/pin32.png"
import email from "../../../../public/mail32.png"

export default function Contact() {
  return (
    <section className = "contactSection">
      <div className = "contactHeader">
       <h1 className='title'><span className='roxo'>&lt;</span> Get in Touch<span className='roxo2'>/</span><span className='roxo'>&gt;</span></h1>
      <p className='ProjectHeaderDescription'>Have a project in mind or want to collaborate? I'd love to hear from you!</p>
      </div>

      <div className = "formConectHolder">
      <form action="https://formsubmit.co/6d0415a84e58d390f6306ca20d5efd95" method="POST">
        <div className = "formCabecalho">
          <h3>Send me a message</h3>
          <p>Fill out the form below and I'll get back to you as soon as possible.</p>
        </div>
        <div className = "inputForm"><p>Name</p><input className = "nameInput" type = "text" placeholder='John Snow'></input></div>
        <div className = "inputForm"><p>Email</p><input className = "emailInput" type = "email" placeholder='nome@example.com'></input></div>
        <div className = "inputForm"><p>Subject</p><input className = "subjectInput" type = "text" placeholder='I want a project!'></input></div>
        <div className = "inputForm"><p>Message</p><textarea className = "messageInput" type = "text" placeholder=' I would like to discuss a project opportunity'></textarea></div>
        < button type="submit">Send Message</button>
      </form>

      <div className = "connectCard">

        <div className = "formCabecalho">
          <h3>Connect with me</h3>
          <p>You can also reach out to me directly through these channels.</p>
          <div className = "socialInfo">
            <img src = {instagram}></img>
            <div className = "formCabecalho">
            <h3>Instagram</h3>
            <p>@ana_bottega</p>
          </div>
          </div>
          </div>

         <div className = "socialInfo">
            <img src = {linkedin}></img>
            <div className = "formCabecalho">
            <h3>Linkedin</h3>
            <p>Ana Julia Botega</p>
          </div>
          </div>

          <div className = "socialInfo">
            <img src = {email}></img>
            <div className = "formCabecalho">
            <h3>Email</h3>
            <p>maluquicebotega@gmail.com</p>
          </div>
          </div>

            <div className = "socialInfo">
              <img src = {local}></img>
              <div className = "formCabecalho">
              <h3>Current city</h3>
              <p>Floripra , BRA</p>
            </div>
          </div>

        </div>
        </div>
    </section>
  )
}


