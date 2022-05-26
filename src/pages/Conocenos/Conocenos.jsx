import './Conocenos.css'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Texto from '../../components/Texto/Texto'
import casona from '../../images/casona.png'
import templo from '../../images/templo.png'
import iglesia from '../../images/iglesia.png'

export default function Conocenos(){
    return(
        <>
            <Carousel touch={true}>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={casona}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={templo}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={iglesia}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <main className='Conocenos-MainContainer'>
                <h3 className='Title'>Acerca de nosotros</h3>
                <div className='Conocenos-textItem1'>
                    <Texto 
                        titulo= "¿Quienes somos?" 
                        contenido = "Somos un grupo de estudiantes" />
                </div>
                <div className='Conocenos-textItem2 Conocenos-PLeft'>
                    <Texto 
                        titulo= "Proposito" 
                        contenido = "Que los patrimonios culturales de La provincia de Guanacaste sean más conocidos "/>
                </div>
                <div className='Conocenos-textItem3'>
                    <Texto 
                        titulo= "¿A que nos dedicamos?" 
                        contenido = "Somos un grupo de estudiantes" />
                </div>
                <div className='Conocenos-textItem4 Conocenos-PLeft'>
                    <Texto 
                        titulo= "¿Por qué confiar en nosotros?" 
                        contenido = "Que los patrimonios culturales de La provincia de Guanacaste sean más conocidos "/>
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