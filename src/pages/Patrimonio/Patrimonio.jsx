import './Patrimonios.css'

import { useParams } from 'react-router-dom'

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'

export default function Patrimonios(){
    const params = useParams()

    return(
        <>
            <BreadCrumbs 
                links={[
                    {link:'/Cantones',nombre:'Cantones'},
                    {link:`/Cantones/${params.Canton}`,nombre:params.Canton},
                    {nombre:`${params.Patrimonio}`,active:true}
                ]}
            />
            <p>Estamos en patrimonios</p>``
        </>
    )
}