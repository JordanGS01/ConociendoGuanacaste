import './Canton.css'
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'

export default function Canton(){
    const params = useParams()
    return(
        <>
            <BreadCrumbs 
                links={[
                    {link:'/Cantones',nombre:'Cantones'},
                    {nombre:`${params.Canton}`,active:true}
                ]}
            />
            <p>Estamos en {params.Canton}</p>
        </>
    )
}