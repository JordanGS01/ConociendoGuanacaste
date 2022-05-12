import './Registro.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, Form ,  Col,Row} from 'react-bootstrap'
import imagenLog from '../../images/imagenLog.PNG'
import cgLogo from '../../images/cgLogo.png'
import {firebaseCrear } from '../../database/firebase'
import {firebaseRegistrarUsuario} from '../../database/firebase';


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
      alert("El usuario se registró con éxito.");
      navigate("/LogIn");
    }

    return(
        <div class="row">
            <div class="col-md-6">
                <img className='imagLog' src={imagenLog} />
            </div>
            <div name="form" class="col-md-6">
                <div id="bloqueFormRegis">
                    <img className='images' src={cgLogo} />
                    <div class="titulo">
                        <h3>Registrarse</h3>
                    </div>
                    <Form>
                    <Row>
                        <Col>
                        <Form.Control placeholder="Primer nombre" onChange={onChangeNombre} />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Apellidos" onChange={onChangeApellidos}/>
                        </Col>
                    </Row>
                    <br/>
                    <Form.Group  controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Correo electrónico" onChange={onChangeEmail} />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Ingresar contraseña" onChange={onChangeCon}/>
                    </Form.Group>
                    <br/>
                    <Button variant="success" className='TNV-Button'onClick={registrarUsuario}>Registarse</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}