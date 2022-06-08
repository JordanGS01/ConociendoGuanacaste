import './LogIn.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {firebaseIniciarSesion} from '../../database/firebase'
import {Button, Form , Card} from 'react-bootstrap'
import imagenLog from '../../images/imagenLog.PNG'
import cgLogo from '../../images/cgLogo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function LogIn(){
    let navigate = useNavigate()
    // Funcion para validar si existe o no el usuario e ingresar a pagina principal
    
    // Funciones para obtener info de los inputs
    const [valorEmail, setValorEmail] = useState('');
    
    const onChangeEmail = function(valor) {
        setValorEmail(valor.target.value)
      }
      
      const [valorCon, setValorCon] = useState('');
    
    const onChangeCon = function(valor) {
        setValorCon(valor.target.value)
    }

    const [validated, setValidated] = useState(false);
    
    async function ChequeoForm (event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
      }

      else{
        event.preventDefault();
        debugger;
        let sesionIniciada = await firebaseIniciarSesion(valorEmail, valorCon);   // Funcion para validar si existe o no el usuario e ingresar a pagina principal
        if (sesionIniciada) {
          alert("Exito al iniciar su sesión");
          navigate('/');
      } else {
        alert('Verifique sus datos');
      }
      }
    };

    return(
      <div className='form'>
            <div class="col-md-6">
                <img className='imagLog' src={imagenLog} />
            </div>
            <div name="form" class="col-md-6">
              <div id="bloqueFormLog">
                <div className='logo'>
                  <img className='images' src={cgLogo} />
                </div>
                <div class="titulo">
                  <h3>Ingresar</h3>
                </div>
                <Form noValidate validated={validated} onSubmit={ChequeoForm}>
                  <Form.Group  controlId="formBasicEmail" className='campo'>
                    <Form.Control type="email" placeholder="Correo electrónico" onChange={onChangeEmail} required />
                    <FontAwesomeIcon className="icono" icon={faEnvelope} />
                    <Form.Control.Feedback type="invalid">Porfavor introduzca su correo electrónico.</Form.Control.Feedback>
                  </Form.Group>
                  <br/>
                  <Form.Group controlId="formBasicPassword" className='campo'>
                    <Form.Control type="password" placeholder="Ingresar contraseña" onChange={onChangeCon} required />
                    <FontAwesomeIcon className="icono" icon={faLock} />
                    <Form.Control.Feedback type="invalid">Porfavor introduzca su contraseña.</Form.Control.Feedback>
                  </Form.Group>
                  <br/>
                  <Button type="submit" variant="success" className='TNV-Button'>Ingresar</Button>
                </Form>
              </div>
            </div>
          </div>
    )
}