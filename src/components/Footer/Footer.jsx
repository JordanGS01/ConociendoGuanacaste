import './Footer.css'
import Card from 'react-bootstrap/Card'
import cgLogo from '../../images/cgLogo.png'
export default function Footer(){
    return(
        <footer>
            <Card>
            <Card.Footer><img className='images' src={cgLogo} /></Card.Footer>
            <Card.Body >  
                <Card.Text>
                      ©ConociendoGuanacaste, Inc. 2022. 
                </Card.Text>
                <Card.Text>
                Correo electrónico: ConociendomiGuanacaste@gmai.com
                </Card.Text>
                <Card.Text>
                Contacto directo: 506 2495 0972
                </Card.Text>
                
            </Card.Body>
            </Card>
        </footer>
    )
}