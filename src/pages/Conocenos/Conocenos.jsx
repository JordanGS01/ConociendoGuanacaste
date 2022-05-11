import './Conocenos.css'
import Carousel from 'react-bootstrap/Carousel'
import Texto from '../../components/Texto/Texto'

export default function Conocenos(){
    return(
        <>
        <Carousel touch={true}>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src="https://staticuestudio.blob.core.windows.net/buhomag/2016/10/06120007/everest1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src="https://st.depositphotos.com/1563944/2419/i/600/depositphotos_24199705-stock-photo-three-close-mountain-peak.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <h3 id='Title'>Acerca de nosotros</h3>
        <div id='info1'>
        <Texto titulo= "¿Quienes somos?" 
        contenido = "Somos un grupo de estudiantes" />
        <Texto titulo= "Proposito" 
        contenido = "Que los patrimonios culturales de La provincia de Guanacaste sean más conocidos "/>
        </div>
        <div id='info1'>
        <Texto titulo= "¿A que nos dedicamos?" 
        contenido = "Somos un grupo de estudiantes" />
        <Texto titulo= "¿Por qué confiar en nosotros?" 
        contenido = "Que los patrimonios culturales de La provincia de Guanacaste sean más conocidos "/>
        </div>
        </>
    )
}