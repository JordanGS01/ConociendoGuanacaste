import './Texto.css'
import Card from 'react-bootstrap/Card'
export default function Texto(props){
    return(
     <div className='Card'>
        <h5>{props.titulo}</h5>
        <p>{props.contenido}</p>

     </div>
    )
}