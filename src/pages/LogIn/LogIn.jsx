import './LogIn.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {firebaseIniciarSesion} from '../../database/firebase'
import {Button, Form , Card} from 'react-bootstrap'
import imagenLog from '../../images/imagenLog.PNG'
import cgLogo from '../../images/cgLogo.png'

export default function LogIn(){
    let navigate = useNavigate()
    // Funcion para validar si existe o no el usuario e ingresar a pagina principal
    async function iniciarSesion () {
        debugger;
        let sesionIniciada = await firebaseIniciarSesion(valorEmail, valorCon);

        if (sesionIniciada) {
            alert("Exito al iniciar");
            navigate('/');
        } else {
          alert('La informacion no es correcta');
        }
      }

      // Funciones para obtener info de los inputs
      const [valorEmail, setValorEmail] = useState('');
    
      const onChangeEmail = function(valor) {
          setValorEmail(valor.target.value)
        }
        
        const [valorCon, setValorCon] = useState('');
      
      const onChangeCon = function(valor) {
          setValorCon(valor.target.value)
      }

    return(
      <div class="row">
            <div class="col-md-6">
                <img className='imagLog' src={imagenLog} />
            </div>
            <div name="form" class="col-md-6">
              <div id="bloqueFormLog">
                <img className='images' src={cgLogo} />
                <div class="titulo">
                  <h3>Ingresar</h3>
                </div>
                <Form>
                  <Form.Group  controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Correo electrónico" onChange={onChangeEmail} />
                  </Form.Group>
                  <br/>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Ingresar contraseña" onChange={onChangeCon} />
                  </Form.Group>
                  <br/>
                  <Button variant="success" className='TNV-Button'onClick={iniciarSesion}>Ingresar</Button>
                </Form>
              </div>
            </div>
          </div>
    )
}
