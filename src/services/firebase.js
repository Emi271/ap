// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpZ4jwujrqyg2e18AEputHOs84XA5jp8s",
  authDomain: "high-school-dxd-app.firebaseapp.com",
  projectId: "high-school-dxd-app",
  storageBucket: "high-school-dxd-app.appspot.com",
  messagingSenderId: "261197360430",
  appId: "1:261197360430:web:b2c2ad8dd1ff94df70debf",
  measurementId: "G-GEHD3NY7RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)