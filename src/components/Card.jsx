import './cards.css'

export default function Card({nome,descricao,foto,linkGit}){
    return(
        <div className = "card">
        <img className = "card_img"src = {foto}></img>
        <h3 className = "title">{nome}</h3>
        <p className = "description">{descricao}</p>
        <a href = {linkGit}></a>
        </div>
    );
}