// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdoHU-V0bqp_lKa6Y9tDwmkA79CW3NAhQ",
  authDomain: "netflixgpt-f0cad.firebaseapp.com",
  projectId: "netflixgpt-f0cad",
  storageBucket: "netflixgpt-f0cad.firebasestorage.app",
  messagingSenderId: "66378041047",
  appId: "1:66378041047:web:3f08b1a395cc2da8bbd292",
  measurementId: "G-BR3HR71PB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
console.log(auth);