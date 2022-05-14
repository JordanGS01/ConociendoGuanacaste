import './CardCantones.css'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
export default function CardCantones(props){
    return(
    <Card id='Cantones' as={Link} to={props.link} style={{ width: '18rem' }} >
        <Card.Img variant="top" src= {props.src} alt={`Imagen del paisaje de ${props.nombre}`}/>
        <Card.Body id='body'>
            <Card.Title >{props.nombre}</Card.Title>
            {props.descripcion}
        </Card.Body>
    </Card>
    
    )
}