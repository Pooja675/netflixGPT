// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv9aPTzwTTH-lQLBnvrY8Iwg7ootXiwaA",
  authDomain: "netflixgpt-ae71b.firebaseapp.com",
  projectId: "netflixgpt-ae71b",
  storageBucket: "netflixgpt-ae71b.appspot.com",
  messagingSenderId: "88463945685",
  appId: "1:88463945685:web:f95fca0f37e76db8a9d75c",
  measurementId: "G-QMJ96BRRGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();