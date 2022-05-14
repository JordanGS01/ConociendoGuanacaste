import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";



export async function getDataFromCollection(colName){
    try{
        const colRef = collection(db,colName)
        const colSnapshot = await getDocs(colRef)
        const data = colSnapshot.docs.map(info => info.data())
        return data
    }
    catch(error){
        console.log(error)
    }
}