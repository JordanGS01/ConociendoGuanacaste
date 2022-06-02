import './Texto.css'
export default function Texto(props){
    return(
     <div className='Texto-Card'>
        <h3>{props.titulo}</h3>
        <p>{props.contenido}</p>
     </div>
    )
}