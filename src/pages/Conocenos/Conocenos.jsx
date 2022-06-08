import './Conocenos.css'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Texto from '../../components/Texto/Texto'
import playaGuanacaste from '../../images/CatarataCeleste.jpg'
import GuanacastePalo from '../../images/GuanacastePalo.webp'
import CatarataCeleste from '../../images/playaGuanacaste.avif'

import {auth} from '../../database/firebase'

export default function Conocenos(){
    return(
        <>
            <Carousel touch={true}>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={playaGuanacaste}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={GuanacastePalo}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={CatarataCeleste}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <main className='Conocenos-MainContainer'>
                <h2 className='Title'>Acerca de nosotros</h2>
                <div className='Conocenos-textItem1'>
                    <Texto 
                        titulo= "¿Quienes somos?" 
                        contenido = "Somos un grupo de estudiantes de tercer año de la carrera de ingeniería en computación del Instituto Tecnologico de Costa Rica." />
                </div>
                <div className='Conocenos-textItem2 Conocenos-PLeft'>
                    <Texto 
                        titulo= "Proposito" 
                        contenido = "Que los patrimonios culturales de La provincia de Guanacaste sean más conocidos. "/>
                </div>
                <div className='Conocenos-textItem4 Conocenos-PLeft'>
                    <Texto 
                        titulo= "¿Por qué confiar en nosotros?" 
                        contenido = "Toda la información brindada dentro de esta página fue revisada de forma previa."/>
                </div>
                <div className='Conocenos-image'>
                    <Image fluid  src="https://cdn2.civitatis.com/costa-rica/guanacaste/galeria/header/cataratas-llano-cortes.jpg" />
                </div>
                <div className='Conocenos-textItem5 Conocenos-PLeft'>
                    <Texto 
                        titulo= "¿Qué ofrece la página?" 
                        contenido = "Ofrece información sobre los patrimonios naturales de la provincia de Guanacaste, Costa Rica, además de la accesibilidad que estos proveen a sus visitantes (acceso a silla de ruedas, senderos accesibles fácilmente, entre otros)."/>
                </div>
            </main>
            <div className='Conocenos-CCD'>
                <h1>Conoce, cuida y disfruta.</h1>
            </div>
        </>
    )
}