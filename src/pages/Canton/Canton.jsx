import './Canton.css'
import { useParams } from 'react-router-dom'

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import DisplayPagination from '../../components/DisplayPagination/DisplayPagination'
import CardPatrimonio from '../../components/CardPatrimonio/CardPatrimonio'

import { useEffect, useState } from 'react'

import { getDataFromCollection } from '../../database/fetchData'

export default function Canton(){
    const params = useParams()
    const [dividedData,setDividedData] = useState([[]])
    const [pagina, setPagina] = useState(0)
    
    async function fetchData(){
        await getDataFromCollection('Cantones',params.Canton,'Patrimonios')
        .then((info) => {
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
            <BreadCrumbs 
                links={[
                    {link:'/Cantones',nombre:'Cantones'},
                    {nombre:`${params.Canton}`,active:true}
                ]}
            />
            <h1 className='CantonesTitle'>Patrimonios de {params.Canton}</h1>
            {/* Falta hacer el display de la card con toda la info */}
            <main className='CantonesContainer'>            
                {dividedData.length!=0?
                dividedData[pagina].map((patrimonio) => {
                    return(
                        <>
                            <CardPatrimonio
                                link={`/Cantones/${params.Canton}/${patrimonio.nombre}`}
                                src={patrimonio.imagenes.length!=0?patrimonio.imagenes[0]:""}
                                nombre={patrimonio.nombre}
                                descripcion={patrimonio.descripcion}
                                silla={patrimonio.accesibilidad.silla?"blue":"grey"}
                                nino={patrimonio.accesibilidad.nino?"blue":"grey"}
                                blind={patrimonio.accesibilidad.blind?"blue":"grey"}
                                anciano={patrimonio.accesibilidad.anciano?"blue":"grey"}
                             />
                        </>
                    )
                })
                :
                <></>
            }
            </main>
            <DisplayPagination 
                arr={dividedData}
                setPagina={setPagina}
                activePage = {pagina+1}
            />
        </>
    )
}