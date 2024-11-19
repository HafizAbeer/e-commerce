// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw9-i8TQVstznkTYElF-einjO7zcPW_sk",
  authDomain: "abeer-s-store.firebaseapp.com",
  projectId: "abeer-s-store",
  storageBucket: "abeer-s-store.firebasestorage.app",
  messagingSenderId: "232577550878",
  appId: "1:232577550878:web:f4a21a281c94c92dbb3c0f",
  measurementId: "G-DNQSBF2HT9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDB = getFirestore(app);

const auth = getAuth(app);

export { auth, fireDB };
