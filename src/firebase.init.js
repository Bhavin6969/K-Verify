// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ4U-14stXohFXWtIt-CYFP0mCxfLu6tw",
  authDomain: "e-kyc-verification.firebaseapp.com",
  projectId: "e-kyc-verification",
  storageBucket: "e-kyc-verification.appspot.com",
  messagingSenderId: "34376933897",
  appId: "1:34376933897:web:916ec1b0662ae51f7f8ed8",
  measurementId: "G-3HKM19ESLZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;