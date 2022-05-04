import './TopNavBar.css';

import { Link } from 'react-router-dom';
import cgLogo from '../../images/cgLogo.png'

export default function TopNavBar() {
  return (
    <div className="TopNavBarContainer">      
      <img src={cgLogo} />
      
      <nav className='navButtonsContainer'>
        <button>Página principal</button>
        <button>Cantones</button>
        <button>Zonas verdes</button>
      </nav>

      <div className='logIngOutRegisterContainer'>
        <button id='botonIngresar'>Ingresar</button>
        <button id='botonRegistrarse'>Registrarse</button>
      </div>
    </div>    
  );
}
