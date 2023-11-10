// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9UCdOwxMtWmNgd3bZmW78u8o8O0wXscY",
  authDomain: "website-2023-80031.firebaseapp.com",
  projectId: "website-2023-80031",
  storageBucket: "website-2023-80031.appspot.com",
  messagingSenderId: "262261015067",
  appId: "1:262261015067:web:f6e6e79742ca93a307aebe",
  measurementId: "G-E3JT9WBTEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);