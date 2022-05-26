import './ZonasVerdes.css'
import { getDataFromCollection } from '../../database/fetchData'
import { useEffect, useState } from 'react'
import CardZonasVerdes from '../../components/CardZonasVerdes/CardZonasVerdes'
import DisplayPagination from '../../components/DisplayPagination/DisplayPagination'

export default function ZonasVerdes(){
    const [dividedData,setDividedData] = useState([[]])
    const [pagina, setPagina] = useState(0)
    
    async function fetchData(){
        await getDataFromCollection('zonasVerdes')
        .then((info) =>{
            setDividedData(divideDataIntoArrays(info))
        })
        //setData(info)
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
    }, [])


    return(
        <>
            <h1 className='ZonasVerdesTitulo'>Zonas Verdes</h1>
            <a href="./ZonasVerdes/:ZonaV">Ir al post de los enlaces</a>
            <main className='ZonasVerdesContainer'>            
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