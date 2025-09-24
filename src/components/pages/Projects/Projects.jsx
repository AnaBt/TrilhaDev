import React from 'react'
import Card from '../../Card'
import './projects.css'
import exemplo from '../../../assets/learning1.jpeg'
export default function Projects() {

  return (
    <section className = "projects_section">
    <h1 className='title'>My Projects</h1>
    <p>A show case of my work across teclonogies</p>

    <div className = "cardHolder">
      <Card 
      nome = "Projeto 1" 
      descricao = "This project aims to develop a [web/mobile/desktop] application that provides an intuitive ]"
      foto = {exemplo}
      linkGit= "https://www.notion.so/React-site-portfolio-27234c3a8fdc809a8b85ffd449b44bf4"/>
      <Card 
      nome = "Projeto 1" 
      descricao = "This project aims to develop a [web/mobile/desktop] application that provides an intuitive "
      foto = {exemplo}
      linkGit= "https://www.notion.so/React-site-portfolio-27234c3a8fdc809a8b85ffd449b44bf4"/>
      
      <Card 
      nome = "Projeto 1" 
      descricao = "This project aims to develop a [web/mobile/desktop] application that provides an intuitive"
      foto = {exemplo}
      linkGit= "https://www.notion.so/React-site-portfolio-27234c3a8fdc809a8b85ffd449b44bf4"/>

       <Card 
      nome = "Projeto 1" 
      descricao = "This project aims to develop a [web/mobile/desktop] application that provides an intuitive ]"
      foto = {exemplo}
      linkGit= "https://www.notion.so/React-site-portfolio-27234c3a8fdc809a8b85ffd449b44bf4"/>
      <Card 
      nome = "Projeto 1" 
      descricao = "This project aims to develop a [web/mobile/desktop] application that provides an intuitive "
      foto = {exemplo}
      linkGit= "https://www.notion.so/React-site-portfolio-27234c3a8fdc809a8b85ffd449b44bf4"/>
      
      <Card 
      nome = "Projeto 1" 
      descricao = "This project aims to develop a [web/mobile/desktop] application that provides an intuitive"
      foto = {exemplo}
      linkGit= "https://www.notion.so/React-site-portfolio-27234c3a8fdc809a8b85ffd449b44bf4"/>
      
    </div>
    </section>
  )
}  

