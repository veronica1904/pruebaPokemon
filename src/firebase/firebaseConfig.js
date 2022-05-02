import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAPaFnLCwZ2GXlCBaSlxVC3OueIlM7XDnM",
  authDomain: "pt-pokemon-1122e.firebaseapp.com",
  databaseURL: "https://pt-pokemon-1122e-default-rtdb.firebaseio.com",
  projectId: "pt-pokemon-1122e",
  storageBucket: "pt-pokemon-1122e.appspot.com",
  messagingSenderId: "981249576323",
  appId: "1:981249576323:web:42dd72485cb8d60c27fab6",
  measurementId: "G-LB70YZFPBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
  app, 
  google, 
  facebook,
  db
}