import './Texto.css'
export default function Texto(props){
    return(
     <div className='Texto-Card'>
        <h5>{props.titulo}</h5>
        <p>{props.contenido}</p>
     </div>
    )
}