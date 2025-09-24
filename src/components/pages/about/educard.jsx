import './eduCard.css'

export default function educard({nome,uni,data,lugar}){
    return(
        <div className="educard">
        <div className = "left">
        <p>{nome}</p>
        <p>{uni}</p>
        <p>{data}</p></div>
        <div className = "right">
        <p>{lugar}</p>
        </div>
        </div>
    );
}