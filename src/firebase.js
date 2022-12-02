// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCih-jQRQFQ1iIHVMKqRo3yLRz3UNDf9m0",

  authDomain: "chatly101.firebaseapp.com",

  projectId: "chatly101",

  storageBucket: "chatly101.appspot.com",

  messagingSenderId: "689706778523",

  appId: "1:689706778523:web:9d31568f9005d3a2fa2b3e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
