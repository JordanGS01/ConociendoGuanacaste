import './CardPatrimonio.css'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWheelchair,faChildren, faPersonWalkingWithCane, faPersonCane} from '@fortawesome/free-solid-svg-icons';
export default function CardPatrimonio(props){
    const silla = props.silla;
    const nino= props.nino;
    const blind= props.blind;
    const anciano= props.anciano;
    return(  
    <Card id='Cantones' as={Link} to={props.link} style={{ width: '18rem' }} >
        <Card.Img  variant="top" src= {props.src} alt={`Imagen del paisaje de ${props.nombre}`}/>
        <Card.Body id='body'>
            <Card.Title >{props.nombre}</Card.Title>
            {props.descripcion}
            <div id='CardCuerpo'>
            <FontAwesomeIcon id='Icono' style={{ color: silla, fontSize: "40px" }} icon={faWheelchair} />
            <FontAwesomeIcon id='Icono' style={{ color: nino, fontSize: "40px"}} icon={faChildren} />
            <FontAwesomeIcon id='Icono' style={{ color: blind, fontSize: "40px"}} icon={faPersonWalkingWithCane} />
            <FontAwesomeIcon id='Icono' style={{ color: anciano, fontSize: "40px"}} icon={faPersonCane} />
            </div>
        </Card.Body>
    </Card>
    
    )
}