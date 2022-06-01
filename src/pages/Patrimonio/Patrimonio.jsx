import './Patrimonios.css'

import { useParams } from 'react-router-dom'

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'

export default function Patrimonios(){
    const params = useParams()

    return(
        <>
            <p>Estamos en patrimonios</p>
        </>
    )
}