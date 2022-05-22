import './Cantones.css'
import { getDataFromCollection } from '../../database/fetchData'
import { useEffect, useState } from 'react'
import CardCantones from '../../components/CardCantones/CardCantones'
import DisplayPagination from '../../components/DisplayPagination/DisplayPagination'

export default function Cantones(){
    //const [data, setData] = useState([])
    const [dividedData,setDividedData] = useState([[]])
    const [pagina, setPagina] = useState(0)
    
    async function fetchData(){
        await getDataFromCollection('Cantones')
        .then((info) =>{
            //setData(info)
            setDividedData(divideDataIntoArrays(info))//Dividimos la información en pequeños arreglos de 6 elementos, para poder realizar la paginación de mejor manera
        })        
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
            <h1 className='CantonesTitle'>Cantones de Guanacaste</h1>
            <main className='CantonesContainer'>            
                {dividedData[pagina].map((canton) => {
                    return(
                        <CardCantones
                            key={canton.nombre}
                            link={`/Cantones/${canton.nombre}`}
                            src={canton.img}
                            nombre={canton.nombre}
                            descripcion={canton.descripcion}
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