import { db } from "./firebase";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";


export async function getPatrimonio(nombreCanton,nombrePatrimonio){
    const messageRef = doc(db, "Cantones", nombreCanton, "Patrimonios", nombrePatrimonio);
    const docSnap = await getDoc(messageRef);
    return docSnap.data()
}
    
//Recibe el nombre de la colección y retorna todos sus documentos
export async function getDataFromCollection(colName, docName = "", subColName = ""){
    try{
        let colRef
        if(docName != "" && subColName != ""){
            colRef = collection(db,colName,docName,subColName)
        }else{
            colRef = collection(db,colName)
        }        
        const colSnapshot = await getDocs(colRef)
        const data = colSnapshot.docs.map(info => info.data())
        return data
    }
    catch(error){
        console.log(error)
    }


}