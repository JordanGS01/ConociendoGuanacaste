import './Patrimonios.css'
import { useParams } from 'react-router-dom'

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { getPatrimonio } from '../../database/fetchData';
import { useEffect, useState } from 'react'

import google from '../../images/googlemaps.png'
import waze from '../../images/waze.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWheelchair,faChildren, faPersonWalkingWithCane, faPersonCane} from '@fortawesome/free-solid-svg-icons';

export default function Patrimonios(){
    const params = useParams()
    const [data,setData] = useState({})

    async function fetchData(){
        setData(await getPatrimonio(params.Canton,params.Patrimonio))
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (data === undefined || !data.hasOwnProperty('geolocalizacion')){return}

    return(
        <>
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
        </>
    )
}