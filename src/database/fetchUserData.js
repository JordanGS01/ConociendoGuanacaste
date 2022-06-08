import { db } from "./firebase";
import { getDocs,collection, query, where } from "firebase/firestore";


export async function getUserWithEmail(email){
    try{
        const usersColRef = collection(db,"usuarios")
        const q = query(usersColRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);
        let userData
        querySnapshot.forEach((doc) => {
            userData = doc.data();
        });
        return userData
    }
    catch(error){
        console.log(error)
    }
}