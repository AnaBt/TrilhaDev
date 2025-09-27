import instagram from "../../../public/insta.png";
import linkedin from "../../../public/linkedin.png";
import git from "../../../public/git.png";

//<h1>&lt;AB /&gt;</h1>
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footerAboveLine">
        <div className="nameFooter">
          <p className="myNameinFooter">Ana Julia Botega</p>
          <p className="subtexto">
            Full Stack Developer & Machine Learning<br></br> Enthusiast based in
            Boston, specialized in creating <br></br>modern web applications and
            blockchain solutions.
          </p>
        </div>

        <div className="footerSocial">
          <p>Conect with Me!</p>
          <div className="footerLogos">
            <a href="https://www.instagram.com/ana_bottega_/">
              <img src={instagram}></img>
            </a>
            <a href="https://www.linkedin.com/in/ana-julia-botega-a85169357/">
              <img src={linkedin}></img>
            </a>
            <a href="https://github.com/AnaBt">
              <img src={git}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footerUnderLine">
        <p className="subtexto">© Ana Julia Botega. All rights reserved</p>
        <p className="subtexto">Build with ‪‪❤︎‬ using React and JS</p>
      </div>
    </footer>
  );
}
