// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCymvf76SQLSTDI-cHYmD5BbzTnP3zaKzI",
  authDomain: "e-comm-e0083.firebaseapp.com",
  projectId: "e-comm-e0083",
  storageBucket: "e-comm-e0083.appspot.com",
  messagingSenderId: "585109832497",
  appId: "1:585109832497:web:b5ac128920348ee1f32610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }