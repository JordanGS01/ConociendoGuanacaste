import './CardZonasVerdes.css'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import google from '../../images/googlemaps.png'
import waze from '../../images/waze.png'

export default function CardCantones(props){
        return(
    <Card id='ZonasVerdes' style={{ width: '18rem' }} >
        <Card.Img  variant="top" src= {props.src} alt={`Imagen del paisaje de ${props.nombre}`}/>
        <Card.Body id='body'>
            <Card.Title >{props.nombre}</Card.Title>
            {props.descripcion}
            <div className="imagenesContainer">
                <a href={props.ubicacion.linkgoogle} target="_blank">
                    <img className='imagenCardZonasVerdes' src={google} />
                </a>
                <a href={props.ubicacion.linkwaze} target="_blank">
                    <img className='imagenCardZonasVerdes' src={waze} />
                </a>
            </div>
        </Card.Body>
    </Card>
    )
}