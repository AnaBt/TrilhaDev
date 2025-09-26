import './cards.css'
import git_logo from '../../assets/logo.png'

export default function Card({nome,descricao,foto,linkGit}){
    return(
        <div className = "card">
        <img className = "card_img"src = {foto}></img>
        <div className='info'>
        <h3 className = "titleCard">{nome}</h3>
        <p className = "description">{descricao}</p>
        <p className = "arrowInfo">➜Um otimo projeto , um otimo projeto , um otimo projeto</p>
         <p className = "arrowInfo">➜Um otimo projeto , um otimo projeto , um otimo projeto</p>
        <div className = "cardFooter">
        <button>See More ➜</button>
        <a href = {linkGit}><img src = {git_logo}></img></a>
        </div>
        </div>
        </div>
    );
}