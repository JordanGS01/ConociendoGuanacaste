import './ZonaV.css'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import {storage} from '../../database/firebase'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {firebaseCrear } from '../../database/firebase'
import {v4} from 'uuid'
import imagenLog from '../../images/imagenLog.PNG'
import cgLogo from '../../images/cgLogo.png'
import { useNavigate } from 'react-router-dom'
import TopNavBar from '../../components/TopNavBar/TopNavBar'

export default function ZonaV() {

    var estado = true;
    let navigate = useNavigate()

    const [valorImage, setValorImage] = useState('');

    const onChangeImage = function (valor) {
        debugger;
        setValorImage(valor.target.files[0])
    }

    async function subirZonaVerde () {
        debugger;
        if(valorImage == ""){
            estado = false ;  
        } 
        estado = true;
        const imageRef = ref(storage, `ZonasVerdes/${valorImage.name + v4()}`);
        await uploadBytes(imageRef, valorImage);
        await getDownloadURL(imageRef).then(function(url) {
            const valorURLStorage = url
            const data = {
                nombre : valorNombre,
                descripcion: valorDescrip,
                canton: valorCanton,
                ubicacionGoogle: valorURLGoogle,
                ubicacionWaze: valorURLWaze,
                imagen: valorURLStorage,
              };
              firebaseCrear('zonasVerdes', data);
        })
        
    };

    const [valorCanton, setValorCanton] = useState('');
    
    const onChangeCanton = function(valor) {
      setValorCanton(valor.target.value)
    }

    const [valorURLGoogle, setValorURLGoogle] = useState('');
    
    const  onChangeURLGoogle = function(valor) {
      setValorURLGoogle(valor.target.value)
    }

    const [valorURLWaze, setValorURLWaze] = useState('');
    
    const  onChangeURLWaze = function(valor) {
      setValorURLWaze(valor.target.value)
    }

    const [valorNombre, setValorNombre] = useState('');
    
    const onChangeNombre = function(valor) {
        setValorNombre(valor.target.value)
    }

    const [valorDescrip, setValorDescrip] = useState('');
    
    const onChangeDescrip = function(valor) {
        setValorDescrip(valor.target.value)
      }

      const [validated, setValidated] = useState(false);

    async function ChequeoForm (event) {

        debugger;
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          setValidated(true);
        }


        else{
            event.preventDefault();
            await subirZonaVerde();
            if (estado) {
                alert("Exito al enviar tu formulario");
                navigate('/');
            } else {
              alert('Error al intentar subir esta imagen');
            }
        }
      };
      
      return (
        <>
        <TopNavBar zonasVerdes={true}/>
        <div className="form">
            <div class="col-md-6">
                <img className='imagLog' src={imagenLog} />
            </div>
            <div className='formulario' class="col-md-6">
                <div id="bloqueFormLog" className='form2'>
                    <div className='logo'>
                        <img className='images' src={cgLogo} />
                    </div>
                    <div class="titulo">
                        <h3>Formulario</h3>
                    </div>
                    <Form noValidate validated={validated} onSubmit={ChequeoForm}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Nombre de la ubicación" onChange={onChangeNombre} required />
                            <Form.Control.Feedback type="invalid">Porfavor introduce una ubicación.</Form.Control.Feedback>
                        </Form.Group>
                        <br />

                        <Form.Group>
                            <Form.Control type="text" placeholder="Descripción del lugar" onChange={onChangeDescrip} required/>
                            <Form.Control.Feedback type="invalid">Porfavor introduce una descripción.</Form.Control.Feedback>
                        </Form.Group>
                        <br />


                        <Form.Group>
                        <Form.Label>Selecciona el cantón</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={onChangeCanton} required pattern= "[A-Za-z0-9_]{1,11} " >
                            <option value="Abangares"> Abangares </option>
                            <option value="Bagaces">Bagaces</option>
                            <option value="Carrillo">Carrillo</option>
                            <option value="Cañas"> Cañas </option>
                            <option value="Hojancha">Hojancha</option>
                            <option value="La Cruz">La Cruz</option>
                            <option value="Liberia"> Liberia </option>
                            <option value="Nicoya">Nicoya</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                        </Form.Select>
                        </Form.Group>
                        <br />

                        <Form.Group>
                            <Form.Control type="text" placeholder="Dirección URL en Google Maps" onChange={onChangeURLGoogle} required />
                            <Form.Control.Feedback type="invalid">Porfavor introduzca una dirección URL.</Form.Control.Feedback>
                        </Form.Group>
                        <br />

                        <Form.Group>
                            <Form.Control type="text" placeholder="Dirección URL en Waze" onChange={onChangeURLWaze} required/>
                            <Form.Control.Feedback type="invalid">Porfavor introduzca una dirección URL.</Form.Control.Feedback>
                        </Form.Group>
                        <br />


                        <Form.Group controlId="formFile">
                            <Form.Label>Foto del lugar</Form.Label>
                            <Form.Control type="file" onChange={onChangeImage} required />
                            <Form.Control.Feedback type="invalid">Porfavor seleccione un archivo.</Form.Control.Feedback>
                        </Form.Group>
                        <br />
                        <Button type="submit" variant="success" className='TNV-Button' >Registrar lugar</Button>
                    </Form>
                </div>
            </div>
        </div>
        </>
    )
}