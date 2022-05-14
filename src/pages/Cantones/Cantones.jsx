import './Cantones.css'
import { getDataFromCollection } from '../../database/fetchData'
import CardCantones from '../../components/CardCantones/CardCantones'
import { useEffect, useState } from 'react'

export default function Cantones(){
    const [data, setData] = useState([])

    async function fetchData(){
        const info = await getDataFromCollection('Cantones')
        setData(info)
    }

    useEffect(() => {
      fetchData()
    }, [])
    
    return(
        <main className='CantonesContainer'>
            {data.map((canton) => {
                return(
                    <CardCantones
                        key={canton.nombre}
                        link=""
                        src={canton.img}
                        nombre={canton.nombre}
                        descripcion={canton.descripcion}
                    />
                )
            })}            
        </main>
    )
}