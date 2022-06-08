import './ZonasVerdes.css'
import { getDataFromCollection } from '../../database/fetchData'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import CardZonasVerdes from '../../components/CardZonasVerdes/CardZonasVerdes'
import DisplayPagination from '../../components/DisplayPagination/DisplayPagination'
import TopNavBar from '../../components/TopNavBar/TopNavBar'
import agregar from '../../images/agregar.png'
import { obtenerUserLog } from '../../database/firebase';


export default function ZonasVerdes(){
    const [dividedData,setDividedData] = useState([[]])
    const [pagina, setPagina] = useState(0)
    const [userIn, setUserIn] = useState(false)
    
    async function fetchData(){
        await getDataFromCollection('zonasVerdes')
        .then((info) =>{
            setDividedData(divideDataIntoArrays(info))
        })
        //Dividimos la información en pequeños arreglos de 6 elementos, para poder realizar la paginación de mejor manera        
    }

    //Divide un arreglo en pequeños arreglos de 6 elementos.
    function divideDataIntoArrays(dataToDivide){
        let cont = 0
        let finalArr = []
        let arr = []
        dataToDivide.forEach((canton) =>{
            cont += 1
            arr.push(canton)
            if(cont == 6){
                finalArr.push(arr)
                arr = []
                cont = 0
            }
        })
        if (cont != 0){
            finalArr.push(arr)
        }
        
        return finalArr
    }

    useEffect(() => {
      fetchData()
      setUserIn(obtenerUserLog())
    }, [userIn])


    return(
        <>
            <TopNavBar zonasVerdes={true}/>
            <h1 className='ZonasVerdesTitulo'>Zonas Verdes</h1>  
            <main className='ZonasVerdesContainer'>     
                {userIn? 
                    <Card id='agregar' as={Link} to='/ZonasVerdes/:ZonaV' style={{ width: '18rem' }} >
                        <Card.Img  variant="top" src={agregar}  alt={`Imagen del paisaje`}/>
                        <Card.Body id='body'>
                            <Card.Title >Agregar una Zona Verde</Card.Title>
                        </Card.Body>
                    </Card>
                :<></>}  
                {dividedData[pagina].map((canton) => {
                    return(
                        <CardZonasVerdes
                            key={canton.nombre}
                            src={canton.imagen}
                            nombre={canton.nombre}
                            descripcion={canton.descripcion}
                            ubicacion={canton.ubicacion}
                        />
                    )
                })}
            </main>
            <DisplayPagination 
                arr={dividedData}
                setPagina={setPagina}
                activePage = {pagina+1}
            />
        </>
    )
}