import './Footer.css'
import Card from 'react-bootstrap/Card'
import cgLogo from '../../images/cgLogo.png'
export default function Footer(){
    return(
        <footer>
            <Card border='light'>            
            <img className='Footer-image' src={cgLogo} />                            
            <hr/>
            <Card.Body >
                <Card.Text>
                      <small>©ConociendoGuanacaste, Inc. 2022. </small>
                </Card.Text>
                <Card.Text>
                    <small>Correo electrónico:</small>
                    <br/>
                    <small>ConociendomiGuanacaste@gmai.com</small>
                </Card.Text>
                <Card.Text>
                    <small>Contacto directo:</small>
                    <br/>
                    <small>506 2495 0972</small>
                </Card.Text>                
            </Card.Body>
            </Card>
        </footer>
    )
}