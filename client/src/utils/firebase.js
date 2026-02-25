
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-exam-notes-generator-35ff4.firebaseapp.com",
  projectId: "ai-exam-notes-generator-35ff4",
  storageBucket: "ai-exam-notes-generator-35ff4.firebasestorage.app",
  messagingSenderId: "343065340070",
  appId: "1:343065340070:web:37a271ed8cade79f146c67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}