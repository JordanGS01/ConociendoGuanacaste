import './Comentario.css'


export default function Comentario(props){

    return(
        <div className='Comentario-Container'>
            <h4 className='Comentario-NombreUsuario'>{props.nombreUsuario}</h4>
            <p className='Comentario-Comentario'>{props.comentario}</p>
        </div>
    )
}