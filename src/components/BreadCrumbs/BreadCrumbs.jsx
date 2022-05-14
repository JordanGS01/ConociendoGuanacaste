import './BreadCrumbs.css'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'

/*Recibe un arreglo de objetos con los siguientes atributos:
    1.link: strin con el link del router a enlazar
    2.nombre: nombre a renderizar.
    3.active: boleano que solo debe tener el objeto que estará activo*/
export default function BreadCrumbs(props){    
    return(
        <Breadcrumb className='BreadCrumb-Container'>
            {props.links.map((info) => {
                return( 
                    <>
                        {info.hasOwnProperty('active')?
                        <Breadcrumb.Item active>
                                <b>{info.nombre}</b>
                        </Breadcrumb.Item>
                        :
                        <Breadcrumb.Item className='BreadCrumb-Link'>
                            <Link to={info.link}>
                                <span className='BreadCrumb-Link-Text'>{info.nombre}</span>
                            </Link>
                        </Breadcrumb.Item>}
                    </>
                )
            })}
        </Breadcrumb>
    )
}