// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2244e.firebaseapp.com",
  projectId: "mern-estate-2244e",
  storageBucket: "mern-estate-2244e.appspot.com",
  messagingSenderId: "520358369349",
  appId: "1:520358369349:web:9e13302fb4e1474d366b2c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);