// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASyjb11rpKY8KMNrnCxyyiymVrRNR-DrU",
  authDomain: "prueba-bemaster.firebaseapp.com",
  projectId: "prueba-bemaster",
  storageBucket: "prueba-bemaster.appspot.com",
  messagingSenderId: "774619098659",
  appId: "1:774619098659:web:257882986b073718c2cb96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);