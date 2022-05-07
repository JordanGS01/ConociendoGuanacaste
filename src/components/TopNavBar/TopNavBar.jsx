
import cgLogo from '../../images/cgLogo.png'

import './TopNavBar.css'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TopNavBar() {
  return (    
    <Navbar variant="dark" className='TNV-Container'>
      <Container>
        <Navbar.Brand><img src={cgLogo} /></Navbar.Brand>
        <Nav className="justify-content-center flex-grow-1">          
          <Nav.Link as={Link} to='/' eventKey='conocenos'>Conócenos</Nav.Link>
          <Nav.Link as={Link} to='/Cantones' eventKey='cantones' className='mx-3'>Cantones</Nav.Link>
          <Nav.Link as={Link} to='/ZonasVerdes' eventKey='zonasVerdes'>Zonas verdes</Nav.Link>          
        </Nav>      
        <Button as={Link} to='/LogIn' variant="success">Ingresar</Button>
        <Button as={Link} to='/Registro' variant="success" className='TNV-Button'>Registrarse</Button>      
      </Container>
    </Navbar>    
  );
}
