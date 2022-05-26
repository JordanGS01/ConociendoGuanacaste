// Aqui se encuentra la config de DB y sus CRUDS
import { initializeApp } from "firebase/app"
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword } from "firebase/auth"
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from "firebase/firestore"
import {v4 as uuid } from 'uuid'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAl4229uhxtEztfRpmGp2PBWR0vzuOuavI",
  authDomain: "conoceguanacastedb.firebaseapp.com",
  projectId: "conoceguanacastedb",
  storageBucket: "conoceguanacastedb.appspot.com",
  messagingSenderId: "286415194065",
  appId: "1:286415194065:web:5bea1ac2b3b81afb9882f0"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const db = getFirestore(app)
const auth = getAuth();

export function firebaseRegistrarUsuario(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

debugger;
export async function firebaseIniciarSesion(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    debugger;

  } catch (e) {
    return false;
  }
  return true;
}

export async function firebaseBuscar(coleccionABuscar) {
  let listado = [];
  let consulta = collection(getFirestore(), coleccionABuscar);
  let resultado = await getDocs(consulta);
  resultado.forEach(documento => {
    let objeto = documento.data();
    objeto.id = documento.id;
    listado.push(objeto);
  });
  return listado;
}

export function firebaseCrear(coleccion, objeto) {
  objeto.id = uuid();
  let referencia = doc(getFirestore(), coleccion, objeto.id);
  setDoc(referencia, objeto);
}

export async function firebaseEliminar(coleccion, id) {
  debugger
  await deleteDoc(doc(getFirestore(), coleccion, id));
}

export {db}