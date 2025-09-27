import React from "react";
import Card from "../../card/Card";
import "./projects.css";
import exemplo from "../../../../public/projeto.webp";
export default function Projects() {
  return (
    <section className="projects_section">
      <h1 className="title">
        <span className="roxo">&lt;</span> My projects
        <span className="roxo2">/</span>
        <span className="roxo">&gt;</span>
      </h1>
      <p className="ProjectHeaderDescription">
        A show case of my work across teclonogies
      </p>

      <div className="cardHolder">
        <Card
          nome="Projeto 1"
          descricao="This project aims to develop a [web/mobile/desktop] application that provides an intuitive"
          foto={exemplo}
          linkGit="https://github.com/AnaBt/Concorrente"
        />

        <Card
          nome="Projeto 1"
          descricao="This project aims to develop a [web/mobile/desktop] application that provides an intuitive ]"
          foto={exemplo}
          linkGit="https://github.com/AnaBt/Concorrente"
        />
        <Card
          nome="Projeto 1"
          descricao="This project aims to develop a [web/mobile/desktop] application that provides an intuitive "
          foto={exemplo}
          linkGit="https://github.com/AnaBt/Concorrente"
        />

        <Card
          nome="Projeto 1"
          descricao="This project aims to develop a [web/mobile/desktop] application that provides an intuitive"
          foto={exemplo}
          linkGit="https://github.com/AnaBt/Concorrente"
        />
      </div>
    </section>
  );
}
