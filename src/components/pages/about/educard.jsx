import './eduCard.css'

export default function educard({nome,uni,data,lugar}){
    return(
        <div className="educard">
        <div className = "left">
        <p className = "nome">{nome}</p>
        <p className = "uni"> {uni}</p>
        <p className = "data">{data}</p></div>
        <div className = "right">
        <p  className = "lugar">{lugar}</p>
        </div>
        </div>
    );
}