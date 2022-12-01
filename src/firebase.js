// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa33Ihjd7S9HTVcze6qSdhddPddA2IiZI",
  authDomain: "chatly-bd612.firebaseapp.com",
  projectId: "chatly-bd612",
  storageBucket: "chatly-bd612.appspot.com",
  messagingSenderId: "369533038593",
  appId: "1:369533038593:web:b85028df7fd04ba5389000"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();