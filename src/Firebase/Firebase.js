// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3E95v5r0XAC2KP72T5lg76H-mqNOjXoQ",
  authDomain: "acm-hacks.firebaseapp.com",
  projectId: "acm-hacks",
  storageBucket: "acm-hacks.appspot.com",
  messagingSenderId: "933115887831",
  appId: "1:933115887831:web:99a97133ffb6b19e0f3092",
  measurementId: "G-59P79X8PCH"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const analytics = getAnalytics( app );

export const auth = getAuth( app );