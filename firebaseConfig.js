// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeE2Yn3TNKpVYFiQyPU7yuNvv9SJ-PglM",
  authDomain: "store-69c57.firebaseapp.com",
  projectId: "store-69c57",
  storageBucket: "store-69c57.firebasestorage.app",
  messagingSenderId: "15295507528",
  appId: "1:15295507528:web:3d871759f73bd444993c7d",
  measurementId: "G-5PDLRP57P7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);