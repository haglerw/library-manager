// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuTHTBJ4iyWSN2m1bDzGjciMvCwucpjP4",
  authDomain: "library-manager-fc12e.firebaseapp.com",
  databaseURL: "https://library-manager-fc12e-default-rtdb.firebaseio.com",
  projectId: "library-manager-fc12e",
  storageBucket: "library-manager-fc12e.firebasestorage.app",
  messagingSenderId: "568747134820",
  appId: "1:568747134820:web:102645b388594838d4b471",
  measurementId: "G-YESX9H7CE3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
