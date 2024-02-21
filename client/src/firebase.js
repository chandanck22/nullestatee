// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nullestate.firebaseapp.com",
  projectId: "nullestate",
  storageBucket: "nullestate.appspot.com",
  messagingSenderId: "1032885391395",
  appId: "1:1032885391395:web:055cb04b45924903b2a196"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);