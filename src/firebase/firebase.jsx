// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq3Fv530yo3q7rMdfDI20A6lbce38rzjo",
  authDomain: "todo-app-2df73.firebaseapp.com",
  projectId: "todo-app-2df73",
  storageBucket: "todo-app-2df73.appspot.com",
  messagingSenderId: "1000674223640",
  appId: "1:1000674223640:web:3f46f61a9a4d93ae51456d",
  measurementId: "G-3FS5QM295Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {
  auth,
  db,
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
