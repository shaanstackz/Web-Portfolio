// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkbecRqRR-V7Wa96K36JYfIqH-Jo1PmOU",
  authDomain: "web-portfolio-26cfa.firebaseapp.com",
  projectId: "web-portfolio-26cfa",
  storageBucket: "web-portfolio-26cfa.firebasestorage.app",
  messagingSenderId: "568094409620",
  appId: "1:568094409620:web:dd5cac1cf9891ff52d8581",
  measurementId: "G-2SM6S4M9K9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);