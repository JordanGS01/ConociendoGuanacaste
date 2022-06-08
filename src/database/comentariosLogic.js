import { db } from "./firebase";
import { updateDoc, doc } from "firebase/firestore";


export async function updateComentarioPatrimonio(nombreCanton, nombrePatrimonio, nuevosComentarios){
    try{
        const docRef = doc(db,'Cantones',nombreCanton,'Patrimonios',nombrePatrimonio)
        await updateDoc(docRef,{
            comentarios: nuevosComentarios
        })
    }catch(error){
        console.log(error)
    }
}