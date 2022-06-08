import './Patrimonios.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import Comentario from '../../components/Comentario/Comentario';
import TopNavBar from '../../components/TopNavBar/TopNavBar'

import { getPatrimonio } from '../../database/fetchData';
import { obtenerUserLog } from '../../database/firebase';
import { updateComentarioPatrimonio } from '../../database/comentariosLogic';
import { getUserWithEmail } from '../../database/fetchUserData';

import google from '../../images/googlemaps.png'
import waze from '../../images/waze.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWheelchair,faChildren, faPersonWalkingWithCane, faPersonCane} from '@fortawesome/free-solid-svg-icons';

import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Patrimonios(){
    //Variable para verificar si el usuario se encuentra o no logueado
    const [userIn, setUserIn] = useState(false)

    const params = useParams()
    const [data,setData] = useState({})
    const [comentario,setComentario] = useState("")
    const [comentariosPagina, setComentariosPagina] = useState([{}])
    
    const [nombreUsuario,setNombreUsuario] = useState("")
    const [idUsuario,setIdUsuario] = useState("")

    //Creación del comentario que será subido a Firebase
    function createComentarioFirebase(){
        const comentarioObject = {
            comentario,
            nombre: nombreUsuario,
            idUsuario
        }
        const comentariosPaginaActualizados = [...comentariosPagina,comentarioObject]
        setComentariosPagina(comentariosPaginaActualizados)
        updateComentarioPatrimonio(params.Canton,params.Patrimonio,comentariosPaginaActualizados)
    }

    async function setIdNombreUsuario(){
        const userInfo = await getUserWithEmail(userIn.email)
        setNombreUsuario(userInfo.nombre + " " + userInfo.apellidos)
        setIdUsuario(userInfo.id)
    }

    //Manejar el cambio en el comentario
    function handleOnChange(e){
        const value = e.target.value
        setComentario(value)
    }

    //Manejar el evento "submit" del Form con el comentario
    function handleOnSubmit(e){
        e.preventDefault();
        createComentarioFirebase()
    }

    //Extracción de los datos del patrimonio
    async function fetchData(){
        const datosPatrimonio = await getPatrimonio(params.Canton,params.Patrimonio)
        setData(datosPatrimonio)
        if(datosPatrimonio !== undefined){
            setComentariosPagina(datosPatrimonio.comentarios)
        }
    }

    useEffect(() => {
        fetchData()
        setUserIn(obtenerUserLog())
        if(userIn){
            setIdNombreUsuario()
        }
    }, [userIn])

    if (data === undefined || !data.hasOwnProperty('geolocalizacion')){return}//Filtro. Si no se cumplen las condiciones, no se renderiza nada

    return(
        <>
            <TopNavBar cantones={true}/>
            <BreadCrumbs 
                links={[
                    {link:'/Cantones',nombre:'Cantones'},
                    {link:`/Cantones/${params.Canton}`,nombre:params.Canton},
                    {nombre:`${params.Patrimonio}`,active:true}
                ]}
            />
            {/*Se engloba todo en una etiqueta main porque este es el contenido principal de la página! */}
            <main className='Patrimonio-MainContentContainer'>
                <h1>{data.nombre}</h1>
                {/*Falta hacer el display de las imágenes*/}
                <p align="justify">{data.descripcion}</p>
                <p><strong>Horario de atención:</strong> {data.horario}</p>     
                <div className='Patrimonio-Ubicacion'>
                    <p><strong>Como llegar:</strong></p> 
                    <nav>{/*Estos otros se engloban en nav porque son componentes de navegación*/}
                        <a href={data.geolocalizacion.googleMaps} target="_blank">
                            <img className='imagenCardZonasVerdes' src={google} />
                        </a>
                        <a href={data.geolocalizacion.waze} target="_blank">
                            <img className='imagenCardZonasVerdes' src={waze} />
                        </a>
                    </nav>
                </div>

                <div className='Patrimonio-Accesibilidad'>
                    <p><strong>Accesibilidad:</strong> </p>
                    <div>
                        <FontAwesomeIcon id='Icono' style={{ color: data.accesibilidad.silla?"blue":"grey", fontSize: "40px" }} icon={faWheelchair} />
                        <FontAwesomeIcon id='Icono' style={{ color: data.accesibilidad.nino?"blue":"grey", fontSize: "40px"}} icon={faChildren} />
                        <FontAwesomeIcon id='Icono' style={{ color: data.accesibilidad.blind?"blue":"grey", fontSize: "40px"}} icon={faPersonWalkingWithCane} />
                        <FontAwesomeIcon id='Icono' style={{ color: data.accesibilidad.anciano?"blue":"grey", fontSize: "40px"}} icon={faPersonCane} />
                    </div>    
                </div>
            </main>
            <section className='Patrimonio-Comentarios'>
                <h4 className='Patrimonio-Comentarios-Titulo'>Comentarios</h4>
                {
                comentariosPagina.map((elemento) => {
                    return(
                        <Comentario
                            key={elemento.nombre}
                            nombreUsuario={elemento.nombre}
                            comentario={elemento.comentario}
                        />
                    )
                })}
                {userIn?
                    <Form className='Comentario-AgregarNuevoComentario' onSubmit={handleOnSubmit}>
                    <Form.Control onChange={handleOnChange} as="textarea" rows={2} placeholder='Comenta!' />
                    <Button variant="success" type="submit">Comentar</Button>
                    </Form>
                :<></>
                }
            </section>
        </>
    )
}