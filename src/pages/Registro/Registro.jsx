import './Registro.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, Form ,  Col,Row} from 'react-bootstrap'
import imagenLog from '../../images/imagenLog.PNG'
import cgLogo from '../../images/cgLogo.png'
import {firebaseCrear } from '../../database/firebase'
import {firebaseRegistrarUsuario} from '../../database/firebase';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import TopNavBar from '../../components/TopNavBar/TopNavBar'

export default function Registro(){
    const [valorEmail, setValorEmail] = useState('');
    
    const onChangeEmail = function(valor) {
        setValorEmail(valor.target.value)
      }

    const [valorCon, setValorCon] = useState('');
    
    const onChangeCon = function(valor) {
        setValorCon(valor.target.value)
    }


    const [valorNombre, setValorNombre] = useState('');
    
    const onChangeNombre = function(valor) {
        setValorNombre(valor.target.value)
      }
        

    const [valorApellidos, setValorApellidos] = useState('');
    
    const onChangeApellidos = function(valor) {
        setValorApellidos(valor.target.value)
    }

    let navigate = useNavigate()
    const data = {
      nombre : valorNombre,
      apellidos: valorApellidos,
      email: valorEmail,
      contra: valorCon,
    };

    async function registrarUsuario() {
        await firebaseRegistrarUsuario(valorEmail, valorCon);
        firebaseCrear('usuarios', data);
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
          alert("El usuario se registró con éxito.");
          await registrarUsuario();
          navigate("/LogIn");
        }
    
    };
  

    return(
        <>
        <TopNavBar registro={true}/>
        <div className='form'>
            <div class="col-md-6">
                <img className='imagLog' src={imagenLog} alt="Colage de imagenes representativas de la provincia de Guanacaste"/>
            </div>
            <div name="form" class="col-md-6">
                <div id="bloqueFormRegis">
                    <div className='logo'>
                        <img className='images' src={cgLogo} alt="Logo de Conociendo Guanacaste. El logo es una C y una G, las siglas del slogan."/>
                    </div>
                    <div class="titulo">
                        <h3>Registrarse</h3>
                    </div>
                    <Form noValidate validated={validated} onSubmit={ChequeoForm}>
                    <Row>
                        <Col>
                        <Form.Control placeholder="Primer nombre" onChange={onChangeNombre} required/>
                        <Form.Control.Feedback type="invalid">Porfavor introduzca su nombre.</Form.Control.Feedback>
                        </Col>
                        <Col>
                        <Form.Control placeholder="Apellidos" onChange={onChangeApellidos} required/>
                        <Form.Control.Feedback type="invalid">Porfavor introduzca sus apellidos.</Form.Control.Feedback>
                        </Col>
                    </Row>
                    <br/>
                    <Form.Group  controlId="formBasicEmail" className='campo'>
                        <Form.Control type="email" placeholder="Correo electrónico" onChange={onChangeEmail} required />
                        <FontAwesomeIcon className='icono' icon={faEnvelope} />
                        <Form.Control.Feedback type="invalid">Porfavor introduzca su correo electrónico.</Form.Control.Feedback>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicPassword" className='campo'>
                        <Form.Control type="password" placeholder="Ingresar contraseña" onChange={onChangeCon} required/>
                        <FontAwesomeIcon className='icono' icon={faLock} />
                        <Form.Control.Feedback type="invalid">Porfavor introduzca una contraseña.</Form.Control.Feedback>
                    </Form.Group>
                    <br/>
                    <Button type="submit" variant="success" className='TNV-Button'>Registrarse</Button>
                    </Form>
                </div>
            </div>
        </div>
    </>
    )
}