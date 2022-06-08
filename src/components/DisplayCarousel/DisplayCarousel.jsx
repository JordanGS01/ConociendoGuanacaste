import './DisplayCarousel.css'

import Carousel from 'react-bootstrap/Carousel'

export default function DisplayCarousel(props){
    if (!props.hasOwnProperty("imagenes")){return}
    return(
        <>
            <Carousel touch={true}>
                {props.imagenes.map((img) => {
                    return(
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100 img-fluid"
                            src={img}
                            alt="Imagen de un paisaje"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                })}
            </Carousel>
        </>
    )
}