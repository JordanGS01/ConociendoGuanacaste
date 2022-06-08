
import cgLogo from '../../images/cgLogo.png'

import './TopNavBar.css'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { obtenerUserLog ,logOut } from '../../database/firebase';
import { useEffect, useState } from 'react';

export default function TopNavBar(props) {
  const [userIn, setUserIn] = useState(false)

  function logOutUser(){
    logOut()
    setUserIn(false);
  }

  useEffect(() => {
    setUserIn(obtenerUserLog())
  }, [userIn])
  

  
  return (    
    <Navbar variant="dark" className='TNV-Container'>
      <Container>
        <Navbar.Brand><img src={cgLogo} /></Navbar.Brand>
        <Nav className="justify-content-center flex-grow-1">          
          {props.hasOwnProperty("conocenos")?
            <Nav.Link as={Link} to='/' eventKey='conocenos' active>Conócenos</Nav.Link>
            :
            <Nav.Link as={Link} to='/' eventKey='conocenos'>Conócenos</Nav.Link>
          }
          {props.hasOwnProperty("cantones")?
            <Nav.Link as={Link} to='/Cantones' eventKey='cantones' className='mx-3' active>Cantones</Nav.Link>
            :
            <Nav.Link as={Link} to='/Cantones' eventKey='cantones' className='mx-3'>Cantones</Nav.Link>
          }
          {props.hasOwnProperty("zonasVerdes")?
            <Nav.Link as={Link} to='/ZonasVerdes' eventKey='zonasVerdes' active>Zonas verdes</Nav.Link>
            :
            <Nav.Link as={Link} to='/ZonasVerdes' eventKey='zonasVerdes'>Zonas verdes</Nav.Link>
          }
        </Nav>
        {!userIn?
          <>
            {props.hasOwnProperty("login")?
              <Button as={Link} to='/LogIn' variant="success" active>Ingresar</Button>
              :
              <Button as={Link} to='/LogIn' variant="success">Ingresar</Button>
            }
            {props.hasOwnProperty("registro")?
              <Button as={Link} to='/Registro' variant="success" className='TNV-Button' active>Registrarse</Button>
              :
              <Button as={Link} to='/Registro' variant="success" className='TNV-Button'>Registrarse</Button>
            }
          </>
          :
          <><Button as={Link} to='/' variant="success" onClick={logOutUser}>Cerrar sesión</Button></>
        }
      </Container>
    </Navbar>    
  );
}