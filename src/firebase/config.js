// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL92oeu7wQvxXZHlRdT74y7nN7LdSGGOM",
  authDomain: "doble-amarilla-6bc51.firebaseapp.com",
  projectId: "doble-amarilla-6bc51",
  storageBucket: "doble-amarilla-6bc51.appspot.com",
  messagingSenderId: "695995160048",
  appId: "1:695995160048:web:9281ec4ba548a86d24f935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);